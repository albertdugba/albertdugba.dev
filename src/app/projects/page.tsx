import Image from "next/image";
import { Header } from "~/components/header";

const MyProjects = () => {
  const PROJECT = [
    "/projects/logos/silver-warp.svg",
    "/projects/logos/diabetes-web.webp",
    "/projects/logos/creator-mode-logo.svg",
    "/projects/logos/mox-wallet-white.svg",
  ];
  return (
    <div className='h-screen'>
      <div className='absolute bottom-6 top-20 left-0 w-1/6'>
        <h1
          style={{ writingMode: "vertical-rl" }}
          className='text-white inline-block text-[9.5rem] opacity-5 p-0'
        >
          my projects
        </h1>
      </div>

      <div className='mt-20'>
        <h1 className='text-white text-center'>
          Selected Projects I have worked on
        </h1>
        <ul className='my-8 grid lg:grid-cols-3 grid-cols-1 gap-5'>
          {PROJECT.map((img, i) => (
            <Card key={i} image={img} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const Card = ({ image }: { image: string }) => {
  return (
    <li className='transition-all shadow-2xl text-white bg-secondary w-full p-8 rounded-md'>
      <div className='flex items-center justify-center p-10'>
        <Image src={image} height={150} width={150} alt='Company ' />
      </div>
    </li>
  );
};

export default MyProjects;
