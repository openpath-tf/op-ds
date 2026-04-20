import { useState } from 'react';
import { Input } from '../../components/Input';
import { alias, spacing, typography } from '../../tokens';

function Row({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3], paddingBottom: spacing[6], borderBottom: `1px solid ${alias.border.default}` }}>
      <span style={{ fontSize: typography.scale.overline.size, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: alias.text.secondary, fontFamily: typography.fontFamily.sans }}>{label}</span>
      <div style={{ display: 'flex', gap: spacing[4], flexWrap: 'wrap' }}>{children}</div>
    </div>
  );
}

export default function InputPage() {
  const [val, setVal] = useState('');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
      <Row label="Default">
        <div style={{ width: 280 }}><Input label="이름" placeholder="홍길동" value={val} onChange={e => setVal(e.target.value)} /></div>
      </Row>
      <Row label="Helper Text">
        <div style={{ width: 280 }}><Input label="이메일" placeholder="hello@example.com" helperText="로그인에 사용할 이메일을 입력하세요" /></div>
      </Row>
      <Row label="Error">
        <div style={{ width: 280 }}><Input label="비밀번호" type="password" error="8자 이상 입력해주세요" /></div>
      </Row>
      <Row label="Disabled">
        <div style={{ width: 280 }}><Input label="읽기 전용" value="편집 불가" disabled /></div>
      </Row>
    </div>
  );
}
