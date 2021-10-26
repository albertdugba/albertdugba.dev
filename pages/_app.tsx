import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/app.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
