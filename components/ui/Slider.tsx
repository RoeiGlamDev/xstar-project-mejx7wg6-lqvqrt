'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const Slide = styled.div<{ active: boolean }>`
  display: ${({ active }) => (active ? 'block' : 'none')};
  transition: opacity 0.5s ease;
  opacity: ${({ active }) => (active ? 1 : 0)};
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  color: pink;
  font-size: 2rem;
`;

const PrevArrow = styled(Arrow)`
  left: 10px;
`;

const NextArrow = styled(Arrow)`
  right: 10px;
`;

const Slider: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <SliderContainer>
      {images.map((image, index) => (
        <Slide key={index} active={index === currentIndex}>
          <img src={image} alt={`Slide ${index}`} style={{ width: '100%', borderRadius: '10px' }} />
        </Slide>
      ))}
      <PrevArrow onClick={prevSlide}>&lt;</PrevArrow>
      <NextArrow onClick={nextSlide}>&gt;</NextArrow>
    </SliderContainer>
  );
};

export default Slider;