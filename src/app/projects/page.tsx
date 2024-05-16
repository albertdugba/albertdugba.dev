import Image from "next/image";

const MyProjects = () => {
  const PROJECT = [
    "/projects/diabetes.png",
    "/projects/diabetes.png",
    "/projects/diabetes.png",
  ];

  return (
    <div className='h-full lg:p-0 p-6'>
      <div className='absolute bottom-6 top-20 left-0 w-1/6'>
        <h1
          style={{ writingMode: "vertical-rl" }}
          className='text-white inline-block text-[8.40rem] opacity-5 p-0'
        >
          my projects
        </h1>
      </div>

      <div className='mt-14 pb-20'>
        <h1 className='text-white text-center'>
          Selected Projects I have worked on
        </h1>
        <ul className='h-full w-full my-10'>
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
    <li className='h-full w-full text-white border border-gray-600 rounded-md my-5'>
      <div className='relative block w-full h-[200px] rounded-md bg-primary'>
        <Image
          src={image}
          height={600}
          width={350}
          alt='Company'
          className='object-cover w-ful h-full rounded-tl-md rounded-bl-md'
        />
      </div>
    </li>
  );
};

export default MyProjects;
