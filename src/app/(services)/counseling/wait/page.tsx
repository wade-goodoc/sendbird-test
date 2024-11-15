'use client';

import { useEffect } from 'react';
import Text from '@/src/components/typographies/Text';
import * as style from './index.css';
import Button from '@/src/components/forms/Button';
import TableCell from '@/src/components/dataDisplay/Table/TableCell';
import TableHeader from '@/src/components/dataDisplay/Table/TableHeader';
import TableBody from '@/src/components/dataDisplay/Table/TableBody';
import PageTemplate from '../../../../components/templates/PageTemplate';
import {
  TherapySessionStatusEnum,
  useTherapySessionsQuery
} from '@/src/gql/generated/graphql';
import CounselingWaitListItem from '@/src/app/(services)/counseling/components/CounselingWaitListItem';
import { useRecoilValue } from 'recoil';
import { meData } from '@/src/store/auth/me';

const CounselingWaitPage = () => {
  const { data } = useTherapySessionsQuery({
    fetchPolicy: 'no-cache',
    variables: {
      input: {
        status: [TherapySessionStatusEnum.Confirmed, TherapySessionStatusEnum.InProgress]
      }
    }
  });

  const meQuery = useRecoilValue(meData);

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
            <TableCell width={160}>
              <Text type="caption1_600" color={'GRAY_70'}>
                상담시작
              </Text>
            </TableCell>
          </TableHeader>
          <TableBody>
            {data.therapySessions.data.map((item) => (
              <CounselingWaitListItem key={item.id} item={item} />
            ))}
          </TableBody>
        </table>
      )}
    </PageTemplate>
  );
};

export default CounselingWaitPage;
