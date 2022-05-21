import { NewsCardType } from '../../types';
import { NewsCard } from '..';
import styles from './NewsList.module.scss';

type PropsType = {
  newsList: NewsCardType[];
};

export default function NewsList({ newsList }: PropsType) {
  return (
    <div className={styles.list}>
      {newsList ? 
        (newsList.map((newsData, index) => (
          <NewsCard key={newsData.id} newsData={newsData} priority={index < 4} />
        )))
        : <p>Sorry, no news. Please, try later.</p>
      }
    </div>
  );
}
