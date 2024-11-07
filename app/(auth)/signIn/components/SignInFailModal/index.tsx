import * as style from './index.css';
import Modal from '@/src/components/overlays/Modal';
import Text from '@/src/components/typographies/Text';
import Button from '@/src/components/forms/Button';

type SignInFailModalProps = {
  isVisible: boolean;
};

const SignInFailModal = ({ isVisible }: SignInFailModalProps) => {
  return (
    <Modal isVisible={isVisible} isPartialDim>
      <div className={style.container}>
        <div>
          <Text type={'heading4_700'} color={'GRAY_100'}>
            로그인에 실패했습니다.
          </Text>
        </div>
        <div className={style.description}>
          <Text type={'body2_500'} color={'GRAY_60'}>
            일시적인 오류로 로그인에 실패했습니다.
            <br />
            잠시 후 다시 시도해 주세요.
            <br />
            문제가 해결되지 않으시면 1:1 채팅상담으로 문의해 주세요.
          </Text>
        </div>
        <div>
          <Button styleType={'primarySolid'} fullWidth size={'medium'}>
            확인
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SignInFailModal;
