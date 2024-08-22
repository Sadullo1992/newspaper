import { BASE_URL } from '@/constants/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IResponse, IArticle, ICategory, IPost } from '../types/types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<IResponse<IArticle>, number>({
      query: (page) => `/posts?page=${page}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.data.push(...newItems.data);
      },
      forceRefetch({ currentArg, previousArg }) {
        if (previousArg === undefined) previousArg = 0;
        if (currentArg === undefined) currentArg = 0;
        return currentArg > previousArg;
      },
    }),
    getFeaturedPosts: builder.query<IResponse<IArticle>, void>({
      query: () => `/posts/featured_posts`,
    }),
    getActualPosts: builder.query<IResponse<IArticle>, void>({
      query: () => `/posts/actual_posts`,
    }),
    getAllCategories: builder.query<ICategory[], void>({
      query: () => `/categories`,
    }),
    getCategoryBySlug: builder.query<ICategory, string | string[] | undefined>({
      query: (slug) => `/categories/${slug}`,
    }),
    getCategoryPosts: builder.query<
      IResponse<IArticle>,
      { slug: string | string[] | undefined; page: number }
    >({
      query: ({ slug, page }) => `/categories/${slug}/posts?page=${page}`,
    }),
    getPostById: builder.query<IPost, string | string[] | undefined>({
      query: (slug) => `/posts/${slug}`,
    }),
    getRelatedPosts: builder.query<IResponse<IArticle>, { slug: string; page: number }>({
      query: ({ slug, page }) => `/posts/${slug}/related_posts?page=${page}`,
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
  useGetCategoryBySlugQuery,
} = apiSlice;
