import React, { Suspense } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';
import { Preloader } from '../components';

import '../styles/global.scss';

export const store = setupStore();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="next,nextjs,javasccript,react" />
        <meta name="description" content="Task for itmo" />
        <meta charSet="utf-8" />
      </Head>
      <React.StrictMode>
        <Provider store={store}>
          <Suspense fallback={<Preloader />}>
            <Component {...pageProps} />
          </Suspense>
        </Provider>
      </React.StrictMode>
    </>
  );
}
