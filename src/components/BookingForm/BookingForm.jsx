import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

const BookingForm = () => (
  <div className="booking-form">
    <div className="booking-form__mapouter">
      <div className="booking-form__gmap_canvas">
        <iframe
          title="uniqueTitle"
          width="100%"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=miami&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        />
      </div>
    </div>
    <section className="card__textTop">
      <section className="textTop__features">
        <h3 className="features__title">Deluxe Rate</h3>
        <div className="features__body">
          <FontAwesomeIcon icon={faCheck} key="check-1" />
          <p className="features__text">Room Only</p>
        </div>
        <div className="features__body">
          <FontAwesomeIcon icon={faCheck} key="check-2" />
          <p className="features__text">Non Refundable</p>
        </div>
      </section>
      <section className="textTop__features textTop__features--prices">
        <h4 className="features__title">Per Night</h4>
        <del><p className="features__text">$251</p></del>
        <p className="features__text features_text--size">$230</p>
      </section>
    </section>
    <hr className="card__line" />
    <form className="card__form">
      <section className="form__date">
        <div>Check In</div>
        <input className="form__calendar" type="date" />
      </section>
      <section className="form__date">
        <div>Check Out</div>
        <input className="form__calendar" type="date" />
      </section>
      <input className="form__num" type="number" placeholder="Rooms & Guests" />
      <select className="form__rooms">
        <option disabled selected>Rooms Type</option>
        <option>Deluxe</option>
        <option>Suite</option>
        <option>Royal</option>
      </select>
      <section className="form__button--left">
        <button className="form__button" type="submit">Book This Know</button>
      </section>
    </form>
  </div>
);

export default BookingForm;
