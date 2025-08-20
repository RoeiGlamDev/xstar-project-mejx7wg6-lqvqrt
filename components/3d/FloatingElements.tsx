import React from 'react';
import styled from 'styled-components';

const FloatingContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // Full viewport height
  background-color: #fff; // White background
`;

const FloatingElement = styled.div`
  position: absolute;
  width: 150px; // Width of the floating element
  height: 150px; // Height of the floating element
  background-color: #ff69b4; // Pink color
  border-radius: 50%; // Circular shape
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); // Subtle shadow
  animation: float 6s ease-in-out infinite; // Floating animation

  @keyframes float {
    0%, 100% {
      transform: translatey(0); // Start and end position
    }
    50% {
      transform: translatey(-20px); // Floating effect
    }
  }
`;

const FloatingElements: React.FC = () => {
  return (
    <FloatingContainer>
      <FloatingElement style={{ left: '10%', top: '20%' }} />
      <FloatingElement style={{ right: '15%', top: '30%' }} />
      <FloatingElement style={{ left: '50%', top: '50%' }} />
      <FloatingElement style={{ right: '20%', bottom: '10%' }} />
    </FloatingContainer>
  );
};

export default FloatingElements;