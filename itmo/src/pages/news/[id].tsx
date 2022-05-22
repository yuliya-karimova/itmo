import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { GetServerSideProps } from 'next';
import { useDispatch, useSelector } from 'react-redux';

import { MainLayout, Preloader, NewsIdPageContent } from '../../components';
import { REQUEST_STATUSES, RU_CODE } from '../../constants';
import { fetchNews } from '../../store/newsSlice';
import { AppDispatch, RootState } from '../../store/store';

const NewsIdPage = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();

  const { currentLang } = useSelector((state: RootState) => state.langReducer);
  const { newsList, newsStatus } = useSelector((state: RootState) => state.newsReducer);

  const currentNews = newsList.find(({ id }) => id === Number(router.query.id));

  useEffect(() => {
    dispatch(fetchNews(currentLang.id));
  }, [dispatch, currentLang]);

  const isNewsLoading = newsStatus === REQUEST_STATUSES.LOADING;
  const isNewsFailed = newsStatus === REQUEST_STATUSES.FAILED;
  
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
