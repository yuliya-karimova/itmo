import { ReactNode } from 'react';
import Head from 'next/head';
import { Header } from '..';
import styles from './MainLayout.module.scss';

type PropsType = {
  children?: ReactNode
  title?: string
};

export default function MainLayout({ children, title }: PropsType) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Head>
      <Header />
      <main>
        <div className={styles.pageContent}>
          {children}
        </div>
      </main>
    </>
  );
}
