import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

import { Arrow, FlagList } from '../../assets';

import { LangType } from '../../types';

type StyledButtonPropsType = {
  isActive: boolean;
  isTop: boolean;
};

const Button = styled.button<StyledButtonPropsType>`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: ${({ isActive }) => isActive ? '4px 0 4px 8px' : '8px 0 8px 8px'};
  font-weight: 600;
  color: ${({ isTop, theme: { colors }}) => isTop ? colors.white : colors.black};
  background-color: ${({ isActive, theme: { colors }}) => isActive ? colors.lightBlue : 'unset'};
  cursor: pointer;
`;

type LangButtonPropsType = {
  lang: LangType;
  isTop?: boolean;
  isActive?: boolean;
  handleClick?: () => void;
};

export default function LangButton({ lang, isTop = false, isActive = false, handleClick }: LangButtonPropsType) {
  const { title, code } = lang;
  const { t } = useTranslation();

  return (
    <Button
      isTop={isTop}
      isActive={isActive}
      onClick={handleClick}
    >
      <Image
        src={FlagList[code]}
        alt={t(`langFlagsAltText.${code}`)}
        width={24}
        height={24}
      />
      <p>{title}</p>
      {isTop && (
        <Image
          src={Arrow}
          alt={t('arrowDown')}
          width={10}
          height={10}
        />
      )}
    </Button>
  );
}
