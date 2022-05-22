import styled from 'styled-components';

import { NewsItemType } from '../../types';
import { NewsCard } from '..';

const NewsListWrapper = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(280px, max-content));
`;

type NewsListPropsType = {
  newsList: NewsItemType[];
};

export default function NewsList({ newsList }: NewsListPropsType) {
  return (
    <NewsListWrapper>
      {newsList ? 
        (newsList.map((newsData, index) => (
          <NewsCard key={newsData.id} newsData={newsData} priority={index < 4} />
        )))
        : <p>Sorry, no news. Please, try later.</p>
      }
    </NewsListWrapper>
  );
}
