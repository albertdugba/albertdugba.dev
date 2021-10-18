import dynamic from 'next/dynamic';
import { Loader } from '@/common/loader/loader';

const Landing = dynamic(() => import('@/landing/Landing'), { loading: () => <Loader /> });

export default function Home() {
  return <Landing />;
}
