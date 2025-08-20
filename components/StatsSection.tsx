import React from 'react';
import './StatsSection.css'; // Importing CSS for styling

const StatsSection: React.FC = () => {
  return (
    <section className="stats-section">
      <div className="stat-item">
        <h2 className="stat-number">10K+</h2>
        <p className="stat-description">Happy Customers</p>
      </div>
      <div className="stat-item">
        <h2 className="stat-number">500+</h2>
        <p className="stat-description">Luxury Products</p>
      </div>
      <div className="stat-item">
        <h2 className="stat-number">20+</h2>
        <p className="stat-description">Global Awards</p>
      </div>
      <div className="stat-item">
        <h2 className="stat-number">15</h2>
        <p className="stat-description">Years of Experience</p>
      </div>
    </section>
  );
};

export default StatsSection;