import { Overpass } from "next/font/google";

const overPass = Overpass({ subsets: ["latin"] });

export const Title = ({ title }: { title: string }) => (
  <div className='flex gap-2 mb-6'>
    <h1
      className={`lg:text-6xl md:text-5xl text-3xl text-secondary ${overPass.className}`}
    >
      <span>{title}</span> {"  "}
    </h1>
  </div>
);
