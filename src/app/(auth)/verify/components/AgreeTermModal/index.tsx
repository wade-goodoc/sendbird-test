import * as style from './index.css';
import Modal from '@/src/components/overlays/Modal';
import Text from '@/src/components/typographies/Text';
import Button from '@/src/components/forms/Button';
import Accordion from '@/src/components/forms/Accordion';
import { COLORS } from '@/src/styles/colors';
import CheckIcon from '@/src/assets/icons/ic_check_light.svg';
import { allAgreeButton } from './index.css';

type AgreeTermModalProps = {
  isVisible: boolean;
};

const items = [
  {
    id: 1,
    title: '(필수)개인정보 수집 및 이용 동의',
    content: 'This is the content of item 1.'
  },
  {
    id: 2,
    title: '(필수)고유식별정보 처리 동의',
    content: 'This is the content of item 2.'
  },
  {
    id: 3,
    title: '(필수)통신사 이용약관 동의',
    content: 'This is the content of item 3.'
  },
  {
    id: 4,
    title: '(필수)서비스 이용약관 동의',
    content: 'This is the content of item 3.'
  }
];

const AgreeTermModal = ({ isVisible }: AgreeTermModalProps) => {
  return (
    <Modal isVisible={isVisible} isPartialDim>
      <div className={style.container}>
        <div className={style.modalTitle}>
          <Text type={'heading4_700'} color={'GRAY_100'}>
            휴대폰 인증 약관 동의
          </Text>
        </div>

        <button className={style.allAgreeButton({ active: true })} type={'button'}>
          <CheckIcon width={24} height={24} color={COLORS.GRAY_80} />
          <Text type={'body1_600'} color={'GRAY_100'}>
            필수 약관 모두 동의
          </Text>
        </button>

        <Accordion className={style.accordion} items={items} />

        <div>
          <Button styleType={'primarySolid'} fullWidth size={'medium'}>
            인증번호 받기
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AgreeTermModal;
