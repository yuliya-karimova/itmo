import { ReactNode } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { Header } from '../../components';
import { CenteredContainer } from '../../styles/sharedComponents';

const PageContent = styled(CenteredContainer)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 40px;
  padding-bottom: 40px;
`;

type PropsType = {
  children?: ReactNode
  title?: string
};

export default function MainLayout({ children, title }: PropsType) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>
        <PageContent>
          {children}
        </PageContent>
      </main>
    </>
  );
}
