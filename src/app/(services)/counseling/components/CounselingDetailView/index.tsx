import * as style from './index.css';
import PageTemplate from '@/src/components/templates/PageTemplate';
import FemaleIcon from '@/src/assets/icons/ic_gender_female.svg';
import MaleIcon from '@/src/assets/icons/ic_gender_male.svg';
import Text from '@/src/components/typographies/Text';
import Button from '@/src/components/forms/Button';
import CounselingStartControl from '@/src/app/(services)/counseling/components/CounselingStartControl';
import dayjs from 'dayjs';
import ArrowIcon from '@/src/assets/icons/ic_arrow_small.svg';
import { SpecialtyEnum, TherapySessionQuery } from '@/src/gql/generated/graphql';
import {
  COUNSELING_SPECIALTY,
  COUNSELING_STYLE,
  COUNSELING_TOPIC
} from '@/src/constants/counseling';
import LikeIcon from '@/src/assets/icons/ic_like_green.svg';
import Textarea from '@/src/components/forms/Textarea';
import CounselingCancelModal from '@/src/app/(services)/counseling/components/CounselingCancelModal';
import { useState } from 'react';
import CounselingConfirmControl from '@/src/app/(services)/counseling/components/CounselingConfirmControl';
import CounselingHistoryModal from '@/src/app/(services)/counseling/components/CounselingHistoryModal';

type CounselingDetailViewProps = {
  detailViewType: 'reservation' | 'wait';
  data?: TherapySessionQuery;
  countdownTimer?: {
    isTimerStarted: boolean;
    minutes: number | null;
    seconds: number | null;
  };
};

const CounselingDetailView = ({
  detailViewType,
  data,
  countdownTimer
}: CounselingDetailViewProps) => {
  const [isCancelModalVisible, setIsCancelModalVisible] = useState(false);

  const [isCounselingHistoryModalVisible, setIsCounselingHistoryModalVisible] =
    useState(false);

  return (
    <PageTemplate
      leftContent={
        <>
          {data?.therapySession?.therapyUser.gender === 'female' ? (
            <FemaleIcon width={36} height={36} />
          ) : (
            <MaleIcon width={36} height={36} />
          )}
          <h1 className={style.title}>
            <Text type={'heading3_700'} color={'GRAY_90'}>
              {data?.therapySession?.therapyUser.nickname}
            </Text>
            <span className={style.titleDot}></span>
            <Text type={'heading3_700'} color={'GRAY_90'}>
              {data?.therapySession?.therapyUser.age.toString()[0]}0대
            </Text>
          </h1>
        </>
      }
      rightContent={
        <Button
          styleType={'secondaryOutline'}
          onClick={() => setIsCounselingHistoryModalVisible(true)}
        >
          이전 상담 이력 3건
        </Button>
      }
    >
      {detailViewType === 'reservation' && (
        <div className={style.confirmContainer}>
          <CounselingConfirmControl />
        </div>
      )}
      {detailViewType === 'wait' && countdownTimer?.isTimerStarted && (
        <div className={style.confirmContainer}>
          <CounselingStartControl
            therapySessionId={data?.therapySession?.id || ''}
            minutes={countdownTimer?.minutes || undefined}
            seconds={countdownTimer?.seconds || undefined}
          />
        </div>
      )}
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
                {dayjs(data?.therapySession?.scheduledStartTime).format(
                  'YYYY-MM-DD HH:mm'
                )}
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
              {data?.therapySession?.specialties?.map((item: SpecialtyEnum | null) => (
                <Text key={item} type={'body1_500'} color={'GRAY_90'}>
                  {item && COUNSELING_SPECIALTY[item]}
                </Text>
              ))}
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
                    COUNSELING_TOPIC[data?.therapySession.topic]}
                </Text>
                <div className={style.counselingStyle}>
                  <LikeIcon />
                  <Text type={'caption2_700'} color={'GREEN_80'}>
                    {data?.therapySession?.style &&
                      COUNSELING_STYLE[data?.therapySession.style]}
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
        <Button styleType={'dangerSmooth'} onClick={() => setIsCancelModalVisible(true)}>
          상담취소
        </Button>

        <div className={style.counselingNumber}>
          <Text type={'body2_400'} color={'GRAY_60'}>
            상담번호
          </Text>
          <Text type={'body2_400'} color={'GRAY_80'}>
            {data?.therapySession?.uuid}
          </Text>
        </div>
      </section>

      <CounselingCancelModal
        isVisible={isCancelModalVisible}
        handleModalClose={() => setIsCancelModalVisible(false)}
        therapySessionId={data?.therapySession?.id}
        price={data?.therapySession?.product.price}
      />

      {data?.therapySession?.id && (
        <CounselingHistoryModal
          isVisible={isCounselingHistoryModalVisible}
          closeModalHandler={() => setIsCounselingHistoryModalVisible(false)}
          therapyUserId={data.therapySession.id}
        />
      )}
    </PageTemplate>
  );
};

export default CounselingDetailView;
