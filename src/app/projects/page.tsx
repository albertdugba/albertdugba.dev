import Image from "next/image";
import { Title } from "~/components/title";

const Card = ({ url }: { url: string }) => {
  return (
    <div className='bg-white text-primary rounded-xl p-6 md:w-[320px] w-full'>
      <div className='relative h-[200px] flex items-center justify-center'>
        <Image
          src={url}
          alt=''
          fill
          className='object-contain w-full h-full rounded-xl'
        />
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  return (
    <div>
      <div className='h-screen w-full items-center justify-center lg:py-24 md:py-16 py-14'>
        <Title
          title='Works'
          subtitle='Brands and companies I have worked with'
          align='center'
        />

        <div className='flex items-center justify-center'>
          <div className='grid grid-cols-3 gap-7'>
            <Card url='/projects/lwd-logo.webp' />
            <Card url='/projects/lwd-logo.webp' />
            <Card url='/projects/lwd-logo.webp' />
            <Card url='/projects/lwd-logo.webp' />
            <Card url='/projects/lwd-logo.webp' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectsPage;
