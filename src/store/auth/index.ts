import { atom } from 'recoil';

export const loginStatus = atom<boolean>({
  key: 'loginStatus',
  default: false
});

export const therapistInfo = atom<{ sendbirdUserId: string }>({
  key: 'therapistInfo',
  default: {
    sendbirdUserId: 'jackson.hong'
  }
});
