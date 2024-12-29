import React, { useEffect, useState } from 'react';
import './Home.css'; // Adjust the path if the CSS file is in a different directory

const Home = () => {
  // Array of image URLs for the carousel
  const images = [
    'iic-what1.jpeg', // Replace with actual image paths
    'iic-what2.jpeg',
    'iic-what3.jpeg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="home">
      <h1>Welcome to the Institution's Innovation Council</h1>
      <p>
        We foster innovation and creativity among students, bringing together the brightest minds to work on
        impactful projects and initiatives.
      </p>

      {/* New section for "What We Do" */}
      <section className="what-we-do">
        <h2>What We Do</h2>
        <p>
          At the Institution's Innovation Council, we drive innovation through various programs, workshops, and
          competitions. We aim to inspire students to develop cutting-edge solutions for real-world problems,
          empowering them to excel in their respective fields.
        </p>
      </section>

      {/* Sliding image carousel */}
      <div className="image-carousel">
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className="carousel-image"
        />
      </div>
    </div>
  );
};

export default Home;
