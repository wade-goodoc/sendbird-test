import * as style from './index.css';
import Modal from '@/src/components/overlays/Modal';
import Button from '@/src/components/forms/Button';
import Text from '@/src/components/typographies/Text';
import { useRouter } from 'next/navigation';
import { StatefulRoom, useSbCalls } from '@/src/libs/sendbird-calls';
import { useCompleteCounselingMutation } from '@/src/gql/generated/graphql';
import useToast from '@/src/hooks/toast/useToast';
import { ApolloError } from '@apollo/client';
import { useSetRecoilState } from 'recoil';
import { roomIdOnCall } from '@/src/store/counseling';

type EndCallModalProps = {
  therapySessionId: string;
  onCall: StatefulRoom | undefined;
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
};

const EndCallModal = ({
  therapySessionId,
  onCall,
  isVisible,
  setIsVisible
}: EndCallModalProps) => {
  const sbCalls = useSbCalls();
  const router = useRouter();
  const setRoomIdOnCall = useSetRecoilState(roomIdOnCall);

  const [completeCounseling] = useCompleteCounselingMutation();

  const { showToast } = useToast();

  const handleCounselingComplete = () => {
    completeCounseling({
      variables: {
        therapySessionId
      },
      onCompleted: () => {
        showToast({ type: 'success', label: '상담을 종료했습니다.' }, 3000);
        setRoomIdOnCall(undefined);
        sbCalls.clearRooms();
        onCall?.exit();
        router.back();
      },
      onError: (error: ApolloError) => {
        showToast({ type: 'error', label: error.message }, 3000);
      }
    });
  };

  return (
    <Modal.WithButton
      title={'상담 종료하기'}
      isVisible={isVisible}
      size={'small'}
      isPartialDim
      variant={'basic'}
      cancelButton={
        <Button onClick={() => setIsVisible(false)} styleType={'secondarySmooth'}>
          취소
        </Button>
      }
      confirmButton={
        <Button onClick={handleCounselingComplete} styleType={'primarySolid'}>
          확인
        </Button>
      }
      contentChildren={
        <div className={style.modalContent}>
          <Text type={'body1_500'} color={'GRAY_70'}>
            상담을 종료하고 상담실에서 나갑니다.
          </Text>
          <button
            className={style.textButton}
            type={'button'}
            onClick={() => {
              onCall?.exit();
              sbCalls.clearRooms();
              router.back();
            }}
          >
            <Text type={'body2_500'} color={'GRAY_60'}>
              종료하지 않고 나가기
            </Text>
          </button>
        </div>
      }
    ></Modal.WithButton>
  );
};

export default EndCallModal;
