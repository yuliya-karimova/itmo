import styled from 'styled-components';

import { LangSwitcher, Logo } from '..';
import { CenteredContainer } from '../../styles/sharedComponents';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  background: ${({ theme }) => theme.gradients.bluePurpleGradient};
  z-index: ${({ theme }) => theme.zIndex.header}
`;

const HeaderContent = styled(CenteredContainer)`
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
