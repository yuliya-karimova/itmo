import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { NewsItemType } from '../../types';
import { useAppSelector } from '../../hooks/redux';
import { getFormatDate } from '../../utils/getFormatDate';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme: { borderRadius }}) => borderRadius.medium};
  box-shadow: ${({ theme: { shadows }}) => shadows.medium};
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme: { shadows }}) => shadows.large}
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 12 / 7;
  background-color: ${({ theme: { colors }}) => colors.lightBlue};
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
`;

const CardDate = styled.p`
  line-height: 16px;
  color: ${({ theme: { colors }}) => colors.grey};
`;

const CardTitle = styled.p`
  font-size: ${({ theme: { fontSizes }}) => fontSizes.medium};
  line-height: 24px;
  max-height: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 5;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;

type NewsCardPropsType = {
  newsData: NewsItemType;
  priority: boolean;
};

export default function NewsCard({ newsData, priority }: NewsCardPropsType) {
  const { title, date, image_big, id } = newsData;
  const { currentLang } = useAppSelector((state) => state.langReducer);

  const formatDate = getFormatDate(date, currentLang.code);
  
  return (
    <Link href={`/news/${id}`}>
      <CardWrapper>
        <ImageWrapper>
          <Image
            src={image_big}
            alt="news photo"
            layout="fill"
            objectFit="cover"
            priority={priority}
          />
        </ImageWrapper>
        <CardInfo>
          <CardDate>{formatDate}</CardDate>
          <CardTitle>{title}</CardTitle>
        </CardInfo>
      </CardWrapper>
    </Link>
  );
}
