import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>We would love to hear from you! Reach out to us for any queries, suggestions, or collaboration ideas.</p>

      <h3>Our Office</h3>
      <p>Institution's Innovation Council (IIC)<br /> XYZ Institute of Technology, Main Campus</p>

      <h3>Contact Details</h3>
      <p>Email: <a href="mailto:iic@example.com">iic@example.com</a></p>
      <p>Phone: +91 79 7557 1479</p>

      <h3>Follow Us</h3>
      <p>Stay connected with us on our social media channels:</p>
      <div className="social-icons">
        <a href="https://twitter.com/iic_example" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="social-icon" />
        </a>
        <a href="https://facebook.com/iic_example" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="social-icon" />
        </a>
        <a href="https://instagram.com/iic_example" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        </a>
        <a href="https://linkedin.com/iic_example" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
