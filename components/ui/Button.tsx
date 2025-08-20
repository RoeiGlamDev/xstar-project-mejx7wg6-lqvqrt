import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #f8c8d0; // Light pink background
  color: white; // White text color
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f1a7b8; // Darker pink on hover
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 192, 203, 0.5); // Focus ring
  }
`;

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;