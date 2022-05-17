import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>NextJS App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
