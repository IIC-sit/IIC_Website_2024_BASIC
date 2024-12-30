import React from 'react';
import logo from '../logo_removedbg.png';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <img src={logo} alt="Logo" className="logo" />
      <div className="dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
