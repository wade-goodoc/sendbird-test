import { atom } from 'recoil';

export const therapistInfo = atom<{ sendbirdUserId: string }>({
  key: 'therapistInfo',
  default: {
    sendbirdUserId: 'jackson.hong'
  }
});
