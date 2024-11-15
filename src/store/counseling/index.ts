import { atom } from 'recoil';
// import { TherapySession } from '@/src/gql/generated/graphql';

export const counselingReservationModal = atom<{
  isVisible: boolean;
  item: any | undefined;
  onNext?: () => void;
}>({
  key: 'counselingReservationModal',
  default: {
    isVisible: false,
    item: undefined
  }
});

export const roomIdOnCall = atom<undefined | string>({
  key: 'roomIdOnCall',
  default: undefined
});
