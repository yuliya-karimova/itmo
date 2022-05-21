export type CategoryType = {
  category_id: number;
  category_title: string;
  color_title: string;
  color: string;
};

export type NewsCardType = {
  id: number;
  title: string;
  image_small: string;
  image_big: string;
  creation_date: string;
  date: string;
  view_count: number;
  parent_category: CategoryType;
  category: CategoryType;
  url: string;
  lead: string;
};

export type LangType = {
  id: string,
  code: string;
  title: string;
};

export type NewsResponseType = {
  category: number;
  total: number;
  page: number;
  per_page: number;
  last_page: number;
  news: NewsCardType[]
};

export type LocalePropsType = {
  locale: string;
};
