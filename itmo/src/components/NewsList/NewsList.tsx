import styled from 'styled-components';

import { NewsCard } from '..';
import { NewsListPropsType } from './types';

const NewsListWrapper = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(280px, max-content));
`;

export default function NewsList({ newsList }: NewsListPropsType) {
  return (
    <NewsListWrapper>
      {newsList.map((newsData, index) => (
        <NewsCard key={newsData.id} newsData={newsData} priority={index < 4} />
      ))}
    </NewsListWrapper>
  );
}
