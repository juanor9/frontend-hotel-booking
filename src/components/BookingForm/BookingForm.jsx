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
    <section className="booking-form__text-top">
      <section className="booking-form__text-top-features">
        <h3 className="booking-form__features-title">Deluxe Rate</h3>
        <div className="booking-form__features-body">
          <FontAwesomeIcon icon={faCheck} key="check-1" />
          <p className="booking-form__features-text">Room Only</p>
        </div>
        <div className="booking-form__features-body">
          <FontAwesomeIcon icon={faCheck} key="check-2" />
          <p className="booking-form__features-text">Non Refundable</p>
        </div>
      </section>
      <section className="booking-form__text-top-features booking-form__text-top-features--prices">
        <h4 className="booking-form__features-title">Per Night</h4>
        <del><p className="booking-form__features-text">$251</p></del>
        <p className="booking-form__features-text features_text--size">$230</p>
      </section>
    </section>
    <hr className="booking-form__divider" />
    <form className="booking-form__form">
      <section className="booking-form__form-date">
        <div>Check In</div>
        <input className="booking-form__form-calendar" type="date" />
      </section>
      <section className="booking-form__form-date">
        <div>Check Out</div>
        <input className="booking-form__form-calendar" type="date" />
      </section>
      <input className="booking-form__form-number" type="number" placeholder="Rooms & Guests" />
      <select className="booking-form__form-rooms">
        <option disabled selected>Rooms Type</option>
        <option>Deluxe</option>
        <option>Suite</option>
        <option>Royal</option>
      </select>
      <section className="booking-form__form-button--left">
        <button className="booking-form__form-button" type="submit">Book This Know</button>
      </section>
    </form>
  </div>
);

export default BookingForm;
