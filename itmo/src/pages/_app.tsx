import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/global.scss';

export default function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="next,nextjs,javasccript,react" />
        <meta name="description" content="Task for itmo" />
        <meta charSet="utf-8" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
