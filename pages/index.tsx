import dynamic from 'next/dynamic';
import { Loader } from '@/common/loader/loader';

const Landing = dynamic(() => import('@/landing/Landing'), { loading: () => <Loader title="Loading" /> });

export default function Home() {
  return <Landing />;
}
