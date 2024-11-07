'use client';
import * as style from './index.css';
import PageTemplate from '@/src/components/PageTemplate';
import FemaleIcon from '@/src/assets/icons/ic_gender_female.svg';
import Text from '@/src/components/typographies/Text';
import LikeIcon from '@/src/assets/icons/ic_like_green.svg';
import ArrowIcon from '@/src/assets/icons/ic_arrow_small.svg';
import Textarea from '@/src/components/forms/Textarea';
import Button from '@/src/components/forms/Button';
import CounselingStartControl from '@/src/app/(services)/counseling/components/CounselingStartControl';
import { useTherapySessionQuery } from '@/src/gql/generated/graphql';
import { useSearchParams } from 'next/navigation';
import {
  COUNSELING_SPECIALTY,
  COUNSELING_STYLE,
  COUNSELING_TOPIC
} from '@/src/constants/counseling';

const CounselingWaitDetailPage = () => {
  const searchParams = useSearchParams();

  const { data, loading } = useTherapySessionQuery({
    variables: {
      therapySessionId: searchParams.get('id') || ''
    }
  });

  console.log('data : ', data);

  if (loading) return <p>Loading UI</p>;

  return (
    <PageTemplate
      leftContent={
        <>
          <FemaleIcon width={36} height={36} />
          <h1 className={style.title}>
            <Text type={'heading3_700'} color={'GRAY_90'}>
              {data?.therapySession?.therapyUser.nickname}
            </Text>
            <span className={style.titleDot}></span>
            <Text type={'heading3_700'} color={'GRAY_90'}>
              30대
            </Text>
          </h1>
        </>
      }
      rightContent={<Button styleType={'secondaryOutline'}>이전 상담 이력 3건</Button>}
    >
      <div className={style.confirmContainer}>
        <CounselingStartControl />
      </div>
      <section className={style.section}>
        <h2 className={style.sectionTitle}>
          <Text type={'heading4_700'} color={'GRAY_90'}>
            상담정보
          </Text>
        </h2>
        <div className={style.sectionBox}>
          <div className={style.infoRow}>
            <div className={style.infoLabel}>
              <Text type={'body1_400'} color={'GRAY_60'}>
                상담상품
              </Text>
            </div>
            <div className={style.infoValue}>
              <Text type={'body1_500'} color={'GRAY_90'}>
                {data?.therapySession?.product.method === 'video'
                  ? '50분 화상상담'
                  : '50분 채팅상담'}
              </Text>
            </div>
          </div>
          <div className={style.infoRow}>
            <div className={style.infoLabel}>
              <Text type={'body1_400'} color={'GRAY_60'}>
                상담일시
              </Text>
            </div>
            <div className={style.infoValueAlignCenter}>
              <Text type={'body1_500'} color={'GRAY_90'}>
                2024.08.30 10:00
              </Text>
              <button className={style.rescheduleButton}>
                <Text type={'body2_500'} color={'GRAY_60'}>
                  일정 변경
                </Text>
                <ArrowIcon />
              </button>
            </div>
          </div>
          <div className={style.infoRow}>
            <div className={style.infoLabel}>
              <Text type={'body1_400'} color={'GRAY_60'}>
                고려사항
              </Text>
            </div>
            <div className={style.infoValue}>
              <Text type={'body1_500'} color={'GRAY_90'}>
                {data?.therapySession?.specialty &&
                  COUNSELING_SPECIALTY[data.therapySession.specialty]}
              </Text>
            </div>
          </div>
          <div className={style.infoRow}>
            <div className={style.infoLabel}>
              <Text type={'body1_400'} color={'GRAY_60'}>
                신청정보
              </Text>
            </div>
            <div className={style.infoValue}>
              <div className={style.descriptionTitle}>
                <Text type={'body1_700'} color={'GRAY_90'}>
                  {data?.therapySession?.topic &&
                    COUNSELING_TOPIC[data.therapySession.topic]}
                </Text>
                <div className={style.counselingStyle}>
                  <LikeIcon />
                  <Text type={'caption2_700'} color={'GREEN_80'}>
                    {data?.therapySession?.style &&
                      COUNSELING_STYLE[data.therapySession.style]}
                  </Text>
                </div>
              </div>
              <Text type={'body1_400'} color={'GRAY_80'}>
                {data?.therapySession?.noteFromUser}
              </Text>
            </div>
          </div>
        </div>
      </section>

      <section className={style.section}>
        <h2 className={style.sectionTitle}>
          <Text type={'heading4_700'} color={'GRAY_90'}>
            상담 메모
          </Text>
        </h2>
        <Textarea
          placeholder={'메모를 입력해주세요'}
          containerClassName={style.textarea}
        />
      </section>

      <section className={style.bottomSection}>
        <Button styleType={'dangerSmooth'}>상담취소</Button>

        <div className={style.counselingNumber}>
          <Text type={'body2_400'} color={'GRAY_60'}>
            상담번호
          </Text>
          <Text type={'body2_400'} color={'GRAY_80'}>
            a888723491928501
          </Text>
        </div>
      </section>
    </PageTemplate>
  );
};

export default CounselingWaitDetailPage;
