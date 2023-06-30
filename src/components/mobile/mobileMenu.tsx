import { GithubIcon } from "~/icons/github";
import { LinkedInIcon } from "~/icons/linkedin";
import { TwitterIcon } from "~/icons/twitter";
import { INavLinkProps } from "src/types/global";
import Link from "next/link";
import { useRouter } from "next/router";

export const MobileMenu = ({ navLinks }: { navLinks: INavLinkProps[] }) => {
  const router = useRouter();

  const handleClickLink = (link: string) => {
    document.documentElement.style.overflow = "auto";
    router.push(link);
  };

  return (
    <div className='fixed right-0 h-full w-full top-0 z-10 bg-white'>
      <div className='flex flex-col items-cer mt-40 w-[90%] mx-auto px-2'>
        {navLinks.map((link, index) => (
          <li
            className='relative text-lg my-4 font-normal text gap-10 text text-left list-none'
            key={index}
          >
            <Link
              href={link.url}
              onClick={() => handleClickLink(link.url)}
              className='relative'
            >
              {link.title}
              {router.asPath === link.url && <div className='Nav__link' />}
            </Link>
          </li>
        ))}
      </div>

      <ul className='flex flex-col items-cer w-[90%] mt-10 mx-auto px-2'>
        <li className='my-4 text-xl text-gray-500 uppercase font-light leading-9'>
          Say Hello
        </li>
        <li className='my-4 text-primary text-lg'>albert.dugba@gmail.com</li>
      </ul>

      <ul className='flex justify-start gap-x-10 w-[90%] mt-10 mx-auto px-2'>
        {MY_PROFILE_INFO.contact.map((data, i) => (
          <li key={i} className='my-3'>
            {data.icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

const MY_PROFILE_INFO = {
  contact: [
    {
      icon: <GithubIcon size='2rem' />,
      link: "",
    },
    {
      icon: <LinkedInIcon size='2rem' />,
      link: "",
    },
    {
      icon: <TwitterIcon size='2rem' />,
      link: "",
    },
  ],
};
