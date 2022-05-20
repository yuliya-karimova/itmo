import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { LangType, NewsCardType, NewsResponseType } from '../types';
import axios from 'axios';
import { BASE_URL, DEFAULT_NEWS_PER_PAGE } from '../constants';

type StateType = {
  newsList: NewsCardType[];
  newsStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: StateType = {
  newsList: [],
  newsStatus: 'idle',
  error: null,
};

export const fetchNews = createAsyncThunk('news/fetchNews', async() => {
  const response = await axios.get(`${BASE_URL}&per_page=${DEFAULT_NEWS_PER_PAGE}&lead=true`);

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
