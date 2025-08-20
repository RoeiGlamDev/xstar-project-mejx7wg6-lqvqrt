import React from 'react';
import styled from 'styled-components';

const ParallaxContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(to bottom, rgba(255, 192, 203, 0.7), rgba(255, 255, 255, 0.7));
`;

const ParallaxContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  z-index: 1;
`;

const BackgroundImage = styled.div<{ bgImage: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  transform: translateZ(0);
  will-change: transform;
  z-index: 0;
`;

interface ParallaxSectionProps {
  bgImage: string;
  children: React.ReactNode;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ bgImage, children }) => {
  return (
    <ParallaxContainer>
      <BackgroundImage bgImage={bgImage} />
      <ParallaxContent>{children}</ParallaxContent>
    </ParallaxContainer>
  );
};

export default ParallaxSection;