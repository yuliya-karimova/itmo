import styled from 'styled-components';

import { LangButton } from '..';
import { LangType } from '../../types';

type LangModalWrapperPropsType = {
  isOpen: boolean;
};

const LangModalWrapper = styled.div<LangModalWrapperPropsType>`
  position: absolute;
  top: 40px;
  display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
  flex-direction: column;
  width: 100%;
  height: fit-content;
  background-color: ${({ theme: { colors }}) => colors.white};
  box-shadow: ${({ theme: { shadows }}) => shadows.small};
`;

type LangModalPropsType = {
  langList: LangType[];
  currentLang: LangType;
  isOpen: boolean;
  setLang: (lang: LangType) =>void;
};

export default function LangModal({ langList, currentLang, isOpen, setLang }: LangModalPropsType) {
  return (
    <LangModalWrapper isOpen={isOpen}>
      {langList.map((lang) => (
        <LangButton
          key={lang.id}
          lang={lang}
          isActive={currentLang.code === lang.code}
          handleClick={() => setLang(lang)}
        />
      ))}
    </LangModalWrapper>
  );
}
