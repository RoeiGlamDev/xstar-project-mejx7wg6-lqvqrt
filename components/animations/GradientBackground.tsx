import React from 'react';
import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const GradientBackgroundContainer = styled.div`
  height: 100vh; // Full height
  width: 100%; // Full width
  background: linear-gradient(270deg, #f8c8d1, #ffffff); // Pink to white gradient
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite; // Animation for smooth transition
  position: absolute; // Positioning
  top: 0; // Align to top
  left: 0; // Align to left
  z-index: -1; // Behind other components
`;

const GradientBackground: React.FC = () => {
  return <GradientBackgroundContainer />; // Render the gradient background
};

export default GradientBackground;