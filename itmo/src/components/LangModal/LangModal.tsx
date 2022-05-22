import styled from 'styled-components';

import { LangButton } from '..';
import { WrapperPropsType, LangModalPropsType } from './types';

const Wrapper = styled.div<WrapperPropsType>`
  position: absolute;
  top: 40px;
  display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
  flex-direction: column;
  width: 100%;
  height: fit-content;
  background-color: ${({ theme: { colors }}) => colors.white};
  box-shadow: ${({ theme: { shadows }}) => shadows.small};
`;

export default function LangModal({ langList, currentLang, isOpen, setLang }: LangModalPropsType) {
  return (
    <Wrapper isOpen={isOpen}>
      {langList.map((lang) => (
        <LangButton
          key={lang.id}
          lang={lang}
          isActive={currentLang.code === lang.code}
          handleClick={() => setLang(lang)}
        />
      ))}
    </Wrapper>
  );
}
