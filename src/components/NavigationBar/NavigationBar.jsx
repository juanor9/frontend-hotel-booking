import './styles.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import logo from '../../assets/logo-rica.png';

const NavigationBar = () => {
  const userToken = localStorage.getItem('login-token');
  const [userRole, SetUserRole] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (userToken) {
      const { role } = JSON.parse(localStorage.getItem('user'));
      SetUserRole(role);
    }
  }, [userToken, userRole]);
  return (
    <nav className="navigation__card">
      <div className="navigation__logo">
        <img className="navigation__logo-img" src={logo} alt="logo" />
        <span className="nav__text-logo">RICA</span>
      </div>
      <div className="navigation__icons-cont">
        <div className="navigation__icon">
          <Link to="/">
            <FontAwesomeIcon icon={faBars} key="menu" />
          </Link>
        </div>
        <div className="navigation__icon">
          {userToken ? (
            <Link to="/profile">
              <FontAwesomeIcon icon={faUser} key="profile" />
            </Link>
          ) : (
            <Link to="/register">
              <FontAwesomeIcon icon={faUser} key="sign up" />
            </Link>
          )}
        </div>

        {userToken ? (
          <button
            type="button"
            className="navigation__icon"
            onClick={() => {
              localStorage.clear();
              navigate('/');
            }}
          >
            <FontAwesomeIcon icon={faPowerOff} key="log-out" />
          </button>
        ) : null}
      </div>
      <div className="navigation__menu">
        <ul>
          <li className="navigation__menu-li">
            <Link className="navigation__text" to="/">
              HOME
            </Link>
          </li>
          <li className="navigation__menu-li">
            <Link className="navigation__text" to="/hotels">
              HOTELS
            </Link>
          </li>
        </ul>
      </div>
      <div className="navigation__selects">
        <div className="navigation__option">
          {userToken ? (
            <Link className="navigation__text-icon" to="/profile">
              <FontAwesomeIcon icon={faUser} key="profile" />
            </Link>
          ) : (
            <Link className="navigation__text-icon" to="/register">
              <FontAwesomeIcon icon={faUser} key="sign up" />
            </Link>
          )}
        </div>
        <div className="navigation__option">
          {userToken ? (
            <button
              type="button"
              className="navigation__text-icon"
              onClick={() => {
                localStorage.clear();
                navigate('/');
              }}
            >
              <FontAwesomeIcon icon={faPowerOff} key="logut" />
            </button>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
