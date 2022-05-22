import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useSelector, useDispatch } from 'react-redux';

import { MainLayout, NewsList, Preloader } from '../../components';
import { REQUEST_STATUSES, RU_CODE } from '../../constants';
import { fetchNews } from '../../store/newsSlice';
import { AppDispatch, RootState } from '../../store/store';
import { H1 } from '../../styles/sharedComponents';

function News() {
  const { currentLang } = useSelector((state: RootState) => state.langReducer);
  const { newsList, newsStatus } = useSelector((state: RootState) => state.newsReducer);
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchNews(currentLang.id));
  }, [currentLang]);

  const isNewsSuccessed = newsStatus === REQUEST_STATUSES.SUCCESS;
  const isNewsLoading = newsStatus === REQUEST_STATUSES.LOADING;
  const isNewsFailed = newsStatus === REQUEST_STATUSES.FAILED;
  const isNoNews = isNewsFailed || isNewsSuccessed && !newsList.length;

  return (
    <MainLayout title={t('homeTitle')}>
      <H1 isLarge={true}>{t('homeTitle')}</H1>
      {isNewsLoading && <Preloader />}
      {isNoNews
        ? (<p>{t('noNews')}</p>)
        : (<NewsList newsList={newsList} />)
      }
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale || RU_CODE),
  },
});

export default News;
