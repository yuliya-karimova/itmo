import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useSelector, useDispatch } from 'react-redux';

import { MainLayout, NewsList, Preloader } from '../../components';
import { REQUEST_STATUSES, RU_CODE } from '../../constants';
import { fetchNews } from '../../store/newsSlice';
import { AppDispatch, RootState } from '../../store/store';

function News() {
  const { currentLang } = useSelector((state: RootState) => state.langReducer);
  const { newsList, newsStatus } = useSelector((state: RootState) => state.newsReducer);
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchNews(currentLang.id));
  }, [currentLang]);

  const isNewsLoading = newsStatus === REQUEST_STATUSES.LOADING;
  const isFailed = newsStatus === REQUEST_STATUSES.FAILED;

  return (
    <MainLayout title={t('homeTitle')}>
      <h1>{t('homeTitle')}</h1>
      {isNewsLoading && <Preloader />}
      {isFailed && <p>{t('noNews')}</p>}
      {!!newsList.length && <NewsList newsList={newsList} />}
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale || RU_CODE),
  },
});

export default News;
