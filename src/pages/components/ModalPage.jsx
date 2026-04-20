import { useState } from 'react';
import { Modal } from '../../components/Modal';
import { Button } from '../../components/Button';
import s from '../showcase.module.css';

export default function ModalPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className={s.page}>
      <div className={s.row}>
        <span className={s.rowLabel}>Default</span>
        <div className={s.rowContent}>
          <Button onClick={() => setOpen(true)}>모달 열기</Button>
        </div>
      </div>
      <p className={s.infoBox}>
        Modal은 오버레이 위에 렌더링됩니다. title, description, confirmLabel, cancelLabel, onConfirm, onCancel props를 받습니다.
      </p>
      <Modal
        open={open}
        title="정말 삭제하시겠어요?"
        description="이 작업은 되돌릴 수 없습니다. 삭제된 데이터는 복구되지 않습니다."
        confirmLabel="삭제"
        cancelLabel="취소"
        onConfirm={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      />
    </div>
  );
}
