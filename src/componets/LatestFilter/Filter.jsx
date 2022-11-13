import React from 'react';

const Filter = () => (
  <div className="card__filter">
    <div className="select__filter">
      <span>Filter</span><ion-icon name="caret-down-outline" />
    </div>
    <hr />
    <div className="icon__filter">
      <ion-icon name="reorder-four-outline" />
      <span className="icon__text">Latest Filter</span>
    </div>

    <div className="card__descktop">
      <div className="card__butons">
        <button className="card__btn" type="button">All</button>
        <button className="card__btn" type="button">Popular</button>
        <button className="card__btn" type="button">Latest</button>
        <button className="card__btn" type="button">Trend</button>
      </div>
      <div className="select__filter_descktop">
        <ion-icon name="reorder-four-outline" />Latest Filter<span>|| ||| ||||</span>
      </div>
    </div>
  </div>
);

export default Filter;
