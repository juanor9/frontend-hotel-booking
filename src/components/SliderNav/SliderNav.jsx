import './styles.css';
import React from 'react';
import { Link } from 'react-router-dom';

const SliderNav = () => (
  <div className="slider__nav">
    <div className="slider__title">
      <h2>REVIEW</h2>
    </div>
    <ul className="slider__ul">
      <li className="slider__li">
        <Link className="slider__a" to="/">HOME</Link>
      </li>
      &nbsp;
      <span className="slider__span">{'>>'}</span>
      &nbsp;
      <li className="slider__li">
        <Link className="slider__a" to="/hotels">HOTEL</Link>
      </li>
      &nbsp;
      <span className="slider__span">{'>>'}</span>
      &nbsp;
      <li className="slider__li">
        <Link className="slider__a" to="/">PAGES</Link>
      </li>
    </ul>
  </div>
);

export default SliderNav;
