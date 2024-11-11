import * as style from './index.css';
import Modal from '@/src/components/overlays/Modal';
import Button from '@/src/components/forms/Button';
import Text from '@/src/components/typographies/Text';
import { useRouter } from 'next/navigation';
import { StatefulRoom } from '@/src/libs/sendbird-calls';

type EndCallModalProps = {
  onCall: StatefulRoom | undefined;
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
};

const EndCallModal = ({ onCall, isVisible, setIsVisible }: EndCallModalProps) => {
  const router = useRouter();

  return (
    <Modal.WithButton
      title={'상담 종료하기'}
      isVisible={isVisible}
      size={'medium'}
      isPartialDim
      cancelButton={
        <Button onClick={() => setIsVisible(false)} styleType={'secondarySmooth'}>
          취소
        </Button>
      }
      confirmButton={
        <Button
          onClick={() => {
            onCall?.exit();
            router.back();
          }}
          styleType={'primarySolid'}
        >
          확인
        </Button>
      }
      contentChildren={
        <div>
          <Text type={'body1_500'} color={'GRAY_70'}>
            상담을 종료하고 상담실에서 나갑니다.
          </Text>
        </div>
      }
    ></Modal.WithButton>
  );
};

export default EndCallModal;
