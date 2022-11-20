import React from 'react';
import './StylesGrid.css';

const HotelsGrid = () => (
  <section className="hotel__card">
    <div className="hotel__grid">
      <div className="component__card">
        <p>HERE IS A COMPONENT</p>
      </div>
    </div>
    <div className="butons_card">
      <button type="submit">{'<<'}</button>
      <button type="submit">1</button>
      <button type="submit">2</button>
      <button type="submit">3</button>
      <button type="submit">{'>>'}</button>
    </div>
  </section>
);

export default HotelsGrid;
