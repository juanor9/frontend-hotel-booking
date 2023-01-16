/* eslint-disable react/prop-types */
import './style.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const HotelGallery = (props) => {
  const {
    images,
  } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <section id="hotel-images" className="hotel-images">
      <div className="hotel-images__slider">
        <figure className="hotel-images__figure">
          <img className="hotel-images__image" src={images[currentIndex]} alt="" />
        </figure>
        <div className="hotel-images__buttons">
          {currentIndex > 0
            ? (
              <button
                type="button"
                className="hotel-images__button-prev"
                onClick={
                () => setCurrentIndex(currentIndex - 1)
                }
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            )
            : null}
          {currentIndex < images.length - 1
            ? (
              <button
                type="button"
                className="hotel-images__button-next"
                onClick={
                () => setCurrentIndex(currentIndex + 1)
                }
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            )
            : null}

        </div>
      </div>
    </section>
  );
};
export default HotelGallery;
