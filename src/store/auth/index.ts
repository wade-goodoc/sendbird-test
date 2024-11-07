import { atom } from 'recoil';

export const loginStatus = atom<boolean>({
  key: 'loginStatus',
  default: false
});
