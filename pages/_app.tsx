import Layout from '@/components/Layout';
import { storeWrapper } from '@/redux/store';
import '@/styles/main.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  const { store, props } = storeWrapper.useWrappedStore(pageProps);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...props.pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
