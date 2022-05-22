import Image from 'next/image';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';

import { getFormatDate } from '../../utils/getFormatDate';
import { ColumnFlex, H1, ImageWrapper, MainLink, MainText, StyledDate } from '../../styles/sharedComponents';
import { NewsIdPageContentPropsType } from './types';

const NewsHead = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 30px;
`;

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
        <ColumnFlex gap="16px">
          <H1 isLarge={false}>{title}</H1>
          <StyledDate>{formatDate}</StyledDate>
        </ColumnFlex>
      </NewsHead>
      <ColumnFlex gap="16px">
        <MainText dangerouslySetInnerHTML={{ __html: lead }} />
        <MainLink href={url}>{t('readMore')}</MainLink>
      </ColumnFlex>
    </>
  );
};

export default NewsIdPageContent;
