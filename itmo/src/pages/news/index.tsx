import axios from 'axios';
import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useSelector, useDispatch } from 'react-redux';

import { MainLayout, NewsList, NewsListSkeleton } from '../../components';
import { fetchNews, setNewsList } from '../../store/newsSlice';
import { AppDispatch, RootState } from '../../store/store';
import { H1 } from '../../styles/sharedComponents';
import { NewsItemType, NewsResponseType } from '../../types';
import { RU_CODE, langList } from '../../constants';
import { REQUEST_STATUSES, BASE_URL, DEFAULT_NEWS_PER_PAGE } from '../../store/constants';

type NewsPagePropsType = {
  serverSideNewsList?: NewsItemType[]
};

function News({ serverSideNewsList = [] }: NewsPagePropsType) {
  const { currentLang } = useSelector((state: RootState) => state.langReducer);
  const { newsList, newsStatus } = useSelector((state: RootState) => state.newsReducer);
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();
  
  useEffect(() => {
    if (!serverSideNewsList.length) {
      dispatch(fetchNews(currentLang.id));
    } else {
      dispatch(setNewsList(serverSideNewsList));
    }
  }, [dispatch, currentLang, serverSideNewsList.length, serverSideNewsList]);

  const isNewsLoading = newsStatus === REQUEST_STATUSES.LOADING;
  const isNewsFailed = newsStatus === REQUEST_STATUSES.FAILED;

  return (
    <MainLayout title={t('homeTitle')}>
      <H1 isLarge={true}>{t('homeTitle')}</H1>
      {isNewsLoading && <NewsListSkeleton/>}
      {isNewsFailed && <p>{t('noNews')}</p>}
      {!!newsList.length && <NewsList newsList={newsList} />}
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async({ locale }) => {
  const translation = await serverSideTranslations(locale || RU_CODE);
  
  try {
    const lang = langList.find(({ code }) => code === locale)?.id || '1';
    const response = await axios.get<NewsResponseType>(`${BASE_URL}&per_page=${DEFAULT_NEWS_PER_PAGE}&lead=true&language_id=${lang}`);
    const serverSideNewsList = response.data.news;
    
    return { props: { serverSideNewsList,  ...translation }};
  } catch (error) {
    return {  props: { error,  ...translation }};
  }
};

export default News;
