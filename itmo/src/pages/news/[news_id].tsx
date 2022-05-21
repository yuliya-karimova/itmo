import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import { MainLayout, Preloader } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { REQUEST_STATUS } from '../../constants';
import { fetchNews } from '../../store/newsSlice';
import Image from 'next/image';
import { LocalePropsType } from '../../types';
import ruLocale from 'date-fns/locale/ru';
import enLocale from 'date-fns/locale/en-US';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import styles from './NewsId.module.scss';

const localeMap = {
  en: enLocale,
  ru: ruLocale
};

const NewsIdPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { lang } = useAppSelector((state) => state.langReducer);
  const { newsList, newsStatus } = useAppSelector((state) => state.newsReducer);
  const { t } = useTranslation();

  const newsId = Number(router.query.news_id);
  const currentNews = newsList.find(({ id }) => id === newsId);
  
  useEffect(() => {
    if (!newsList.length) {
      dispatch(fetchNews(lang.id));
    }
  }, []);

  useEffect(() => {
    dispatch(fetchNews(lang.id));
  }, [lang]);
  
  if (newsStatus === REQUEST_STATUS.LOADING) {
    return (
      <MainLayout title="News">
        <Preloader />
      </MainLayout>
    );
  }

  if (newsStatus === REQUEST_STATUS.FALIED || !currentNews) {
    return (
      <MainLayout title="News">
        <h3>Sorry, we can&apos;t find this news</h3>
      </MainLayout>
    );
  }
  
  const { title, date, image_big, url, lead } = currentNews;
  const formatDate = format(new Date(date), 'd MMMM yyyy', { locale: localeMap[lang.code] }).toUpperCase();

  const createMarkup = () => {
    return { __html: lead };
  };
  
  
  return (
    <MainLayout title="News">
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
