import '../styles/app.scss';
import { Header } from 'components/Navigation/Header';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from 'components/containers/Layout';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showHeader = router.pathname === '/post' ? false : true;

  return (
    <Layout>
      {showHeader && <Header />}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
