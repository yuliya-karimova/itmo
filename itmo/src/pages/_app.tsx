import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import '../styles/global.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>NextJS App</title>
        <meta name="keywords" content="next,nextjs,javasccript,react" />
        <meta name="description" content="Task for itmo" />
        <meta charSet="utf-8" />
      </Head>
      <header>
        <nav>
          <Link href='/'>Home</Link>
        </nav>
      </header>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
