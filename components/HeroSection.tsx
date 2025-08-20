import React from 'react';
import './HeroSection.css'; // Import CSS for styling

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Luxury FashionTV Cosmetics</h1>
        <p className="hero-subtitle">Elevate Your Beauty Experience</p>
        <button className="hero-button">Shop Now</button>
      </div>
    </div>
  );
};

export default HeroSection;