import { useState } from 'react';
import { Input } from '../../components/Input';
import s from '../showcase.module.css';

function Row({ label, children }) {
  return (
    <div className={s.row}>
      <span className={s.rowLabel}>{label}</span>
      <div className={s.rowContent}>{children}</div>
    </div>
  );
}

export default function InputPage() {
  const [val, setVal] = useState('');
  return (
    <div className={s.page}>
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
