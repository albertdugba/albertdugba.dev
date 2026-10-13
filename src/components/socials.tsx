import { FaGithub, FaLinkedinIn, FaMedium, FaXTwitter } from "react-icons/fa6";
import { DashedRing } from "./layout/lines";

const SOCIAL_LINKS = [
  { icon: FaLinkedinIn, href: "https://linkedin.com/in/albertdugba", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/albertdugba", label: "GitHub" },
  { icon: FaXTwitter, href: "https://twitter.com/albertdugba__", label: "X" },
  { icon: FaMedium, href: "https://medium.com/@albert.dugba", label: "Medium" },
];

/** Social links in dashed rings. `size="lg"` for the hero, default for the footer. */
export function Socials({ size = "md", className = "" }: { size?: "md" | "lg"; className?: string }) {
  const ring = size === "lg" ? "size-12" : "size-11";
  const icon = size === "lg" ? 18 : 16;

  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {SOCIAL_LINKS.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={link.label}
            className={`group relative flex ${ring} items-center justify-center rounded-full transition-colors duration-200 hover:bg-lightest-gray`}
          >
            <DashedRing className='text-light-gray' />
            <link.icon
              aria-hidden='true'
              style={{ width: icon, height: icon }}
              className='text-gray transition-colors group-hover:text-lighter-gray'
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
