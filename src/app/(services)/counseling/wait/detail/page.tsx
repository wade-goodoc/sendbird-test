'use client';
import { useTherapySessionQuery } from '@/src/gql/generated/graphql';
import { useSearchParams } from 'next/navigation';
import useCounselingCountdownTimer from '@/src/hooks/counseling/useCounselingCountdownTimer';
import CounselingDetailView from '@/src/app/(services)/counseling/components/CounselingDetailView';

const CounselingWaitDetailPage = () => {
  const searchParams = useSearchParams();

  const { data, loading } = useTherapySessionQuery({
    variables: {
      therapySessionId: searchParams.get('therapySessionId') || ''
    }
  });

  const countdownTimer = useCounselingCountdownTimer({
    targetDateTime:
      data?.therapySession?.product.method === 'video'
        ? '2024-11-12T11:04:00.000+09:00'
        : ''
  });

  if (loading) return <p>Loading UI</p>;

  return (
    <CounselingDetailView
      detailViewType={'wait'}
      data={data}
      countdownTimer={countdownTimer}
    />
  );
};

export default CounselingWaitDetailPage;
