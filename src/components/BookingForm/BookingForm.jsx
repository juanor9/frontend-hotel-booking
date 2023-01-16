import './styles.css';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { captureData } from '../../features/bookings/bookingsSlice';
import useForm from '../../hooks/useForm';

const BookingForm = ({
  pricePerNight, offerPrice, coordinates,
}) => {
  const mapLocation = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.7759977150563!2d${coordinates[1]}!3d${coordinates[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc2cd8cb481aabab3!2zMjHCsDA3JzE3LjQiTiA4NsKwNTAnMzkuNyJX!5e0!3m2!1ses-419!2sco!4v1673658020497!5m2!1ses-419!2sco`;

  const bookings = useSelector((state) => state.bookings);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { form, handleChange } = useForm({});
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const sendData = (event) => {
    event.preventDefault();
    if (Object.keys(form).length === 4) {
      dispatch(captureData({ bookings, ...form }));
      navigate('/bookings');
    }
  };
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
      </div>
      <section className="booking-form__text-top">
        <section className="booking-form__text-top-features">
          <h3 className="booking-form__features-title">Deluxe Rate</h3>
          <div className="booking-form__features-body">
            <FontAwesomeIcon className="booking-form__features-icon" icon={faCheck} key="check-1" />&nbsp;
            <p className="booking-form__features-text">Room Only</p>
          </div>
          <div className="booking-form__features-body">
            <FontAwesomeIcon className="booking-form__features-icon" icon={faCheck} key="check-2" />&nbsp;
            <p className="booking-form__features-text">Non Refundable</p>
          </div>
        </section>
        <section className="booking-form__text-top-features booking-form__text-top-features--prices">
          <h4 className="booking-form__features-title booking-form__features-price">Per Night</h4>
          {offerPrice ? <><del><p className="booking-form__features-text">${pricePerNight}</p></del> <p className="booking-form__features-text booking-form__features-text--size">${offerPrice}</p></> : <p className="booking-form__features-text">${pricePerNight}</p>}
        </section>
      </section>
      <hr className="booking-form__divider" />
      <form onSubmit={handleSubmit} className="booking-form__form">
        <section className="booking-form__form-date">
          <div>Check In</div>
          <input className="booking-form__input" name="checkin" type="date" onChange={handleChange} required />
        </section>
        <section className="booking-form__form-date">
          <div>Check Out</div>
          <input className="booking-form__input" name="checkout" type="date" onChange={handleChange} required />
        </section>
        <input
          name="guests"
          className="booking-form__form-calendar booking-form__input"
          type="number"
          onChange={handleChange}
          placeholder="Rooms & Guests"
          required
        />
        <select className="booking-form__form-calendar booking-form__input" name="roomstype" onChange={handleChange}>
          <option disabled selected>
            Rooms Type
          </option>
          <option name="deluxe" onChange={handleChange}>Deluxe</option>
          <option name="suite" onChange={handleChange}>Suite</option>
          <option name="royal" onChange={handleChange}>Royal</option>
        </select>
        <section className="booking-form__cont-btn">
          <button className="booking-form__form-button" onClick={sendData} type="submit">
            Book This Know
          </button>
        </section>
      </form>
    </div>
  );
};

BookingForm.propTypes = {
  pricePerNight: PropTypes.number.isRequired,
  offerPrice: PropTypes.number,
  coordinates: PropTypes.arrayOf(PropTypes.string),
};

BookingForm.defaultProps = {
  offerPrice: 0,
  coordinates: ['0', '0'],
};

export default BookingForm;
