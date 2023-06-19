import { ReactNode } from "react";
import { motion } from "framer-motion";
import cn from "classnames";
import { useCompanyStore } from "src/store";

export const FeaturedCard = ({
  gradient,
  children,
  id,
}: {
  gradient: string;
  children: ReactNode;
  id: string;
}) => {
  const state = useCompanyStore((state) => state.inViewCompany);
  return (
    <motion.div
      className={cn(
        "lg:absolute lg:inset-0 fixed lg:w-full lg:h-full h-[300px] w-[90%] right-2 left-4 bottom-10 bg-gradient-to-br p-10 rounded-2xl transition-opacity",
        gradient,
        state === id ? "opacity-100" : "opacity-0"
      )}
    >
      {children}
    </motion.div>
  );
};
