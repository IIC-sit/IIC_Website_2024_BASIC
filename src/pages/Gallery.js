import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Gallery.css';
import { getAllGalleryImages } from '../services/driveService';

const Gallery = () => {
  const [images, setImages] = useState({
    sessions: [],
    hackathons: [],
    workshops: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const allImages = await getAllGalleryImages();
        console.log('Fetched images:', allImages); // Debug log
        setImages(allImages);
      } catch (err) {
        setError('Failed to load images. Please try again later.');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  if (loading) {
    return (
      <div className="gallery-container">
        <div className="loading">Loading gallery...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="gallery-container">
        <div className="error">{error}</div>
      </div>
    );
  }

  const renderGallerySection = (title, imageList) => {
    if (!imageList || imageList.length === 0) return null;

    return (
      <section className="gallery-section">
        <h2>{title}</h2>
        <Slider {...sliderSettings}>
          {imageList.map((image) => (
            <div key={image.id} className="gallery-slide">
              <div className="gallery-item">
                <iframe
                  src={image.url}
                  title={image.title}
                  width="100%"
                  height="250"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </Slider>
      </section>
    );
  };

  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      {renderGallerySection('Sessions', images.sessions)}
      {renderGallerySection('Hackathons', images.hackathons)}
      {renderGallerySection('Workshops', images.workshops)}
    </div>
  );
};

export default Gallery;
