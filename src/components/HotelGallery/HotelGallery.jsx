/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './style.css';
import React, { useState } from 'react';

const HotelGallery = (props) => {
  const {
    images,
  } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <section id="hotel-images" className="hotel-images">
      <div className="image-slider">
        <figure>
          <img src={images[currentIndex]} alt="" />
        </figure>
        <div className="image-slider__buttons">
          <button type="button" onClick={() => setCurrentIndex(currentIndex - 1)}>Previous</button>
          <button type="button" onClick={() => setCurrentIndex(currentIndex + 1)}>Next</button>
        </div>
      </div>
    </section>
  );
};
export default HotelGallery;
