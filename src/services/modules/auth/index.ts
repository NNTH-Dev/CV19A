import { api } from '@/services/api';

export type User = {
  id: number;
  name: string;
};

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (data) => {
        return {
          url: `/auth/login`,
          method: 'POST',
          headers: {
            'Content-Type': 'application/vnd.igap.v1+json;charset=UTF-8',
          },
          body: JSON.stringify(data),
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation } = authApi;
