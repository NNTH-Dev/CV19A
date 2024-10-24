import { API_HOST, API_PROTOCOL } from '@/constants/configs';

export const getAPIUrl = (): string => {
  return `${API_PROTOCOL}://${API_HOST}`;
};
