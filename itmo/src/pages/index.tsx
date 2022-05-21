import { useEffect } from 'react';
import { MainLayout, NewsList, Preloader } from '../components';
import { REQUEST_STATUS, RU_CODE } from '../constants';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchNews } from '../store/newsSlice';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';

function Home() {
  const { currentLang } = useAppSelector((state) => state.langReducer);
  const { newsList, newsStatus } = useAppSelector((state) => state.newsReducer);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchNews(currentLang.id));
  }, [currentLang]);

  return (
    <MainLayout title={t('homeTitle')}>
      <h1>{t('homeTitle')}</h1>
      {newsStatus === REQUEST_STATUS.LOADING ? 
        <Preloader /> 
        : 
        <NewsList newsList={newsList} />
      }
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale || RU_CODE),
  },
});

export default Home;
