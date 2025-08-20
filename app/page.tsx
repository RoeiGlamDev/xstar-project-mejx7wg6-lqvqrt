import React from 'react';
import './styles.css'; // Importing custom styles

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1 className="logo">FashionTV Cosmetics</h1>
      </header>
      <main className="main-content">
        <section className="hero">
          <h2 className="hero-title">Elevate Your Beauty</h2>
          <p className="hero-subtitle">Luxury cosmetics for the modern woman</p>
        </section>
        <section className="products">
          <h3 className="products-title">Our Collection</h3>
          <div className="product-list">
            {/* Example product item */}
            <div className="product-item">
              <img src="/path/to/product1.jpg" alt="Product 1" />
              <h4 className="product-name">Luxury Lipstick</h4>
              <p className="product-price">$30</p>
            </div>
            {/* More product items can be added here */}
          </div>
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">© 2023 FashionTV Cosmetics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;