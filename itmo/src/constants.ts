import { LangType } from './types';

export const langList: LangType[] = [
  {
    name: 'eng',
    title: 'Eng'
  },
  {
    name: 'ru',
    title: 'Рус'
  },
];

export const BASE_URL = 'https://news.itmo.ru/api/news/list/?ver=2.0';
export const DEFAULT_NEWS_PER_PAGE = 9;
