import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { MainLayout, Preloader } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { readMore, RESPONSE_STATUS, RU_CODE } from '../../constants';
import { fetchNews } from '../../store/newsSlice';
import Image from 'next/image';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import enLocale from 'date-fns/locale/en-US';

import styles from './NewsId.module.scss';

const NewsCardPage = () => {
  const router = useRouter();
  const { lang } = useAppSelector((state) => state.langReducer);
  const { newsList, newsStatus } = useAppSelector((state) => state.newsReducer);
  const dispatch = useAppDispatch();

  const newsId = Number(router.query.id);
  const currentNews = newsList.find(({ id }) => id === newsId);
  const langCode = lang.code === RU_CODE ? 1 : 2;
  
  useEffect(() => {
    if (!newsList.length) {
      dispatch(fetchNews(langCode));
    }
  }, [dispatch, langCode, newsList.length]);

  useEffect(() => {
    dispatch(fetchNews(langCode));
  }, [dispatch, langCode]);
  
  if (newsStatus === RESPONSE_STATUS.LOADING) return <Preloader />;
  if (!currentNews) return <p>Sorry, we can&apos;t find this news</p>;
  
  const { title, date, image_big, url, lead } = currentNews;
  const formatDate = format(new Date(date), 'd MMMM yyyy', { locale: lang.code === RU_CODE ? ruLocale : enLocale }).toUpperCase();

  const createMarkup = () => {
    return { __html: lead };
  };
  
  
  return (
    <div>
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
          <a href={url}>{lang.code === RU_CODE ? readMore.ru : readMore.en}</a>
        </div>
      </MainLayout>
    </div>
  );
};

export default NewsCardPage;
