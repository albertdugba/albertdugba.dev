import { FC, ReactNode, useState } from "react";
import { motion } from "framer-motion";

interface BlogLayoutProps {
  children: ReactNode;
  title: string;
}

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const variants = {
    open: {
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        ease: "easeInOut",
        duration: 0.3,
      },
    },
  };

  return (
    <motion.nav
      variants={variants}
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      {/* Add your sidebar content here */}
      <motion.nav
        variants={variants}
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </motion.nav>
    </motion.nav>
  );
};

export default Sidebar;

export const BlogLayout: FC<BlogLayoutProps> = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='tech-bg relative'>
        <div className='flex flex-col items-center justify-center h-full'>
          <h1 className='text-white text-6xl'>
            <span className='text-gray-300 mr-1'>/</span>
            {title}
          </h1>
        </div>
        <div className='absolute top-10 right-10'>
          <div className='max-w-6xl mx-auto'>
            <button onClick={toggleSidebar}>Toggle Sidebar</button>

            {/* Render the sidebar component */}
            <Sidebar isOpen={isOpen} />
          </div>
        </div>

        <main>{children}</main>
      </div>
    </>
  );
};

const navLinks = [
  {
    title: "About me",
    url: "/about",
  },
  {
    title: "Works",
    url: "/works",
  },
  {
    title: "Blog",
    url: "/blogs",
  },
];
