import { get } from './request';

export const authApi = {
  login() {
    return get<string>('');
  },
};
