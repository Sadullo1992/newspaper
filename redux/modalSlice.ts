import { IModal } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

const initialState: IModal = {
  isModal: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<IModal>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { showModal } = modalSlice.actions;

export const selectModalState = (state: RootState) => state.modal;

export default modalSlice.reducer;
