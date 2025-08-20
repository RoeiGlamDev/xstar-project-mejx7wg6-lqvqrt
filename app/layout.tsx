import React from 'react';
import './layout.css'; // Import custom CSS for styling

const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout-container">
      <header className="header">
        <h1 className="logo">FashionTV Cosmetics</h1>
      </header>
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} FashionTV Cosmetics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;