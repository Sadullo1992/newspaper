import { BASE_URL } from '@/constants/constants';
import { createSelector } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IResponse, IArticle, ICategory } from '../types/types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<IResponse<IArticle[]>, void>({
      query: () => `/posts`,
    }),
    getFeaturedPosts: builder.query<IResponse<IArticle[]>, void>({
      query: () => `/posts/featured_posts`,
    }),
    getActualPosts: builder.query<IResponse<IArticle[]>, void>({
      query: () => `/posts/dolzarb_posts`,
    }),
    getAllCategories: builder.query<IResponse<ICategory[]>, void>({
      query: () => `/categories`,
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetAllCategoriesQuery,
  useGetFeaturedPostsQuery,
  useGetActualPostsQuery,
} = apiSlice;

export const selectCategories = apiSlice.endpoints.getAllCategories.select();

export const selectAllCategories = createSelector(
  selectCategories,
  (categoriesResult) => categoriesResult?.data ?? []
);
