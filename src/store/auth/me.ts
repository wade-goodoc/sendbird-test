import { atom } from 'recoil';
import { MeQuery } from '@/src/gql/generated/graphql';

export const meData = atom<MeQuery['me']>({
  key: 'me',
  default: undefined
});
