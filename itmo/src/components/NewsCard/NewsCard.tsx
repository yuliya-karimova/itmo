import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import { NewsItemType } from '../../types';
import { getFormatDate } from '../../utils/getFormatDate';
import { ImageWrapper } from '../../styles/sharedComponents';

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

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
`;

const CardDate = styled.p`
  line-height: ${({ theme: { lineHeights }}) => lineHeights.small};
  color: ${({ theme: { colors }}) => colors.grey};
`;

const CardTitle = styled.h2`
  font-size: ${({ theme: { fontSizes }}) => fontSizes.medium};
  line-height: ${({ theme: { lineHeights }}) => lineHeights.medium};
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
  const { currentLang } = useSelector((state: RootState) => state.langReducer);
  const { t } = useTranslation();

  const formatDate = getFormatDate(date, currentLang.code);
  
  return (
    <Link href={`/news/${id}`}>
      <CardWrapper>
        <ImageWrapper>
          <Image
            src={image_big}
            alt={t('newsPhoto')}
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
