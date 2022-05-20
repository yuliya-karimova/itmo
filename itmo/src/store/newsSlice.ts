import { createSlice, PayloadAction, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import { LangType, NewsItemType, NewsResponseType } from '../types';
import axios from 'axios';
import { BASE_URL } from '../constants';

type StateType = {
  newsList: NewsItemType[];
  newsStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: StateType = {
  newsList: [],
  newsStatus: 'idle',
  error: null,
};

export const fetchNews = createAsyncThunk('news/fetchNews', async() => {
  const response = await axios.get(`${BASE_URL}`);

  return response.data;
});

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.newsStatus = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.newsStatus = 'succeeded';
        state.newsList = action.payload.news;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.newsStatus = 'failed';
        state.error = action.error.message || '';
      });
  }
});

export default newsSlice.reducer;
