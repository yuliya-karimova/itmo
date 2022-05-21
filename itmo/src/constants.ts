import { LangType } from './types';

export const RU_CODE = 'ru';
export const RU_TITLE = 'Рус';
export const EN_CODE = 'en';
export const EN_TITLE = 'Eng';

export const langList: LangType[] = [
  {
    id: '1',
    code: RU_CODE,
    title: RU_TITLE
  },
  {
    id: '2',
    code: EN_CODE,
    title: EN_TITLE
  },
];

export const BASE_URL = 'https://news.itmo.ru/api/news/list/?ver=2.0';
export const DEFAULT_NEWS_PER_PAGE = 9;

export const REQUEST_STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'succeeded',
  FALIED: 'failed',
};
