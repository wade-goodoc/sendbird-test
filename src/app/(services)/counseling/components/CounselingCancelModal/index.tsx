import { useState, ChangeEvent } from 'react';
import * as style from './index.css';
import Modal from '@/src/components/overlays/Modal';
import Button from '@/src/components/forms/Button';
import Text from '@/src/components/typographies/Text';
import Radio from '@/src/components/forms/Radio';
import { CANCEL_REASONS } from '@/src/constants/counseling';
import { useCancelCounselingMutation } from '@/src/gql/generated/graphql';
import useToast from '@/src/hooks/toast/useToast';
import { useRouter } from 'next/navigation';

type CounselingCancelModalProps = {
  isVisible: boolean;
  handleModalClose: () => void;
  therapySessionId?: string;
  price?: number;
};

const CounselingCancelModal = ({
  isVisible,
  handleModalClose,
  therapySessionId,
  price
}: CounselingCancelModalProps) => {
  const [selectedReason, setSelectedReason] = useState<string>('');

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedReason(e.target.value);
  };

  const router = useRouter();
  const { showToast } = useToast();
  const [cancelCounseling] = useCancelCounselingMutation();

  const handleCounselingCancel = async () => {
    await cancelCounseling({
      variables: {
        reason: selectedReason,
        therapySessionId: therapySessionId || ''
      },
      onCompleted: (data) => {
        showToast({ type: 'success', label: '상담을 취소했습니다.' }, 3000);
        router.push(`/counseling/wait`);
      },
      onError: (error) => {
        console.log('error : ', error);
      }
    });
  };

  return (
    <Modal.WithButton
      isPartialDim
      size={'small'}
      isVisible={isVisible}
      variant={'basic'}
      cancelButton={
        <Button styleType={'secondarySmooth'} onClick={handleModalClose}>
          취소
        </Button>
      }
      confirmButton={
        <Button styleType={'dangerSolid'} onClick={handleCounselingCancel}>
          취소 및 환불
        </Button>
      }
      contentChildren={
        <div>
          <div className={style.title}>
            <Text type={'heading4_700'} color={'GRAY_100'}>
              상담 취소 및 환불
            </Text>
          </div>
          <div>
            <Text type={'body1_500'} color={'GRAY_70'}>
              상담을 취소하고 결제금액을 환불합니다.
            </Text>
          </div>
          <div className={style.price}>
            <Text type={'body1_700'} color={'RED_60'}>
              환불금액
            </Text>
            <Text type={'heading5_600'} color={'RED_60'}>
              {price?.toLocaleString('ko-KR')}원
            </Text>
          </div>

          <div>
            {CANCEL_REASONS.map((reason) => (
              <Radio
                key={reason.value}
                label={reason.label}
                value={reason.label}
                checked={selectedReason === reason.label}
                onChange={handleRadioChange}
              />
            ))}
          </div>
        </div>
      }
    />
  );
};

export default CounselingCancelModal;
