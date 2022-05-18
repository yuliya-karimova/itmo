import { useRouter } from "next/router";

const NewsItem = () => {
  const router = useRouter();
  
  return (
    <div>
      NewsItem {router.query.id}
    </div>
  );
};

export default NewsItem;