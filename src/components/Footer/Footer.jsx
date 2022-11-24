import NewsList from '../NewsList/NewsList';
import './styles.css';

const Footer = () => (
  <footer>
    <div className="card__footer card__footer--1">
      <div className="title__footer title__desktop">
        <h3>Contact Us</h3>
      </div>
      <div className="card__logo">
        <img className="card__img" src="https://tse1.mm.bing.net/th?id=OIP.tuFnivBxU22mvFYtoj83gQHaFj&pid=Api&rs=1&c=1&qlt=95&w=155&h=116" alt="logo" />
        <span className="text__logo">RICA</span>
      </div>
      <p className="card__paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique doloribus doloribus...
      </p>
      <p className="card__link"><ion-icon name="location-outline" /><a href="/">A-32, Albany,Newyork</a></p>
      <p className="card__link"><ion-icon name="call-outline" /><a href="/">518 - 457 - 5181</a></p>
      <p className="card__link"><ion-icon name="mail-outline" /><a href="/">Contact@Gmail.com</a></p>
    </div>
    <div className="card__footer card__footer--2">
      <div className="title__footer">
        <h3>Uself Links</h3>
      </div>
      <a href="/">Home</a>
      <a href="/">Our Vehical</a>
      <a href="/">Latest Video</a>
      <a href="/">Services</a>
      <a href="/">Booking Deal</a>
      <a href="/">Emergency Call</a>
      <a href="/">Mobile App</a>
    </div>
    <div className="card__footer card__footer--3">
      <div className="title__footer">
        <h3>About</h3>
      </div>
      <a href="/">About Us</a>
      <a href="/">FAQ</a>
      <a href="/">Login</a>
      <a href="/">Register</a>
      <a href="/">Terms & Co</a>
      <a href="/">Privacy</a>
      <a href="/">Support</a>
    </div>
    <div className="card__footer card__footer--4 map__footer">
      <div className="title__footer">
        <h3>Our Location</h3>
      </div>
      <div className="card__map">
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
    <div className="card__footer card__footer--5">
      <div className="title__footer">
        <h3>New Topics</h3>
      </div>
      <div className="card__new">
        <article className="card__news">
          <NewsList />
        </article>
        <article className="card__news">
          <NewsList />
        </article>
      </div>
    </div>
    <div className="social__media card__footer--6">
      <div className="social__icon">
        <span><ion-icon name="logo-facebook" className="card__icon" /></span>
        <span><ion-icon name="logo-instagram" className="card__icon" /></span>
        <span><ion-icon name="logo-twitter" className="card__icon" /></span>
        <span><ion-icon name="logo-google" className="card__icon" /></span>
      </div>
      <div className="social__text">
        <p>Copyright 2019 Rica By <ion-icon name="heart-outline" />Pixelstrap</p>
      </div>
      <div className="box__red">
        ^
      </div>
    </div>
  </footer>
);

export default Footer;
