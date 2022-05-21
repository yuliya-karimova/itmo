import { useEffect } from 'react';
import { MainLayout, NewsList, Preloader } from '../components';
import { REQUEST_STATUS } from '../constants';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchNews } from '../store/newsSlice';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { LocalePropsType } from '../types';

function Home() {
  const { lang } = useAppSelector((state) => state.langReducer);
  const { newsList, newsStatus } = useAppSelector((state) => state.newsReducer);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchNews(lang.id));
  }, []);

  useEffect(() => {
    dispatch(fetchNews(lang.id));
  }, [lang]);

  return (
    <MainLayout title="News">
      <h3>{t('home.title')}</h3>
      {newsStatus === REQUEST_STATUS.LOADING ? 
        <Preloader /> 
        : 
        <NewsList newsList={newsList} />
      }
    </MainLayout>
  );
}

export const getStaticProps = async({ locale }: LocalePropsType) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
});

export default Home;
