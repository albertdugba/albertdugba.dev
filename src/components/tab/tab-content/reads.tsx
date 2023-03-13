import Image from "next/image";
import { books } from "src/mocks/books";

export const MyReads = () => {
  return (
    <>
      <h1 className='text-primary font-bold'>
        Currently , here is a list of all the books that Im reading
      </h1>
      {books.map((book) => (
        <div key={book.id} className='flex gap-1 w-full relative mt-4'>
          <div className='h-20 w-20 relative'>
            <Image
              src={book.image}
              fill
              alt={book.title}
              className='object-contain'
            />
          </div>

          <div>
            <a
              className='hover:underline transition-all'
              href={book.link}
              target='_blank'
              rel='noreferrer'
            >
              <h1 className='text-primary'>{book.title}</h1>
            </a>
            <em className='text-gray-400 text-sm'>By {book.author}</em>
          </div>
        </div>
      ))}
    </>
  );
};
