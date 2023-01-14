import './styles.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

const BookingForm = ({
  pricePerNight, offerPrice, coordinates,
}) => {
  const mapLocation = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.7759977150563!2d${coordinates[1]}!3d${coordinates[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc2cd8cb481aabab3!2zMjHCsDA3JzE3LjQiTiA4NsKwNTAnMzkuNyJX!5e0!3m2!1ses-419!2sco!4v1673658020497!5m2!1ses-419!2sco`;
  return (
    <div className="booking-form">
      <div className="booking-form__mapouter">
        <div className="booking-form__gmap_canvas">
          <iframe
            title="uniqueTitle"
            width="100%"
            id="gmap_canvas"
            src={mapLocation}
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          />
        </div>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.7759977150563!2d-86.84655458574242!3d21.121494889983392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc2cd8cb481aabab3!2zMjHCsDA3JzE3LjQiTiA4NsKwNTAnMzkuNyJX!5e0!3m2!1ses-419!2sco!4v1673658020497!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
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
          {offerPrice ? <><del><p className="booking-form__features-text">{pricePerNight}</p></del> <p className="booking-form__features-text booking-form__features-text--size">{offerPrice}</p></> : <p className="booking-form__features-text">{pricePerNight}</p> }
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
};

BookingForm.propTypes = {
  pricePerNight: PropTypes.number.isRequired,
  offerPrice: PropTypes.number,
  coordinates: PropTypes.arrayOf(PropTypes.string).isRequired,
};

BookingForm.defaultProps = {
  offerPrice: 0,
};

export default BookingForm;
