import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>We would love to hear from you! Reach out to us for any queries, suggestions, or collaboration ideas.</p>

      <h3>Our Office</h3>
      <p>Institution's Innovation Council (IIC)<br /> Siddaganga Institute of Technology, Main Campus</p>

      <h3>Contact Details</h3>
      <p>Harsh: <a href="tel:+917483585400">7483585400</a></p>
      <p>Harika: <a href="tel:+919945089412">9945089412</a></p>
      <p>Email: <a href="mailto:iic.sit19@gmail.com">iic.sit19@gmail.com</a></p>

      <h3>Follow Us</h3>
      <p>Stay connected with us on our social media channels:</p>
      <div className="social-icons">
        <a href="https://www.instagram.com/sit_iic/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/company/institution-s-innovation-council-iic-sit/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
        </a>
        <a href="https://github.com/Institution-s-Innovation-Council-SIT" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
