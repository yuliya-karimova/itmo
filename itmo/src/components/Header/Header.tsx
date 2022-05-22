import styled from 'styled-components';
import { LangSwitcher, Logo } from '..';
import { containerStyle } from '../../styles/sharedStyles';

const HeaderContainer = styled.header`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  background: ${({ theme }) => theme.gradients.bluePurpleGradient};
`;

const HeaderContent = styled.div`
  ${containerStyle}
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo />
        <LangSwitcher />
      </HeaderContent>
    </HeaderContainer>
  );
}
