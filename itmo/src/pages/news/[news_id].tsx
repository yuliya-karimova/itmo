import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { GetServerSideProps } from 'next';

import { MainLayout, Preloader } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { REQUEST_STATUS, RU_CODE } from '../../constants';
import { fetchNews } from '../../store/newsSlice';
import NewsIdPageContent from '../../components/NewsIdPageContent/NewsIdPageContent';

const NewsIdPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const { currentLang } = useAppSelector((state) => state.langReducer);
  const { newsList, newsStatus } = useAppSelector((state) => state.newsReducer);

  const currentNews = newsList.find(({ id }) => id === Number(router.query.news_id));

  useEffect(() => {
    dispatch(fetchNews(currentLang.id));
  }, [currentLang]);

  const isNewsLoading = newsStatus === REQUEST_STATUS.LOADING;
  const isNewsFailed = newsStatus === REQUEST_STATUS.FALIED || !currentNews;
  
  let pageTitle = t('news');

  if (isNewsLoading) pageTitle = t('loading');

  if (isNewsFailed) pageTitle = t('noNewsId');

  if (currentNews) pageTitle = currentNews.title;

  return (
    <MainLayout title={pageTitle}>
      {isNewsLoading && <Preloader />}
      {isNewsFailed && <h2>{t('noNewsId')}</h2>}
      {currentNews && <NewsIdPageContent newsData={currentNews} langCode={currentLang.code} />}
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale || RU_CODE),
  },
});

export default NewsIdPage;
