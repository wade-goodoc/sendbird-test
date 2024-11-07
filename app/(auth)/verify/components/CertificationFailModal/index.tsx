import * as style from './index.css';
import Modal from '@/src/components/overlays/Modal';
import Text from '@/src/components/typographies/Text';
import Button from '@/src/components/forms/Button';
import FailureIcon from '@/src/assets/icons/ic_failure.svg';

type CertificationFailModalProps = {
  isVisible: boolean;
};

const CertificationFailModal = ({ isVisible }: CertificationFailModalProps) => {
  return (
    <Modal isVisible={isVisible} isPartialDim>
      <div className={style.container}>
        <FailureIcon className={style.failureIcon} />
        <div>
          <Text type={'heading4_700'} color={'GRAY_100'}>
            인증에 실패했어요
          </Text>
        </div>
        <div className={style.description}>
          <Text type={'body2_500'} color={'GRAY_60'}>
            입력한 정보가 정확한지 확인해주세요
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

export default CertificationFailModal;
