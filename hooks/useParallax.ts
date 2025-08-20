import { useEffect, useState } from 'react';

const useParallax = (ref: React.RefObject<HTMLElement>, speed: number) => {
  const [offset, setOffset] = useState(0);

  const handleScroll = () => {
    if (ref.current) {
      const scrollPosition = window.scrollY;
      setOffset(scrollPosition * speed);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return offset; // return the calculated offset
};

export default useParallax;