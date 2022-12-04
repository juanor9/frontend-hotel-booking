import React from 'react';
import './StylesFilter.css';

const Filter = () => (
  <div className="filter">
    <div className="filter__select">
      <span>Filter</span><ion-icon name="caret-down-outline" />
    </div>
    <hr className="filter__divider" />
    <div className="filter__icon">
      <ion-icon name="reorder-four-outline" />
      <span className="filter__icon-text">Latest Filter</span>
    </div>

    <div className="filter-categories">
      <div className="filter-categories__butons">
        <button className="filter-categories__btn" type="button">All</button>
        <button className="filter-categories__btn" type="button">Popular</button>
        <button className="filter-categories__btn" type="button">Latest</button>
        <button className="filter-categories__btn" type="button">Trend</button>
      </div>
      <div className="select__filter-desktop">
        <ion-icon name="reorder-four-outline" />Latest Filter<span>|| ||| ||||</span>
      </div>
    </div>
  </div>
);

export default Filter;
