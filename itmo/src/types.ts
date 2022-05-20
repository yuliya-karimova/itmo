export type CategoryType = {
  category_id: number;
  category_title: string;
  color_title: string;
  color: string;
};

export type NewsItemType = {
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
};

export type LangType = {
  name: string;
  title: string;
};

export type NewsResponseType = {
  category: number;
  total: number;
  page: number;
  per_page: number;
  last_page: number;
  news: NewsItemType[]
};
