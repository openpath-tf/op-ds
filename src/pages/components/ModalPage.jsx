import { useState } from 'react';
import { Modal } from '../../components/Modal';
import { Button } from '../../components/Button';
import { alias, spacing, typography } from '../../tokens';

export default function ModalPage() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
      <div style={{ display: 'flex', gap: spacing[3] }}>
        <Button onClick={() => setOpen(true)}>모달 열기</Button>
      </div>
      <Modal
        open={open}
        title="정말 삭제하시겠어요?"
        description="이 작업은 되돌릴 수 없습니다. 삭제된 데이터는 복구되지 않습니다."
        confirmLabel="삭제"
        cancelLabel="취소"
        onConfirm={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      />
      <div style={{ padding: spacing[6], background: alias.surface.subtle, borderRadius: 12, border: `1px solid ${alias.border.default}` }}>
        <p style={{ fontSize: typography.scale.body2.size, color: alias.text.secondary, fontFamily: typography.fontFamily.sans, margin: 0 }}>
          Modal은 오버레이 위에 렌더링됩니다. title, description, confirmLabel, cancelLabel, onConfirm, onCancel props를 받습니다.
        </p>
      </div>
    </div>
  );
}
