import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { animate, motion } from "framer-motion";
import Albert from "../../../public/assets/albertdugba.webp";

export const PageLoader = () => {
  const [progress, setProgress] = useState(0);
  const [newValue, setValue] = useState<number | undefined>();
  const progressTextRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (progressTextRef.current !== null) {
      animate(0, progress, {
        duration: 2,
        onUpdate: (currentValue) => {
          setValue(Number(currentValue?.toFixed(0)));
        },
      });
    }
  }, [progress]);

  useEffect(() => {
    const timerId = setInterval(() => {
      setProgress(Math.random() * 100);
    }, 500);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className='bg-black h-screen w-screen overflow-hidden'>
      <div className='flex items-center justify-center w-full h-screen loaderBg overflow-hidden bg-gradient-to-r from-[#ebb2d8] to-[#f9f7f9]'>
        <div className='-rotate-12 hover:rotate-0 transition-all'>
          <Image
            src={Albert}
            height={200}
            width={120}
            alt='Albert Dugba'
            className='rounded-lg shadow-lg'
          />
        </div>
      </div>
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 4, stiffness: 18 }}
        className='text-white w-[10%] h-[30%] absolute bottom-0 left-0'
      >
        <div className='bg-white font-cinzel h-full w-full text-6xl text-black flex items-center justify-center'>
          <p ref={progressTextRef}>{`${Math.round(Number(newValue))}`}</p>
          {progress > 0 ? <p>%</p> : null}
        </div>
      </motion.div>
    </div>
  );
};
