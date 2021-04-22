import '../styles/app.scss';
import { Header } from 'components/Navigation/Header';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from 'components/containers/Layout';

interface ToggleMenu {
  toggleMenu: boolean;
  setToggleMenu: Function;
}

function MyApp({ Component, pageProps }) {
  const [_, setToggleMenu] = useState<ToggleMenu>();
  const router = useRouter();
  const showHeader = router.pathname === '/blog' ? false : true;

  return (
    <Layout>
      {showHeader && <Header />}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
