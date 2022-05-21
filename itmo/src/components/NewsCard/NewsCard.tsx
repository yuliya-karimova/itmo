import { NewsCardType } from '../../types';
import { useAppSelector } from '../../hooks/redux';
import { getFormatDate } from '../../utils/getFormatDate';
import Image from 'next/image';
import Link from 'next/link';

import styles from './NewsCard.module.scss';

type PropsType = {
  newsData: NewsCardType;
};

export default function NewsCard({ newsData }: PropsType) {
  const { title, date, image_big, id } = newsData;
  const { currentLang } = useAppSelector((state) => state.langReducer);

  const formatDate = getFormatDate(date, currentLang.code);
  
  return (
    <Link href={`/news/${id}`}>
      <a className={styles.card}>
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
      </a>
    </Link>
  );
}
