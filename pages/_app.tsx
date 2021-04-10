import '../styles/app.scss';
import { Header } from 'components/Navigation/Header';
import { NavigationMenu } from 'components/Navigation/NavMenu';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { FormspreeProvider } from '@formspree/react';
import { PostContext, postsContextDefaultValue } from 'context/blog';

interface ToggleMenu {
  toggleMenu: boolean;
  setToggleMenu: Function;
}

function MyApp({ Component, pageProps }) {
  const [toggleMenu, setToggleMenu] = useState<ToggleMenu>();
  const router = useRouter();
  const showHeader = router.pathname === '/blog' ? false : true;

  return (
    <>
      {showHeader && <Header setToggleMenu={setToggleMenu} />}
      <NavigationMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <PostContext.Provider value={postsContextDefaultValue}>
        <Component {...pageProps} />
      </PostContext.Provider>
    </>
  );
}

export default MyApp;
