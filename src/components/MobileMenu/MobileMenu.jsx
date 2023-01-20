/* eslint-disable react/prop-types */
import './styles.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const MobileMenu = ({ menuFunction }) => (
  <div className="menu-container">
    <div className="menu__main">
      <header className="menu__header">
        <button
          className="menu__close"
          type="button"
          onClick={() => menuFunction(false)}
        >
          Back <FontAwesomeIcon icon={faChevronRight} key="back" />
        </button>
      </header>
      <div className="menu__link-container">
        <Link to="/" onClick={() => menuFunction(false)}>HOME</Link>
        <Link to="/hotels" onClick={() => menuFunction(false)}>HOTELS</Link>
      </div>
    </div>
  </div>
);

export default MobileMenu;
