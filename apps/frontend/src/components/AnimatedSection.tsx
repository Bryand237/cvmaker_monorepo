import { useInViewport } from "@/hooks/useInViewport";
import { useAnimation, useReducedMotion, motion } from "framer-motion";
import { useEffect } from "react";

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { ref, inView } = useInViewport(0.33);
  const controls = useAnimation();
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      // Respect user prefs: show content without animation
      controls.set("visible");
      return;
    }

    if (inView) {
      // entrer dans le viewport -> animation d'entrée
      controls.start("visible");
    } else {
      // sortir du viewport -> jouer l'animation de sortie (retour à hidden)
      controls.start("hidden");
    }
  }, [inView, controls, reduce]);

  return (
    <motion.section
      ref={ref as any}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
