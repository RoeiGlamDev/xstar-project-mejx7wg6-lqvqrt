import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useFadeIn = (duration: number = 1) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.from(ref.current, {
        opacity: 0,
        duration,
      });
    }
  }, [duration]);

  return ref;
};

export const useSlideIn = (duration: number = 1, direction: 'left' | 'right' = 'left') => {
  const ref = useRef<HTMLDivElement>(null);
  const xValue = direction === 'left' ? '-100%' : '100%';

  useEffect(() => {
    if (ref.current) {
      gsap.from(ref.current, {
        x: xValue,
        opacity: 0,
        duration,
      });
    }
  }, [duration, xValue]);

  return ref;
};

export const useScaleIn = (duration: number = 1) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.from(ref.current, {
        scale: 0,
        opacity: 0,
        duration,
      });
    }
  }, [duration]);

  return ref;
};

export default { useFadeIn, useSlideIn, useScaleIn };