import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LangType } from '../types';
import { langList } from '../constants';

type StateType = {
  lang: LangType;
  isModalOpen: boolean;
};

const initialState: StateType = {
  lang: langList[0],
  isModalOpen: false,
};

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setCurrentLang(state, action: PayloadAction<LangType>) {
      state.lang = action.payload;
    },
    setIsModalOpen(state, action: PayloadAction<boolean>) {
      state.isModalOpen = action.payload;
    },
  },
});

export const { setCurrentLang, setIsModalOpen } = langSlice.actions;
export default langSlice.reducer;
