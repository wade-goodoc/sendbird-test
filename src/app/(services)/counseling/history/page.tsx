'use client';

import Text from '@/src/components/typographies/Text';
import * as style from './index.css';
import TableCell from '@/src/components/dataDisplay/Table/TableCell';
import TableHeader from '@/src/components/dataDisplay/Table/TableHeader';
import TableBody from '@/src/components/dataDisplay/Table/TableBody';
import PageTemplate from '../../../../components/templates/PageTemplate';
import {
  TherapySessionStatusEnum,
  useTherapySessionsQuery
} from '@/src/gql/generated/graphql';
import { useRecoilValue } from 'recoil';
import { meData } from '@/src/store/auth/me';
import TableRow from '@/src/components/dataDisplay/Table/TableRow';
import dayjs from 'dayjs';
import MaleIcon from '@/src/assets/icons/ic_gender_male.svg';
import FemaleIcon from '@/src/assets/icons/ic_gender_female.svg';
import Select from '@/src/components/forms/Select';
import { counselingTotalPrice } from './index.css';

const CounselingHistoryPage = () => {
  const { data } = useTherapySessionsQuery({
    fetchPolicy: 'no-cache',
    variables: {
      input: {
        status: [TherapySessionStatusEnum.Canceled, TherapySessionStatusEnum.Completed]
      }
    }
  });

  const meQuery = useRecoilValue(meData);

  return (
    <PageTemplate title={'상담내역'}>
      <div className={style.top}>
        <div className={style.part}>
          <div>
            <label className={style.label}>
              <Text type={'body2_600'} color={'GRAY_60'}>
                검색 조건
              </Text>
            </label>
            <Select
              // className={style.selectWithoutBorder}
              items={[
                { value: '1', label: '내담자명' },
                { value: '2', label: '상담번호' }
              ]}
            />
          </div>

          <div style={{ width: 140 }}>
            <label className={style.label}>
              <Text type={'body2_600'} color={'GRAY_60'}>
                검색 기간
              </Text>
            </label>
            <Select
              value={'month'}
              items={[
                { value: 'all', label: '전체 기간' },
                { value: 'today', label: '오늘' },
                { value: 'week', label: '지난 7일' },
                { value: 'month', label: '지난 30일' },
                { value: 'input', label: '직접입력' }
              ]}
            />
          </div>
        </div>
        <div className={style.part}>
          <div>
            <label className={style.label}>
              <Text type={'body2_600'} color={'GRAY_60'}>
                상담건수
              </Text>
            </label>
            <div className={style.counselingCount}>
              <Text type={'heading4_600'} color={'GRAY_80'}>
                3,000 건
              </Text>
            </div>
          </div>

          <div>
            <label className={style.label}>
              <Text type={'body2_600'} color={'GRAY_60'}>
                총 결제금액
              </Text>
            </label>
            <div className={style.counselingTotalPrice}>
              <Text type={'heading4_600'} color={'GRAY_80'}>
                38,000,000 원
              </Text>
            </div>
          </div>
        </div>
      </div>

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
                상품 상품
              </Text>
            </TableCell>
            <TableCell width={100}>
              <Text type="caption1_600" color={'GRAY_70'}>
                내담자명
              </Text>
            </TableCell>
            <TableCell width={440} align={'right'}>
              <Text type="caption1_600" color={'GRAY_70'}>
                결제금액
              </Text>
            </TableCell>
            <TableCell width={100} align={'center'}>
              <Text type="caption1_600" color={'GRAY_70'}>
                상태
              </Text>
            </TableCell>
          </TableHeader>
          <TableBody>
            {data.therapySessions.data.map((item) => (
              <TableRow key={item.id}>
                <TableCell width={160} align="left">
                  <Text type="body2_500" color={'GRAY_80'}>
                    {dayjs(item.createdAt).format('YYYY.MM.DD HH:mm')}
                  </Text>
                </TableCell>
                <TableCell width={160}>
                  <Text type="body2_500" color={'GRAY_80'}>
                    {item.product.method === 'video'
                      ? '50분 화상 상담'
                      : '50분 채팅 상담'}
                  </Text>
                </TableCell>
                <TableCell width={100} align={'center'}>
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
                <TableCell width={440} align={'right'}>
                  <Text type="body2_500" color={'GRAY_70'}>
                    {item.product.price.toLocaleString('ko-KR')}원
                  </Text>
                </TableCell>
                <TableCell width={100} align={'right'}>
                  {item.status === 'completed' && (
                    <Text type="body2_500" color={'GRAY_60'}>
                      상담완료
                    </Text>
                  )}

                  {item.status === 'canceled' && (
                    <Text type="body2_500" color={'ALPHA_RED_90'}>
                      상담취소
                    </Text>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </table>
      )}
    </PageTemplate>
  );
};

export default CounselingHistoryPage;
