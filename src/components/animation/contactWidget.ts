const contactContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transform: `translateY(-0%)`,
    transition: {
      staggerChildren: 0.1,
      damping: 300,
      type: 'ease',
    },
  },
};

const contactItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export { contactContainer, contactItem };
