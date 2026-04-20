import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import s from '../showcase.module.css';

function SampleCard({ variant }) {
  return (
    <Card variant={variant} style={{ width: 240 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ height: 100, background: 'var(--color-brand-light)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-brand-primary)', fontSize: '2rem' }}>◈</div>
        <h4 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{variant}</h4>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>카드 설명 텍스트가 들어갑니다.</p>
        <Button size="sm" variant="outlined">자세히</Button>
      </div>
    </Card>
  );
}

export default function CardPage() {
  return (
    <div className={s.page}>
      <div className={s.row}>
        <span className={s.rowLabel}>Variant</span>
        <div className={s.rowContent}>
          <SampleCard variant="elevated" />
          <SampleCard variant="outlined" />
          <SampleCard variant="filled" />
        </div>
      </div>
    </div>
  );
}
