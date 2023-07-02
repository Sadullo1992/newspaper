import { BASE_URL } from '@/constants/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IResponse, IMagazine } from '../types/types';

export const magazinesSlice = createApi({
  reducerPath: 'apiMagazines',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['magazines'],
  endpoints: (builder) => ({
    getAllMagazines: builder.query<IResponse<IMagazine[]>, number>({
      query: (page) => `/magazines?page_size=4&page=${page}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.results.push(...newItems.results);
      },
      forceRefetch({ currentArg, previousArg }) {
        if (previousArg === undefined) previousArg = 0;
        if (currentArg === undefined) currentArg = 0;
        return currentArg > previousArg;
      },
      providesTags: (result) =>
        result
          ? [
              ...result.results.map(({ id }) => ({ type: 'magazines', id } as const)),
              { type: 'magazines', id: 'LIST' },
            ]
          : [{ type: 'magazines', id: 'LIST' }],
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
