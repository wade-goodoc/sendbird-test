import * as style from './index.css';
import TableRow from '@/src/components/dataDisplay/Table/TableRow';
import TableCell from '@/src/components/dataDisplay/Table/TableCell';
import Link from 'next/link';
import Text from '@/src/components/typographies/Text';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import MaleIcon from '@/src/assets/icons/ic_gender_male.svg';
import FemaleIcon from '@/src/assets/icons/ic_gender_female.svg';
import CounselingStartControl from '@/src/app/(services)/counseling/components/CounselingStartControl';
import { TherapySessionsQuery } from '@/src/gql/generated/graphql';
import useCounselingCountdownTimer from '@/src/hooks/counseling/useCounselingCountdownTimer';
import useCheckRemainingTime from '@/src/hooks/counseling/useCheckRemainingTime';
import { useRouter } from 'next/navigation';
import { roomIdOnCall as roomIdInStore } from '@/src/store/counseling';
import { useRecoilValue } from 'recoil';
import CounselingCompleteControl from '@/src/app/(services)/counseling/components/CounselingCompleteControl';

dayjs.extend(duration);

type CounselingWaitListItemProps = {
  item: TherapySessionsQuery['therapySessions']['data'][number];
};

const CounselingWaitListItem = ({ item }: CounselingWaitListItemProps) => {
  const router = useRouter();

  const { isTimerStarted, minutes, seconds } = useCounselingCountdownTimer({
    targetDateTime: item.product.method === 'video' ? '2024-11-15T10:59:00.000+09:00' : ''
  });

  const { remainingTime } = useCheckRemainingTime({
    targetDateTime: '2024-11-13T14:24:00.000+09:00'
  });

  const roomIdOnCall = useRecoilValue(roomIdInStore);

  return (
    <>
      <TableRow
        onClick={(e) => {
          router.push(`/counseling/wait/detail?therapySessionId=${item.id}`);
        }}
      >
        <TableCell width={160} align="left">
          <Text type="body2_500" color={'GRAY_80'}>
            {dayjs(item.createdAt).format('YYYY.MM.DD HH:mm')}
          </Text>
        </TableCell>
        <TableCell width={160}>
          <Text type="body2_500" color={'GRAY_80'}>
            {item.product.method === 'video' ? '50분 화상 상담' : '50분 채팅 상담'}
          </Text>
        </TableCell>
        <TableCell width={140} align={'center'}>
          <div className={style.therapyName}>
            {item.therapyUser.gender === 'male' ? (
              <MaleIcon width={22} height={22} />
            ) : (
              <FemaleIcon width={22} height={22} />
            )}
            <Text type="body2_500" color={'GRAY_80'}>
              {item.therapyUser.nickname}
            </Text>
          </div>
        </TableCell>
        <TableCell width={140}>
          <Text type="body2_500" color={'GRAY_70'}>
            {dayjs(item.scheduledStartTime).format('YYYY.MM.DD HH:mm')}
          </Text>
        </TableCell>
        <TableCell width={360} align={'right'}>
          <Text type="body2_500" color={'GRAY_70'}>
            {remainingTime}
          </Text>
          <button
            onClick={(e) => {
              e.stopPropagation();
              console.log('roomId : ', roomIdOnCall, item.callsRoomId);
            }}
          >
            roomId
          </button>
        </TableCell>
      </TableRow>
      {!roomIdOnCall && isTimerStarted && (
        <TableRow>
          <td colSpan={5} width={960}>
            <div className={style.subTableRow}>
              <CounselingStartControl
                therapySessionId={item.id}
                size={'small'}
                minutes={minutes || undefined}
                seconds={seconds || undefined}
                roomId={item.callsRoomId}
              />
            </div>
          </td>
        </TableRow>
      )}

      {roomIdOnCall && item.callsRoomId === roomIdOnCall && (
        <TableRow>
          <td colSpan={5} width={960}>
            <div className={style.subTableRow}>
              <CounselingCompleteControl
                roomId={item.callsRoomId}
                therapySessionId={item.id}
              />
            </div>
          </td>
        </TableRow>
      )}
    </>
  );
};

export default CounselingWaitListItem;
