import { BASE_URL } from '@/constants/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IResponse, IArticle, ICategory, IPost } from '../types/types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<IResponse<IArticle[]>, number>({
      query: (page) => `/posts?page=${page}`,
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
    getCategoryPosts: builder.query<IResponse<IArticle[]>, { id: string; page: number }>({
      query: ({ id, page }) => `/categories/${id}/posts?page=${page}`,
    }),
    getPostById: builder.query<IPost, string | string[]>({
      query: (slug) => `/posts/${slug}`,
    }),
    getRelatedPosts: builder.query<IResponse<IArticle[]>, string>({
      query: (id) => `/posts/${id}/related_posts`,
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetAllCategoriesQuery,
  useGetFeaturedPostsQuery,
  useGetActualPostsQuery,
  useGetCategoryPostsQuery,
  useGetPostByIdQuery,
  useGetRelatedPostsQuery,
} = apiSlice;
