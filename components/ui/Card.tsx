import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: white; // white background for elegance
  border: 1px solid #f1c1d1; // soft pink border
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05); // subtle zoom effect on hover
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h3`
  color: #d5006d; // pink color for title
  margin: 0 0 8px;
`;

const CardDescription = styled.p`
  color: #333; // dark text for readability
  margin: 0;
`;

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <CardContainer>
      <CardImage src={image} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </CardContainer>
  );
};

export default Card;