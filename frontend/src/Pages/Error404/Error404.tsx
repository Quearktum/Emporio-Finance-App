import React from 'react';
import { Link } from 'react-router-dom';
import './Error404.css';

const Error404 = () => {
  return (
    <div className="error-404-container">
      <div className="error-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for doesn't exist or has been moved.</p>
        <div className="error-actions">
          <Link to="/" className="home-button">
            Go to Homepage
          </Link>
          <Link to="/search" className="search-button">
            Search Companies
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;