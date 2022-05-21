import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LangType } from '../types';
import { langList } from '../constants';

type StateType = {
  currentLang: LangType;
  isModalOpen: boolean;
};

const initialState: StateType = {
  currentLang: langList[0],
  isModalOpen: false,
};

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setCurrentLang(state, { payload }: PayloadAction<LangType>) {     
      state.currentLang = payload;
    },
    setIsModalOpen(state, { payload }: PayloadAction<boolean>) {
      state.isModalOpen = payload;
    },
  },
});

export const { setCurrentLang, setIsModalOpen } = langSlice.actions;
export default langSlice.reducer;
