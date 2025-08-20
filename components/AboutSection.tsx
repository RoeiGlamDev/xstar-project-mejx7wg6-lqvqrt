import React from 'react';
import './AboutSection.css'; // Importing CSS for styling

const AboutSection: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <h1 className="about-title">About Us</h1>
                <p className="about-description">
                    Welcome to FashionTV Cosmetics, where luxury meets elegance. Our products are crafted with the finest ingredients to enhance your natural beauty and provide a touch of glamour to your everyday routine.
                </p>
                <p className="about-description">
                    Discover our exclusive range of cosmetics designed for the modern, sophisticated individual who values quality and style.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;