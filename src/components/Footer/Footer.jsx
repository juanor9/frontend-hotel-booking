import { Link } from 'react-router-dom';
import NewsList from '../NewsList/NewsList';
import logo from '../../assets/logo-rica.png';
import './styles.css';

const Footer = () => (
  <footer>
    <div className="footer__card footer__card--1">
      <div className="footer__card-title footer__card-title--desktop">
        <h3>Contact Us</h3>
      </div>
      <div className="footer__logo">
        <img className="footer__card--img" src={logo} alt="logo" />
        <span className="footer__text--logo">RICA</span>
      </div>
      <p className="footer__card--paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique doloribus doloribus...
      </p>
      <p className="footer__card--link"><ion-icon name="location-outline" /><Link className="footer__link" to="/">A-32, Albany,Newyork</Link></p>
      <p className="footer__card--link"><ion-icon name="call-outline" /><Link className="footer__link" to="/">518 - 457 - 5181</Link></p>
      <p className="footer__card--link"><ion-icon name="mail-outline" /><Link className="footer__link" to="/">Contact@Gmail.com</Link></p>
    </div>
    <div className="footer__card footer__card--2">
      <div className="footer__card-title">
        <h3>Uself Links</h3>
      </div>
      <Link className="footer__link" to="/">Home</Link>
      <Link className="footer__link" to="/">Our Vehical</Link>
      <Link className="footer__link" to="/">Latest Video</Link>
      <Link className="footer__link" to="/">Services</Link>
      <Link className="footer__link" to="/">Booking Deal</Link>
      <Link className="footer__link" to="/">Emergency Call</Link>
      <Link className="footer__link" to="/">Mobile App</Link>
    </div>
    <div className="footer__card footer__card--3">
      <div className="footer__card-title">
        <h3>About</h3>
      </div>
      <Link className="footer__link" to="/">About Us</Link>
      <Link className="footer__link" to="/">FAQ</Link>
      <Link className="footer__link" to="/">Login</Link>
      <Link className="footer__link" to="/">Register</Link>
      <Link className="footer__link" to="/">Terms & Co</Link>
      <Link className="footer__link" to="/">Privacy</Link>
      <Link className="footer__link" to="/">Support</Link>
    </div>
    <div className="footer__card footer__card--4 footer__card--map">
      <div className="footer__card-title">
        <h3>Our Location</h3>
      </div>
      <div className="footer__card--container-map">
        <iframe
          title="uniqueTitle"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Nuevayork&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        />
      </div>
    </div>
    <div className="footer__card footer__card--5">
      <div className="footer__card-title">
        <h3>New Topics</h3>
      </div>
      <div className="footer__card--news-cont">
        <article className="footer__card--news">
          <NewsList />
        </article>
        <article className="footer__card--news">
          <NewsList />
        </article>
      </div>
    </div>
    <div className="footer__social-media footer__card--6">
      <div className="footer__social-icon">
        <span><ion-icon name="logo-facebook" /></span>
        <span><ion-icon name="logo-instagram" /></span>
        <span><ion-icon name="logo-twitter" /></span>
        <span><ion-icon name="logo-google" /></span>
      </div>
      <div className="footer__social-text">
        <p className="footer__social-text-link">Copyright 2019 Rica By <ion-icon name="heart-outline" />Pixelstrap</p>
      </div>
      <div className="footer__box-red">
        ^
      </div>
    </div>
  </footer>
);

export default Footer;
