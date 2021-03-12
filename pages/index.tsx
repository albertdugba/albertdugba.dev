import { motion } from 'framer-motion';
import Head from 'next/head';
import Landing from '../components/Landing';

export default function Home() {
  return (
    <>
      <Head>
        <title>Albert Dugba</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Landing />
    </>
  );
}
