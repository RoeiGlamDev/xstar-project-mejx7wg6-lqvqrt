import { useEffect, useState } from 'react';

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // Get current scroll position
    const windowHeight = window.innerHeight; // Get window height

    // Check if the element is in the viewport
    if (scrollPosition > windowHeight / 2) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Add scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up listener on unmount
    };
  }, []);

  return isVisible; // Return visibility state
};

export default useScrollAnimation;