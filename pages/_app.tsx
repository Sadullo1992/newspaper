import Layout from '@/components/Layout';
import { setupStore } from '@/redux/store';
import '@/styles/main.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

const store = setupStore({});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
