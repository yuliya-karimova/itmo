import { useEffect } from 'react';
import { MainLayout } from '../components';
import NewsList from '../components/NewsList/NewsList';
import { BASE_URL } from '../constants';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { NewsItemType, NewsResponseType } from '../types';
import { fetchNews } from '../store/newsSlice';

// type PropsType = {
//   newsList: NewsItemType[];
// };

function Home() {
  const { lang } = useAppSelector((state) => state.langReducer);
  const { newsList, newsStatus } = useAppSelector((state) => state.newsReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (newsStatus === 'idle') {
      dispatch(fetchNews());
    }
  }, [newsStatus, dispatch]);

  return (
    <MainLayout title="News">
      <h3>{lang.name === 'ru' ? 'Новости и события' : 'News and events'}</h3>
      <NewsList newsList={newsList} />
    </MainLayout>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(BASE_URL);
//   const data: NewsResponseType = await res.json();
//   const newsList = data.news;
  
//   return { props: { newsList }};
// }

export default Home;
