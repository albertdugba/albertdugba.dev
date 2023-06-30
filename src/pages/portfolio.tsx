import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "~/components/layout";
import Image from "next/image";

const PortFoliio = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (data.length === 1 && window.innerWidth >= 768) {
        document.documentElement.style.setProperty("--cardWidth", "80%");
      } else if (window.innerWidth >= 1024) {
        document.documentElement.style.setProperty("--cardWidth", "100%");
      } else {
        document.documentElement.style.setProperty("--cardWidth", "90%");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [data]);

  return (
    <Layout title='projects'>
      <div className='w-full mt-20'>
        <motion.div>
          <AnimatePresence initial={false}>
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:w-full w-full gap-x-4'>
              {data.map((item, index) => (
                <CardContent key={index} data={item} />
              ))}
            </div>
          </AnimatePresence>
        </motion.div>
      </div>
    </Layout>
  );
};
export default PortFoliio;

const CardContent = ({ data }: any) => {
  return (
    <motion.div
      exit='inactive'
      className='Project__Card cursor-pointer'
      animate='active'
      initial='inactive'
    >
      <motion.div className='p-5'>
        <h2 className='title'>{data.title}</h2>
        <p>{data.description}</p>
        <ul className=''>
          {data?.stacks?.map((stack: any, i: number) => (
            <li
              className='text-xs px-3 py-1 mr-1 ml-1 my-2 inline-block leading-5 items-center justify-center rounded-full bg-lightPurple text-primary'
              key={i}
            >
              {stack}
            </li>
          ))}
        </ul>
        {/* <button className='bg-primary py-2 text-sm rounded-[4px] text-white px-4 my-4'>
          Learn more
        </button> */}
      </motion.div>
    </motion.div>
  );
};

const data = [
  {
    title: "Portfolio Website (v2)",
    description: "This is a v2 build of my website",
    stacks: ["Nextjs", "Apollo GraphQL", "Tailwind", "HyGraph CMS"],
  },
];