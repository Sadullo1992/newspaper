import { IPost, TPosts } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import postsData from '@/assets/data/posts.json';

const initialState: TPosts = {
  posts: postsData.posts,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: (state, action: PayloadAction<IPost[]>) => {
      return {
        ...state,
        posts: [...action.payload],
      };
    },
  },
});

export const { getPosts } = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts;

export default postsSlice.reducer;
