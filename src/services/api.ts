import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

import * as RootNavigation from '@/navigators/RootNavigation';
import { getToken } from '@/store/auth';
import { getAPIUrl } from '@/utils/url';

const baseQuery = fetchBaseQuery({
  baseUrl: getAPIUrl(),
  prepareHeaders: (headers, { getState }) => {
    const token = getToken(getState());
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
  },
});

const baseQueryWithInterceptor: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    // Unauthorized
    RootNavigation.reset('Auth', {
      screen: 'Login',
    });
  }

  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  // eslint-disable-next-line
  endpoints: () => ({}),
});
