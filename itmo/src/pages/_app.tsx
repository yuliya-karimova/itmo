import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';

import '../styles/global.scss';

const store = setupStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="next,nextjs,javasccript,react" />
        <meta name="description" content="Task for itmo" />
        <meta charSet="utf-8" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <NextNProgress
        options={{ showSpinner: false }}
        color="red"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
    </>
  );
}

export default appWithTranslation(MyApp);
