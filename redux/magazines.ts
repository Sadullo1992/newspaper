import { BASE_URL } from '@/constants/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IResponse, IMagazine } from '../types/types';

export const magazinesSlice = createApi({
  reducerPath: 'apiMagazines',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['magazines'],
  endpoints: (builder) => ({
    getAllMagazines: builder.query<IResponse<IMagazine[]>, void>({
      query: () => `/magazines`,
      providesTags: (result) =>
        // is result available?
        result
          ? // successful query
            [
              ...result.results.map(({ id }) => ({ type: 'magazines', id } as const)),
              { type: 'magazines', id: 'LIST' },
            ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'magazines', id: 'LIST' }` is invalidated
            [{ type: 'magazines', id: 'LIST' }],
    }),
    addMagazineDownloadCount: builder.mutation<void, number>({
      query(id) {
        return {
          url: `/magazines/${id}/download`,
          method: 'GET',
        };
      },
      invalidatesTags: (_result, _error, id) => [{ type: 'magazines', id }],
    }),
  }),
});

export const { useGetAllMagazinesQuery, useAddMagazineDownloadCountMutation } = magazinesSlice;
