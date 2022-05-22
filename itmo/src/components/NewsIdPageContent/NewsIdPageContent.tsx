import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

import { getFormatDate } from '../../utils/getFormatDate';
import { LangCodeType, NewsItemType } from '../../types';

const NewsHead = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 30px;
`;

const NewsHeadInfoTitle = styled.h1`
  font-size: ${({ theme: { fontSizes }}) => fontSizes.large};
  line-height: 30px;
`;

const NewsHeadInfoDate = styled.p`
  color: ${({ theme: { colors }}) => colors.grey};
`;

const NewsHeadInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 12 / 7;
  background-color: ${({ theme: { colors }}) => colors.lightBlue};
`;

const NewsBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const NewsBodyText = styled.div`
  font-size: ${({ theme: { fontSizes }}) => fontSizes.medium};
  line-height: 28px;
`;

const NewsBodyLink = styled.a`
  font-size: ${({ theme: { fontSizes }}) => fontSizes.medium};
`;

type NewsIdPageContentPropsType = {
  newsData: NewsItemType;
  langCode: LangCodeType;
};

const NewsIdPageContent = ({ newsData, langCode }: NewsIdPageContentPropsType) => {
  const { t } = useTranslation();
  const { title, date, image_big, url, lead } = newsData;
  const formatDate = getFormatDate(date, langCode);
    
  return (
    <>
      <NewsHead>
        <ImageWrapper>
          <Image
            src={image_big}
            alt={t('newsPhoto')}
            layout="fill"
            objectFit="cover"
            priority
          />
        </ImageWrapper>
        <NewsHeadInfo>
          <NewsHeadInfoTitle>{title}</NewsHeadInfoTitle>
          <NewsHeadInfoDate>{formatDate}</NewsHeadInfoDate>
        </NewsHeadInfo>
      </NewsHead>
      <NewsBody>
        <NewsBodyText dangerouslySetInnerHTML={{ __html: lead }} />
        <NewsBodyLink href={url}>{t('readMore')}</NewsBodyLink>
      </NewsBody>
    </>
  );
};

export default NewsIdPageContent;
