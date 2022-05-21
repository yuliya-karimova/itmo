import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { MainLayout, Preloader } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { REQUEST_STATUS } from '../../constants';
import { fetchNews } from '../../store/newsSlice';
import Image from 'next/image';
import { LocalePropsType } from '../../types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import styles from './NewsId.module.scss';
import { getFormatDate } from '../../utils/getFormatDate';

const NewsIdPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { currentLang } = useAppSelector((state) => state.langReducer);
  const { newsList, newsStatus } = useAppSelector((state) => state.newsReducer);
  const { t } = useTranslation();

  const newsId = Number(router.query.news_id);
  const currentNews = newsList.find(({ id }) => id === newsId);
  
  useEffect(() => {
    if (!newsList.length) {
      dispatch(fetchNews(currentLang.id));
    }
  }, []);

  useEffect(() => {
    dispatch(fetchNews(currentLang.id));
  }, [currentLang]);
  
  if (newsStatus === REQUEST_STATUS.LOADING) {
    return (
      <MainLayout title="Loading...">
        <Preloader />
      </MainLayout>
    );
  }

  if (newsStatus === REQUEST_STATUS.FALIED || !currentNews) {
    return (
      <MainLayout title="No such news">
        <h3>{t('noNewsId')}</h3>
      </MainLayout>
    );
  }
  
  const { title, date, image_big, url, lead } = currentNews;
  const formatDate = getFormatDate(date, currentLang.code);
  
  const createMarkup = () => {
    return { __html: lead };
  };
  
  
  return (
    <MainLayout title={title}>
      <div className={styles.info}>
        <h3 className={styles.info__title}>{title}</h3>
        <p className={styles.info__date}>{formatDate}</p>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src={image_big}
          alt="news photo"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className={styles.newsText}>
        <div dangerouslySetInnerHTML={createMarkup()} />
        <a href={url}>{t('readMore')}</a>
      </div>
    </MainLayout>
  );
};

export const getServerSideProps = async({ locale }: LocalePropsType) => ({
  props: {
    ...await serverSideTranslations(locale),
  },
});

export default NewsIdPage;
