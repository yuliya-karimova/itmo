import { NewsItemType } from '../../types';
import styles from './NewsList.module.scss';

type PropsType = {
  newsList: NewsItemType[];
};

export default function NewsList({ newsList }: PropsType) {
  return (
    <div className={styles.list}>
      {newsList ? 
        (newsList.map((newsItem) => (
          <p key={newsItem.id}>{newsItem.title}</p>
        )))
        : <p>Sorry, no news. Please, try later.</p>
      }
    </div>
  );
}
