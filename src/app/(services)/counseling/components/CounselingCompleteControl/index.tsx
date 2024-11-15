import * as style from './index.css';
import Text from '@/src/components/typographies/Text';
import Button from '@/src/components/forms/Button';
import DiagnosisIcon from '@/src/assets/icons/ic_diagnosis_light.svg';
import { useSbCalls } from '@/src/libs/sendbird-calls';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import { roomIdOnCall } from '@/src/store/counseling';
import { useCompleteCounselingMutation } from '@/src/gql/generated/graphql';
import useToast from '@/src/hooks/toast/useToast';
import { ApolloError } from '@apollo/client';

type CounselingCompleteControlProps = {
  therapySessionId: string;
  roomId: string;
};

const CounselingCompleteControl = ({
  therapySessionId,
  roomId
}: CounselingCompleteControlProps) => {
  const sbCalls = useSbCalls();
  const { rooms } = sbCalls;
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
        rooms[0]?.exit();
        router.back();
      },
      onError: (error: ApolloError) => {
        showToast({ type: 'error', label: error.message }, 3000);
      }
    });
  };

  return (
    <div className={style.container}>
      <div className={style.title}>
        <DiagnosisIcon />
        <Text type={'heading5_700'} color={'WHITE'}>
          상담을 종료해 주세요.
        </Text>
      </div>
      <div className={style.buttonWrap}>
        <Button
          styleType={'primaryReverseOutline'}
          size={'small'}
          onClick={() =>
            router.push(
              `/videoCall?therapySessionId=${therapySessionId}&roomId=${roomId}`
            )
          }
        >
          다시입장
        </Button>
        <Button
          styleType={'primaryReverseSolid'}
          size={'small'}
          onClick={handleCounselingComplete}
        >
          상담종료
        </Button>
      </div>
    </div>
  );
};

export default CounselingCompleteControl;
