import { NewsCardType } from '../../types';
import Image from 'next/image';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import enLocale from 'date-fns/locale/en-US';
import { useAppSelector } from '../../hooks/redux';
import { RU_CODE } from '../../constants';
import { useRouter } from 'next/router';
import styles from './NewsCard.module.scss';

type PropsType = {
  newsData: NewsCardType;
};

export default function NewsCard({ newsData }: PropsType) {
  const { title, date, image_big } = newsData;
  const { lang } = useAppSelector((state) => state.langReducer);
  const router = useRouter();

  const formatDate = format(new Date(date), 'd MMMM yyyy', { locale: lang.code === RU_CODE ? ruLocale : enLocale }).toUpperCase();

  const handleClick = () => {
    router.push(`/news/${newsData.id}`);
  };
  
  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.imageWrapper}>
        <Image
          src={image_big}
          alt="news photo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.info}>
        <p className={styles.info__date}>{formatDate}</p>
        <p className={styles.info__title}>{title}</p>
      </div>
    </div>
  );
}
