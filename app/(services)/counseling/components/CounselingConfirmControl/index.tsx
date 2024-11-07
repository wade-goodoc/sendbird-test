import * as style from './index.css';
import Text from '@/src/components/typographies/Text';
import Button from '@/src/components/forms/Button';
import DiagnosisIcon from '@/src/assets/icons/ic_diagnosis.svg';
import Modal from '@/src/components/overlays/Modal';
import { useState } from 'react';

const CounselingConfirmControl = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className={style.container}>
      <div className={style.title}>
        <DiagnosisIcon />
        <Text type={'heading5_700'} color={'BLUE_60'}>
          예약을 확정해 주세요.
        </Text>
      </div>
      <Button
        styleType={'primarySolid'}
        size={'small'}
        onClick={() => setIsModalVisible(true)}
      >
        예약확정
      </Button>

      <Modal isVisible={isModalVisible} isPartialDim>
        <div className={style.modalContainer}>
          <Text type={'heading4_700'}>8월 29일 목요일 10시 예약을 확정합니다.</Text>
          <div className={style.modalButtons}>
            <Button
              styleType={'secondarySmooth'}
              onClick={() => setIsModalVisible(false)}
            >
              취소
            </Button>
            <Button styleType={'primarySolid'}>확인</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CounselingConfirmControl;
