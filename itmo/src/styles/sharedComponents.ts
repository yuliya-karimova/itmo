import styled from 'styled-components';
import { ColumnFlexType, H1PropsType } from './types';

export const MainLink = styled.a`
  font-size: ${({ theme: { fontSizes }}) => fontSizes.medium};
`; 

export const MainText = styled.div`
  font-size: ${({ theme: { fontSizes }}) => fontSizes.medium};
  line-height: 28px;
`;

export const CenteredContainer = styled.div`
  width: 100%;
  max-width: 1270px;
  padding: 0 30px;
  margin: 0 auto;
`;

export const H1 = styled.h1<H1PropsType>`
  font-size: ${({ isLarge, theme: { fontSizes }}) => isLarge ? fontSizes.extraLarge : fontSizes.large};
  line-height: ${({ isLarge, theme: { lineHeights }}) => isLarge ? lineHeights.extraLarge : lineHeights.large};
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 12 / 7;
  background-color: ${({ theme: { colors }}) => colors.lightBlue};
`;

export const ColumnFlex = styled.div<ColumnFlexType>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap};
`;

export const StyledDate = styled.p`
  color: ${({ theme: { colors }}) => colors.grey};
`;
