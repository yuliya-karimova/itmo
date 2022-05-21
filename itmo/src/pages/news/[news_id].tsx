import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { MainLayout, Preloader } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { REQUEST_STATUS, RU_CODE } from '../../constants';
import { fetchNews } from '../../store/newsSlice';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { getFormatDate } from '../../utils/getFormatDate';
import { GetServerSideProps } from 'next';

import styles from './NewsId.module.scss';

const NewsIdPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { currentLang } = useAppSelector((state) => state.langReducer);
  const { newsList, newsStatus } = useAppSelector((state) => state.newsReducer);
  const { t } = useTranslation();

  const currentNews = newsList.find(({ id }) => id === Number(router.query.news_id));
  
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
      <MainLayout title={t('loading')}>
        <Preloader />
      </MainLayout>
    );
  }

  if (newsStatus === REQUEST_STATUS.FALIED || !currentNews) {
    return (
      <MainLayout title={t('noNewsId')}>
        <h2>{t('noNewsId')}</h2>
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
      <div className={styles.head}>
        <div className={styles.imageWrapper}>
          <Image
            src={image_big}
            alt="news photo"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className={styles.info}>
          <h2 className={styles.info__title}>{title}</h2>
          <p className={styles.info__date}>{formatDate}</p>
        </div>
      </div>
      <div className={styles.newsText}>
        <div dangerouslySetInnerHTML={createMarkup()} />
        <a href={url} className="navLink">{t('readMore')}</a>
      </div>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale || RU_CODE),
  },
});

export default NewsIdPage;
