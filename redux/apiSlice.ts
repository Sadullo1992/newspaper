import { BASE_URL } from '@/constants/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IResponse, IArticle, ICategory, IPost, IMagazine } from '../types/types';

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
    getCategoryPosts: builder.query<IResponse<IArticle[]>, string>({
      query: (id) => `/categories/${id}/posts`,
    }),
    getPostById: builder.query<IPost, string>({
      query: (id) => `/posts/${id}`,
    }),
    getRelatedPosts: builder.query<IResponse<IArticle[]>, string>({
      query: (id) => `/posts/${id}/related_posts`,
    }),
    getAllMagazines: builder.query<IResponse<IMagazine[]>, void>({
      query: () => `/magazines`,
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
  useGetAllMagazinesQuery,
} = apiSlice;
