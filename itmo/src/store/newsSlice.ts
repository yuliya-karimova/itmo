import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { NewsCardType, NewsResponseType } from '../types';
import axios from 'axios';
import { BASE_URL, DEFAULT_NEWS_PER_PAGE, RESPONSE_STATUS } from '../constants';

type responseKeys = keyof typeof RESPONSE_STATUS;

type StateType = {
  newsList: NewsCardType[];
  newsStatus: typeof RESPONSE_STATUS[responseKeys];
  error: string | null;
};

const initialState: StateType = {
  newsList: [],
  newsStatus: RESPONSE_STATUS.LOADING,
  error: null,
};

export const fetchNews = createAsyncThunk('news/fetchNews', async(lang: number) => {
  const response = await axios.get<NewsResponseType>(`${BASE_URL}&per_page=${DEFAULT_NEWS_PER_PAGE}&lead=true&language_id=${lang}`);

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
