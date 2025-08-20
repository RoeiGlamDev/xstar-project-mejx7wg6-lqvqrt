import React from 'react';
import './PricingSection.css'; // Assuming you have a CSS file for styling

const PricingSection: React.FC = () => {
    return (
        <section className="pricing-section">
            <div className="container">
                <h2 className="section-title">Luxury Pricing</h2>
                <div className="pricing-cards">
                    <div className="pricing-card">
                        <h3 className="card-title">Basic Package</h3>
                        <p className="card-price">$49</p>
                        <p className="card-description">Includes essential cosmetics for a radiant look.</p>
                        <button className="card-button">Choose Plan</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Premium Package</h3>
                        <p className="card-price">$99</p>
                        <p className="card-description">All basic features plus exclusive products.</p>
                        <button className="card-button">Choose Plan</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Luxury Package</h3>
                        <p className="card-price">$199</p>
                        <p className="card-description">The ultimate experience with personalized services.</p>
                        <button className="card-button">Choose Plan</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;