import './styles.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-rica.png';

const NavigationBar = () => (
  <nav className="navigation__card">
    <div className="navigation__logo">
      <img src={logo} alt="logo" />
      <span className="nav__text-logo">RICA</span>
    </div>
    <div className="navigation__icons-cont">
      <div className="navigation__icon">
        <Link to="/"><ion-icon name="menu-outline" /></Link>
      </div>
      <div className="navigation__icon">
        <Link to="/"><ion-icon name="person-outline" /></Link>
      </div>
      <div className="navigation__icon">
        <Link to="/"><ion-icon name="settings-outline" /></Link>
      </div>
    </div>
    <div className="navigation__menu">
      <ul>
        <li className="navigation__menu-li">
          <Link className="navigation__text" to="/">HOME</Link>
        </li>
        <li className="navigation__menu-li">
          <Link className="navigation__text" to="/hotels">HOTEL</Link>
        </li>
        <li className="navigation__menu-li">
          <Link className="navigation__text" to="/">PAGES</Link>
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
        <Link className="navigation__text-icon" to="/"><ion-icon name="person-outline" /></Link>
      </div>
    </div>
  </nav>
);

export default NavigationBar;
