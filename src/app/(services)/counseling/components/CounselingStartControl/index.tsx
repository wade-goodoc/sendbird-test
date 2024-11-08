import * as style from './index.css';
import Text from '@/src/components/typographies/Text';
import Button from '@/src/components/forms/Button';
import DiagnosisIcon from '@/src/assets/icons/ic_diagnosis_light.svg';
import Modal from '@/src/components/overlays/Modal';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

type CounselingStartControlProps = {
  size?: 'small' | 'medium';
};

const CounselingStartControl = ({ size = 'medium' }: CounselingStartControlProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const router = useRouter();

  return (
    <div className={style.container[size]}>
      <div className={style.title}>
        <DiagnosisIcon />
        <Text type={'heading5_700'} color={'WHITE'}>
          상담을 시작해 주세요.
        </Text>
      </div>
      <div className={style.buttonWrap}>
        <Text type={'body1_500'} color={'WHITE'}>
          9분 10초 후 예정
        </Text>
        <Button
          styleType={'primaryReverseSolid'}
          size={'small'}
          onClick={() => setIsModalVisible(true)}
        >
          상담시작
        </Button>
      </div>

      <Modal isVisible={isModalVisible} isPartialDim>
        <div className={style.modalContainer}>
          <Text type={'heading4_700'}>박마음님의 상담을 시작할까요?</Text>
          <div className={style.modalButtons}>
            <Button
              styleType={'secondarySmooth'}
              onClick={() => setIsModalVisible(false)}
            >
              닫기
            </Button>
            <Button
              styleType={'primarySolid'}
              onClick={() => router.push(`/videoCall?id=1`)}
            >
              시작하기
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CounselingStartControl;
