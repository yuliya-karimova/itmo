import { useRouter } from 'next/router';

const NewsCardPage = () => {
  const router = useRouter();
  
  return (
    <div>
      NewsCard {router.query.id}
    </div>
  );
};

export default NewsCardPage;
