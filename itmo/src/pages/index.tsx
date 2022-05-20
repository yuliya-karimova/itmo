import { useEffect } from 'react';
import { MainLayout, NewsList, Preloader } from '../components';
import { homeTitle, RESPONSE_STATUS, RU_CODE } from '../constants';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchNews } from '../store/newsSlice';

function Home() {
  const { lang } = useAppSelector((state) => state.langReducer);
  const { newsList, newsStatus } = useAppSelector((state) => state.newsReducer);
  const dispatch = useAppDispatch();
  const langCode = lang.code === RU_CODE ? 1 : 2;

  useEffect(() => {
    dispatch(fetchNews(langCode));
  }, [dispatch, langCode]);

  return (
    <MainLayout title="News">
      <h3>{lang.code === RU_CODE ? homeTitle.ru : homeTitle.en}</h3>
      {newsStatus === RESPONSE_STATUS.LOADING ? <Preloader /> : <NewsList newsList={newsList} />}
    </MainLayout>
  );
}

export default Home;
