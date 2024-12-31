import React, { useState, useEffect } from "react";
import "./TBI.css";

const TBI = () => {
  const images = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpg",
  ]; // Replace these paths with your image URLs

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div className="tbi">
      <h1>Technology Business Incubator (TBI)</h1>
      <p>
        Our Technology Business Incubator fosters innovation, supports
        startups, and drives impactful entrepreneurship.
      </p>

      <div className="tbi-carousel">
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className="carousel-image"
        />
      </div>

      <div className="tbi-info">
        <h2>Empowering Startups</h2>
        <p>
          We provide state-of-the-art infrastructure, expert mentorship, and
          funding opportunities to help budding entrepreneurs transform their
          ideas into successful ventures.
        </p>
        
      </div>
    </div>
  );
};

export default TBI;
