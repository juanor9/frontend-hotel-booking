import './styles.css';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { captureData } from '../../features/bookings/bookingsSlice';
import useForm from '../../hooks/useForm';

const BookingForm = ({ pricePerNight, offerPrice }) => {
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
    <article className="booking-form">
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
        <section className="booking-form__text-top">
          <div className="booking-form__header">
            <h3 className="booking-form__features-highlight">Deluxe Rate</h3>
            <h4 className="booking-form__item">Per Night</h4>
          </div>
          <div className="booking-form__text_icon">
            <div className="booking-form__text_icon">
              <FontAwesomeIcon className="booking-form__icon" icon={faCheck} key="check-1" />
              &nbsp;<p>Room Only</p>
            </div>
            <p className="booking-form__features-highlight">${pricePerNight}</p>
          </div>
          <div className="booking-form__text_icon">
            <div className="booking-form__text_icon">
              <FontAwesomeIcon className="booking-form__icon" icon={faCheck} key="check-2" />
              &nbsp;<p>Non Refundable</p>
            </div>
            <p className="booking-form__features-highlight booking__through">${offerPrice}</p>
          </div>
        </section>
      </section>
      <hr />
      <form onSubmit={handleSubmit} className="booking-form__form">
        <section className="booking-form__form-calendar">
          <div>Check In</div>
          <input className="booking-form__input" name="checkin" type="date" onChange={handleChange} required />
        </section>
        <section className="booking-form__form-calendar">
          <div>Check Out</div>
          <input className="booking-form__input" name="checkout" type="date" onChange={handleChange} required />
        </section>
        <input
          name="guests"
          className="booking-form__form-calendar  booking-form__input"
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
    </article>
  );
};

BookingForm.propTypes = {
  pricePerNight: PropTypes.number.isRequired,
  offerPrice: PropTypes.number,
};

BookingForm.defaultProps = {
  offerPrice: 0,
};

export default BookingForm;
