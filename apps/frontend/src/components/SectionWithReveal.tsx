import { motion, useReducedMotion, type Variants } from "framer-motion";

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

type Props = {
  children: React.ReactNode;
  className?: string;
};

const SectionWithReveal = ({ className = "", children }: Props) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <section className={className}>{children}</section>;
  }
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.33, once: true }} // déclenche quand 33% visible, et une seule fois
      variants={variants}
    >
      {children}
    </motion.section>
  );
};

export default SectionWithReveal;
