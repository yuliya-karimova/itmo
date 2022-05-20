import { useEffect } from 'react';
import { MainLayout, NewsList } from '../components';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchNews } from '../store/newsSlice';

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

export default Home;
