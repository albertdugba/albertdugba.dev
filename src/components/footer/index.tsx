import { GithubIcon } from "~/icons/github";
import { LinkedInIcon } from "~/icons/linkedin";
import { TwitterIcon } from "~/icons/twitter";

export function Footer() {
  return (
    <footer className='flex items-center justify-center gap-3 flex-wrap my-8'>
      <div className='w-full h-[1px] bg-gray-300 max-w-6xl lg:mx-auto mx-0' />
      <ul className='lg:w-full my-6 max-w-6xl mx-auto flex lg:flex-row flex-col  px-1 w-[90%] gap-x-6 justify-between'>
        <div className='flex items-center gap-x-2'>
          <span className='text-xl'>&copy;</span>
          <span> Albert Dugba {new Date().getFullYear()}</span>
        </div>
        <div className='flex gap-x-6 lg:my-0 my-5'>
          {socialLinks.map((link) => (
            <li key={link.url}>
              <a href={link.url} rel='noreferrer' target='_blank'>
                {link.icon}
              </a>
            </li>
          ))}
        </div>
      </ul>
    </footer>
  );
}

const socialLinks = [
  {
    url: "https://gitub.com/albertdugba",
    icon: <GithubIcon />,
  },
  {
    url: "https://linkedin.com/in/albertdugba",
    icon: <LinkedInIcon />,
  },
  {
    url: "https://twitter.com/albertdugba__",
    icon: <TwitterIcon />,
  },
];
