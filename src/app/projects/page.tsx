import Image from "next/image";
import { Title } from "~/components/title";

const MyProjects = () => {
  const PROJECT = [
    "/projects/diabetes.png",
    "/projects/mox-wallet.png",
    "/projects/diabetes.png",
  ];

  return (
    <div className='h-full lg:p-0 p-6'>
      <div className='mt-14 pb-20'>
        <h1 className='text-white text-center'></h1>
        <Title title='Selected Projects' />
        <ul className='h-full flex w-full my-10'>
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
    <div className='w-full rounded-xl text-white p-2 hover:border-2 hover:border-secondary  hover:transition-all hover:-translate-y-2'>
      <div className='relative lg:h-[200px] h-[180px] w-full mb-4'>
        <Image
          src={image}
          placeholder='blur'
          blurDataURL='/blog/pnpm.avif'
          fill
          alt=''
          className='w-full h-auto object-cover rounded-xl'
        />
      </div>

      {/* // <h1 className='text-xl text-primary mb-3 text-white'>{post?.title}</h1> */}

      {/* // <div className='h-16 mb-5 w-full'>
        //   <p className='text-sm font-light text-white line-clamp-4'>
        //     {post?.description}
        //   </p>
        // </div>
      </Link> */}
    </div>
  );
};

export default MyProjects;
