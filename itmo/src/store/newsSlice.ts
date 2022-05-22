import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { NewsItemType, NewsResponseType } from '../types';
import axios from 'axios';
import { BASE_URL, DEFAULT_NEWS_PER_PAGE, REQUEST_STATUSES } from '../constants';

type responseKeys = keyof typeof REQUEST_STATUSES;

type StateType = {
  newsList: NewsItemType[];
  newsStatus: typeof REQUEST_STATUSES[responseKeys];
  error: string | null;
};

const initialState: StateType = {
  newsList: [],
  newsStatus: REQUEST_STATUSES.IDLE,
  error: null,
};

export const fetchNews = createAsyncThunk('news/fetchNews', async(lang: string) => {
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
        state.newsStatus = REQUEST_STATUSES.LOADING;
      })
      .addCase(fetchNews.fulfilled, (state, { payload }: PayloadAction<NewsResponseType>) => {      
        state.newsStatus = REQUEST_STATUSES.SUCCESS;
        state.newsList = payload.news;
      })
      .addCase(fetchNews.rejected, (state, { error }) => {
        state.newsStatus = REQUEST_STATUSES.FAILED;
        state.error = error.message || '';
      });
  }
});

export default newsSlice.reducer;
