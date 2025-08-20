import React from 'react';

const README: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <h1 style={{ color: '#d5006d' }}>Luxury FashionTV Cosmetics</h1>
      <h2 style={{ color: '#d5006d' }}>Overview</h2>
      <p>
        Welcome to the Luxury FashionTV cosmetics website! This project aims to create an elegant and high-end online presence for our luxury cosmetics brand.
      </p>
      
      <h2 style={{ color: '#d5006d' }}>Design</h2>
      <p>
        The website features a sophisticated design with a pink and white color scheme, embodying luxury and elegance.
      </p>

      <h2 style={{ color: '#d5006d' }}>Features</h2>
      <ul>
        <li>Responsive design for all devices</li>
        <li>High-quality product images</li>
        <li>User-friendly navigation</li>
        <li>Secure checkout process</li>
      </ul>

      <h2 style={{ color: '#d5006d' }}>Installation</h2>
      <p>
        To get started with the project, clone the repository and install the dependencies:
      </p>
      <pre>
        <code>
          git clone <span style={{ color: '#d5006d' }}>"<repository-url>"</span>
          cd <span style={{ color: '#d5006d' }}>"<repository-name>"</span>
          npm install
        </code>
      </pre>

      <h2 style={{ color: '#d5006d' }}>Usage</h2>
      <p>
        After installation, you can run the development server using:
      </p>
      <pre>
        <code>
          npm start
        </code>
      </pre>

      <h2 style={{ color: '#d5006d' }}>Contributing</h2>
      <p>
        We welcome contributions to enhance the website. Please fork the repository and submit a pull request.
      </p>

      <h2 style={{ color: '#d5006d' }}>License</h2>
      <p>
        This project is licensed under the MIT License.
      </p>
    </div>
  );
};

export default README;