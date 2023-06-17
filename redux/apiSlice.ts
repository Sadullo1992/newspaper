import { BASE_URL } from '@/constants/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IResponse, IArticle, ICategory } from '../types/types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<IResponse<IArticle[]>, void>({
      query: () => `/posts`,
    }),
    getAllCategories: builder.query<IResponse<ICategory[]>, void>({
      query: () => `/categories`,
    }),
  }),
});

export const { useGetAllPostsQuery, useGetAllCategoriesQuery } = apiSlice;
