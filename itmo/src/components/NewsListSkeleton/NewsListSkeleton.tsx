import styled from 'styled-components';

import { DEFAULT_NEWS_PER_PAGE } from '../../constants';
import { ImageWrapper } from '../../styles/sharedComponents';

const NewsListWrapper = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 380px));
`;

const NewsItem = styled.div`
  background-color: ${({ theme: { colors }}) => colors.lightBlue};
  border-radius: ${({ theme: { borderRadius }}) => borderRadius.medium};
  box-shadow: ${({ theme: { shadows }}) => shadows.medium};
  padding-bottom: 120px;
`;

export default function NewsListSkeleton() {
  const stubs = [];
  for (let i = 0; i < DEFAULT_NEWS_PER_PAGE; i++) {
    stubs.push(
      <NewsItem key={i}>
        <ImageWrapper />
      </NewsItem>
    );
  }

  return (
    <NewsListWrapper>
      {stubs}
    </NewsListWrapper>
  );
}
