import '../styles/app.scss';
import { useRouter } from 'next/router';
import Layout from 'components/containers/Layout';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  console.log(router.pathname);
  const showHeader =
    router.pathname === '/post/[slug]' ||
    router.pathname === '/resume' ||
    router.pathname === '/work/[slug]'
      ? false
      : true;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
