/* eslint-disable semi */
import React from 'react';

const SliderNav = () => (
  <div className="slider__nav">
    <div className="slider__title">
      <h2>REVIEW</h2>
    </div>
    <ul className="slider__ul">
      <li><a href="/">Home</a></li>
      &nbsp;
      <span className="slider__span">{'>>'}</span>
      &nbsp;
      <li><a href="/">Hotels</a></li>
      &nbsp;
      <span className="slider__span">{'>>'}</span>
      &nbsp;
      <li><a href="/">Review</a></li>
    </ul>
  </div>
)

export default SliderNav;
