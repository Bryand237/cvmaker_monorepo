import { useEffect, useRef, useState } from "react";

export function useInViewport(threshold = 0.33, root: Element | null = null) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // set inView true when intersectionRatio >= threshold, false otherwise
          setInView(
            entry.isIntersecting && entry.intersectionRatio >= threshold
          );
        }
      },
      { threshold, root }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // note: threshold and root are valid dependencies
  }, [threshold, root]);

  return { ref, inView } as const;
}
