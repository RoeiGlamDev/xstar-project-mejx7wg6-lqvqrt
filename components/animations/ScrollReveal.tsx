'use client';

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealAnimation: React.FC = ({ children }) => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom', // Animation starts from the bottom
      distance: '50px', // Distance of the reveal
      duration: 1000, // Duration of the animation
      delay: 200, // Delay between animations
      easing: 'ease-in-out', // Easing function
      opacity: 0, // Initial opacity
      scale: 0.9, // Initial scale
    });

    sr.reveal('.scroll-reveal', { interval: 200 }); // Reveal elements with the class

    return () => {
      sr.destroy(); // Cleanup on unmount
    };
  }, []);

  return <div className="scroll-reveal">{children}</div>; // Wrap children with scroll-reveal class
};

export default ScrollRevealAnimation;