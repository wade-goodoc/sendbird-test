'use client';

import { Fragment, useEffect } from 'react';
import Text from '@/src/components/typographies/Text';
import * as style from './index.css';
import dayjs from 'dayjs';
import Button from '@/src/components/forms/Button';
// import FemaleIcon from '@/src/assets/icons/ic_gender_female.svg';
import MaleIcon from '@/src/assets/icons/ic_gender_male.svg';
import TableCell from '@/src/components/dataDisplay/Table/TableCell';
import TableHeader from '@/src/components/dataDisplay/Table/TableHeader';
import TableRow from '@/src/components/dataDisplay/Table/TableRow';
import TableBody from '@/src/components/dataDisplay/Table/TableBody';
import Link from 'next/link';
import PageTemplate from '@/src/components/PageTemplate';
import CounselingStartControl from '@/src/app/(services)/counseling/components/CounselingStartControl';
import {
  TherapySessionStatusEnum,
  useTherapySessionsQuery
} from '@/src/gql/generated/graphql';

const CounselingWaitPage = () => {
  const { data } = useTherapySessionsQuery({
    variables: {
      input: {
        status: [TherapySessionStatusEnum.Confirmed, TherapySessionStatusEnum.InProgress]
      }
    }
  });

  useEffect(() => {
    console.log('data : ', data);
  }, [data]);

  return (
    <PageTemplate
      title={'상담대기'}
      rightContent={
        <div className={style.filterButtons}>
          <Button styleType={'secondarySmooth'}>전체</Button>
          <Button styleType={'secondaryGhost'}>오늘</Button>
        </div>
      }
    >
      {data?.therapySessions && (
        <table style={{ width: 960 }}>
          <TableHeader>
            <TableCell width={160} align="left">
              <Text type="caption1_600" color={'GRAY_70'}>
                신청일시
              </Text>
            </TableCell>
            <TableCell width={160}>
              <Text type="caption1_600" color={'GRAY_70'}>
                상품정보
              </Text>
            </TableCell>
            <TableCell width={160}>
              <Text type="caption1_600" color={'GRAY_70'}>
                내담자명
              </Text>
            </TableCell>
            <TableCell width={184}>
              <Text type="caption1_600" color={'GRAY_70'}>
                회차
              </Text>
            </TableCell>
          </TableHeader>
          <TableBody>
            {data.therapySessions.data.map((item, index) => (
              <Fragment key={item.id}>
                <TableRow>
                  <TableCell width={160} align="left">
                    <Link href={`/counseling/wait/detail?id=${item.id}`}>
                      <Text type="body2_500" color={'GRAY_80'}>
                        {dayjs().format('YYYY.MM.DD HH:mm')}
                      </Text>
                    </Link>
                  </TableCell>
                  <TableCell width={160}>
                    <Link href={`/counseling/wait/detail?id=${item.id}`}>
                      <Text type="body2_500" color={'GRAY_80'}>
                        {item.product.method === 'video'
                          ? '50분 화상 상담'
                          : '50분 채팅 상담'}
                      </Text>
                    </Link>
                  </TableCell>
                  <TableCell width={160} align={'center'}>
                    <Link href={`/counseling/wait/detail?id=${item.id}`}>
                      <Text
                        className={style.therapyName}
                        type="body2_500"
                        color={'GRAY_80'}
                      >
                        {/*<FemaleIcon width={22} height={22} />*/}
                        <MaleIcon width={22} height={22} />
                        {item.therapyUser.nickname}
                      </Text>
                    </Link>
                  </TableCell>
                  <TableCell width={160}>
                    <Link href={`/counseling/wait/detail?id=${item.id}`}>
                      <Text type="body2_500" color={'GRAY_80'}>
                        {4}회차
                      </Text>
                    </Link>
                  </TableCell>
                  <TableCell width={320} align={'right'}>
                    <Text type="body2_500" color={'GRAY_70'}>
                      9분 59초 후 예정
                    </Text>
                  </TableCell>
                </TableRow>
                {index === 1 && (
                  <TableRow>
                    <td colSpan={5} width={960}>
                      <div className={style.subTableRow}>
                        <CounselingStartControl size={'small'} />
                      </div>
                    </td>
                  </TableRow>
                )}
              </Fragment>
            ))}
          </TableBody>
        </table>
      )}
    </PageTemplate>
  );
};

export default CounselingWaitPage;
