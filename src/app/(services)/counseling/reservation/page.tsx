'use client';

import React from 'react';
import Text from '@/src/components/typographies/Text';
import dayjs from 'dayjs';
import Button from '@/src/components/forms/Button';
import FemaleIcon from '@/src/assets/icons/ic_gender_female.svg';
import MaleIcon from '@/src/assets/icons/ic_gender_male.svg';
import Table from '@/src/components/dataDisplay/Table';
import TableCell from '@/src/components/dataDisplay/Table/TableCell';
import TableHeader from '@/src/components/dataDisplay/Table/TableHeader';
import TableRow from '@/src/components/dataDisplay/Table/TableRow';
import TableBody from '@/src/components/dataDisplay/Table/TableBody';
import { useSetRecoilState } from 'recoil';
import { counselingReservationModal } from '@/src/store/counseling';
import CounselingReservationModal from '@/src/app/(services)/counseling/reservation/CounselingReservationModal';
import { useRouter } from 'next/navigation';
import PageTemplate from '../../../../components/templates/PageTemplate';
import {
  GenderEnum,
  ProductMethodEnum,
  TherapySessionStatusEnum,
  useTherapySessionsQuery
} from '@/src/gql/generated/graphql';

export default function CounselingReservationPage() {
  const setModal = useSetRecoilState(counselingReservationModal);
  const router = useRouter();

  const { data, loading, refetch } = useTherapySessionsQuery({
    variables: {
      input: {
        status: [TherapySessionStatusEnum.Requested]
      }
    }
  });

  if (loading) return <p>Loading UI</p>;

  return (
    <PageTemplate title={'예약대기'}>
      <Table>
        <TableHeader>
          <TableCell width={160}>
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
          <TableCell width={184}></TableCell>
        </TableHeader>
        <TableBody>
          {data?.therapySessions.data.map((item) => (
            <TableRow
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/counseling/reservation/detail?therapySessionId=${1}`);
              }}
            >
              <TableCell width={160} align="left">
                <Text type="body2_500" color={'GRAY_80'}>
                  {dayjs(item.createdAt).format('YYYY.MM.DD HH:mm')}
                </Text>
              </TableCell>
              <TableCell width={160}>
                <Text type="body2_500" color={'GRAY_80'}>
                  {item.product.method === ProductMethodEnum.Video
                    ? '50분 화상상담'
                    : '50분 채팅상담'}
                </Text>
              </TableCell>
              <TableCell width={160}>
                {item.therapyUser.gender === GenderEnum.Female ? (
                  <FemaleIcon width={22} height={22} />
                ) : (
                  <MaleIcon width={22} height={22} />
                )}
                &nbsp;
                <Text type="body2_500" color={'GRAY_80'}>
                  {item.therapyUser.nickname}
                </Text>
              </TableCell>
              <TableCell width={320} align={'right'}>
                <Button
                  styleType="primarySmooth"
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    setModal({
                      isVisible: true,
                      item: item,
                      onNext: () => {
                        refetch();
                      }
                    });
                  }}
                >
                  예약확정
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <CounselingReservationModal />
    </PageTemplate>
  );
}
