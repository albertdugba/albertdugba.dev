import { Logo } from "~/icons/logo";

interface TimelineItemProps {
  date: string;
  title: string;
  content: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  content,
}) => {
  return (
    <div className='relative'>
      <div className='text-sm text-gray-500 absolute top-0 left-[-80px]'>
        <Logo />
      </div>
      <div className='ml-8 border-l border-gray-400 pl-4'>
        <h3 className='text-lg font-medium mb-1'>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};
