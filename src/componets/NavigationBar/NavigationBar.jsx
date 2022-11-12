import React from 'react';

const NavigationBar = () => (
  <nav className="navigation__card">
    <div className="navigation__logo">
      <img src="https://2.bp.blogspot.com/-8zwkuaHGY1c/UTP8Y5t8c3I/AAAAAAABsHE/bFbMgPUiMKM/s1600/rosa-amarilla-im%C3%A1genes-bonitas-fotos-gratis-muy-lindas-para-compartir-en-facebook-.jpg" alt="logo" />
      <span className="text__logo">RICA</span>
    </div>
    <div className="navigation__icons">
      <div className="icon">
        <ion-icon name="menu-outline" />
      </div>
      <div className="icon">
        <ion-icon name="person-outline" />
      </div>
      <div className="icon">
        <ion-icon name="settings-outline" />
      </div>
    </div>
    <div className="navigation__menu">
      <ul>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/">HOTEL</a>
        </li>
        <li>
          <a href="/">PAGES</a>
        </li>
      </ul>
    </div>
    <div className="navigation__selects">
      <div className="navigation__options">
        <select name="currency">
          <option value="usd">USD</option>
          <option value="cop">COP</option>
        </select>
      </div>
      <div className="navigation__options">
        <select name="languaje">
          <option value="spanish">SPA</option>
          <option value="english">ENG</option>
        </select>
      </div>
      <div className="navigation__option">
        <ion-icon name="person-outline" />
      </div>
    </div>
  </nav>
);

export default NavigationBar;
