import { motion, useAnimation } from "framer-motion";

interface Props {
  openNav: (value: boolean) => void;
  closeNav: (value: boolean) => void;
  isOpen: boolean;
}
export const HamburgerMenuButton = ({ openNav, closeNav, isOpen }: Props) => {
  const path01Controls = useAnimation();
  const path02Controls = useAnimation();

  const path01Variants = {
    open: { d: "M3.06061 2.99999L21.0606 21" },
    closed: { d: "M0 9.5L24 9.5" },
  };

  const path02Variants = {
    open: { d: "M3.00006 21.0607L21 3.06064" },
    moving: { d: "M0 14.5L24 14.5" },
    closed: { d: "M0 14.5L15 14.5" },
  };

  const handleClick = async () => {
    openNav(true);
    if (!isOpen) {
      openNav(true);
      await path02Controls.start(path02Variants.moving);
      path01Controls.start(path01Variants.open);
      path02Controls.start(path02Variants.open);
    } else {
      closeNav(true);
      path01Controls.start(path01Variants.closed);
      await path02Controls.start(path02Variants.moving);
      path02Controls.start(path02Variants.closed);
    }
  };

  return (
    <button onClick={handleClick} className='z-[9999]'>
      <svg width='1.9rem' height='1.9rem' viewBox='0 0 24 24'>
        <motion.path
          {...path01Variants.closed}
          animate={path01Controls}
          transition={{ duration: 0.2 }}
          stroke='var(--primaryColor)'
          strokeWidth={1.3}
        />

        <motion.path
          {...path02Variants.closed}
          animate={path02Controls}
          transition={{ duration: 0.2 }}
          stroke='var(--primaryColor)'
          strokeWidth={1.3}
        />
      </svg>
    </button>
  );
};
