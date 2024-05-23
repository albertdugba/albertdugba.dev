import Image from "next/image";
import { BlogCard } from "./_components/BlogCard";

const Blogs = () => {
  return (
    <div className='text-4xl text-white flex flex-col justify-center min-h-[90vh] lg:p-0 px-6'>
      <div className='mt-20'>
        <h1 className="flex items-center justify-center">Coming Soon</h1>
        {/* <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'>
          <BlogCard />
        </div> */}
      </div>
    </div>
  );
};
export default Blogs;
