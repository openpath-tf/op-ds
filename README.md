# OpenPath Design System

> AI-native 교육 브랜드 범용 디자인 시스템. Clarity · Scalability · Autonomy.

## 개요

OpenPath DS는 단순한 컴포넌트 라이브러리가 아닙니다. **AI가 읽고 생성하기 좋은 구조**를 목표로 설계했습니다. 토큰 아키텍처부터 문서 구조까지, 사람과 LLM이 함께 사용하는 디자인 시스템입니다.

---

## 토큰 아키텍처

토큰을 3개 티어로 분리합니다.

```
Tier 1 (Primitive)  →  Tier 2 (Alias)  →  Tier 3 (Component)
```

### Tier 1 — Primitive (`src/tokens/primitives/`)

원시 값의 집합입니다. HEX 색상, px 수치, 폰트 크기 등 **"무엇인가"**를 정의합니다.

```js
primitive.mint[400]   // #28D7D2
primitive.neutral[900] // #212529
spacing[4]            // 16px
```

**AI context에서 제외합니다.** Primitive는 값 자체일 뿐 의미가 없으므로 LLM에 넘길 필요가 없습니다. 컴포넌트 코드에서도 직접 import하지 않습니다.

### Tier 2 — Alias (`src/tokens/semantic/`)

의미 기반 참조입니다. **"어디에 쓰이는가"**를 정의합니다. Primitive를 가리키는 포인터 역할을 합니다.

```js
alias.brand.primary   // 주요 CTA, 브랜드 강조
alias.text.secondary  // 보조 텍스트, 메타데이터
alias.surface.base    // 카드·패널 배경
alias.border.focus    // 포커스 링
```

### Tier 3 — Component (`src/tokens/semantic/colors.js`)

컴포넌트 전용 토큰입니다. Alias를 다시 참조하며, 컴포넌트 로직에서는 이 계층만 사용합니다.

```js
component.button.primaryBg     // → alias.brand.primary
component.input.focusBorder    // → alias.border.focus
```

**컴포넌트는 `../../tokens`에서만 import합니다.** Primitive 계층은 public API에서 노출하지 않습니다.

---

## LLMs.txt — Semantic 명세 캐싱

`LLMs.txt`는 AI가 이 디자인 시스템을 이해하기 위한 단일 진입점입니다.

**핵심 원칙: Primitive 값은 담지 않는다.**

HEX 코드나 px 수치가 AI context에 들어오면 토큰 비용만 낭비됩니다. LLMs.txt에는 값 대신 **의미와 규칙**만 담습니다.

```
alias.brand.primary → 주요 CTA, 브랜드 강조 (hover 상태에는 쓰지 않음)
alias.text.inverse  → 어두운 배경 위 텍스트 (밝은 배경에 쓰지 말 것)
```

컴포넌트별로는 다음을 정의합니다.

- **Props 명세** — 타입, 기본값, 유효한 값
- **When to use** — 각 variant를 써야 하는 맥락
- **When NOT to use** — 금지 패턴 (이게 없으면 AI는 항상 가장 눈에 띄는 선택만 함)
- **JSX 예시** — 실제 동작하는 코드 스니펫

AI가 `LLMs.txt`를 한 번 읽으면 이후 컴포넌트 생성·감사·페이지 구성에서 Primitive를 다시 참조할 필요가 없습니다. **반복 context 비용을 줄이는 캐싱 레이어**입니다.

---

## Agentic Skills — 비즈니스 로직 자동화

`.claude/commands/`에 정의된 슬래시 커맨드로 반복 작업을 에이전트에 위임합니다.

| 커맨드 | 역할 |
|---|---|
| `/create-component` | 새 컴포넌트 생성 — 토큰 규칙 준수, 쇼케이스 페이지까지 자동 등록 |
| `/audit-component` | 기존 컴포넌트 감사 — Primitive 직접 참조, 하드코딩 값, 누락 상태 감지 |
| `/generate-page` | 시나리오 설명 → DS 컴포넌트 조합으로 페이지 구성 |

각 스킬은 `LLMs.txt`를 먼저 읽도록 설계되어 있습니다. 에이전트가 규칙을 매번 추론하지 않고 명세에서 직접 참조합니다.

```
사용자: /create-component Badge
에이전트: LLMs.txt 로드 → alias 토큰 선택 → Badge.jsx 생성 → BadgePage.jsx 생성 → App.jsx 등록 → ESLint 통과 확인
```

---

## 컴포넌트

Button · Input · Modal · Chips · Card · AppBar · Tab · FAB · Snackbar · List

---

## 시작하기

```bash
npm install
npm run dev
```

**http://localhost:5173** 에서 Foundation → Style → Components 순으로 탐색할 수 있습니다.

---

## 스택

- React + Vite
- Inline styles (토큰 기반, CSS 프레임워크 의존 없음)
- ESLint

---

## 설계 원칙

**Clarity** — 사용자 이해 중심. 명확한 계층, 일관된 패턴.  
**Scalability** — 토큰 기반. 브랜드 변경이 컴포넌트를 건드리지 않는다.  
**Autonomy** — 컴포넌트는 외부 상태 없이 독립 동작한다.
