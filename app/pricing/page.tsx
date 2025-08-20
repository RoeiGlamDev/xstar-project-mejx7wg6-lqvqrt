import React from 'react';
import './PricingPage.css'; // Importing CSS for styling

const PricingPage: React.FC = () => {
    return (
        <div className="pricing-page">
            <header className="header">
                <h1 className="title">Luxury FashionTV Cosmetics</h1>
                <p className="subtitle">Elevate your beauty with our exclusive products</p>
            </header>
            <section className="pricing-section">
                <h2 className="section-title">Our Pricing Plans</h2>
                <div className="pricing-cards">
                    <div className="card">
                        <h3 className="card-title">Basic Plan</h3>
                        <p className="card-price">$29.99</p>
                        <p className="card-description">Includes essential cosmetics for everyday use.</p>
                        <button className="card-button">Choose Plan</button>
                    </div>
                    <div className="card">
                        <h3 className="card-title">Premium Plan</h3>
                        <p className="card-price">$59.99</p>
                        <p className="card-description">All basic features plus exclusive products.</p>
                        <button className="card-button">Choose Plan</button>
                    </div>
                    <div className="card">
                        <h3 className="card-title">Luxury Plan</h3>
                        <p className="card-price">$99.99</p>
                        <p className="card-description">The ultimate beauty experience with personalized services.</p>
                        <button className="card-button">Choose Plan</button>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p className="footer-text">© 2023 Luxury FashionTV Cosmetics. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default PricingPage;