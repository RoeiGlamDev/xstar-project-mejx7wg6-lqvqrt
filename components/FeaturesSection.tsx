import React from 'react';
import './FeaturesSection.css'; // Assuming a CSS file for styles

const features = [
  {
    title: 'Luxury Ingredients',
    description: 'Our cosmetics are formulated with the finest ingredients for a flawless finish.',
  },
  {
    title: 'Elegant Packaging',
    description: 'Each product is beautifully packaged, making it a perfect gift for yourself or loved ones.',
  },
  {
    title: 'Cruelty-Free',
    description: 'We are committed to ethical practices and never test on animals.',
  },
  {
    title: 'Exclusive Collections',
    description: 'Discover limited edition collections that embody elegance and sophistication.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">Our Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;