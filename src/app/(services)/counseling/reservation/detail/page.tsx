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

  if (loading) return <p>Loading UI</p>;

  return <CounselingDetailView detailViewType={'reservation'} data={data} />;
};

export default CounselingWaitDetailPage;
