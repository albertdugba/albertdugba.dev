import Head from 'next/head';
import { Container } from './components/lib/Container';
import NavBar from './components/NavBar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Albert Dugba</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          height: '100vh',
          justifyContent: 'center',
          color: '#fff',
        }}>
        <h1>My name is Albert Dugba, a Software Developer</h1>
      </main>
    </>
  );
}
