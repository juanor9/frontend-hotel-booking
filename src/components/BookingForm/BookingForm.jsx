import './styles.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { createBooking } from '../../features/bookings/bookingsSlice';
import useForm from '../../hooks/useForm';

const BookingForm = ({
  pricePerNight, offerPrice, coordinates, id, rooms,
}) => {
  const mapLocation = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.7759977150563!2d${coordinates[1]}!3d${coordinates[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc2cd8cb481aabab3!2zMjHCsDA3JzE3LjQiTiA4NsKwNTAnMzkuNyJX!5e0!3m2!1ses-419!2sco!4v1673658020497!5m2!1ses-419!2sco`;
  const { _id } = JSON.parse(localStorage.getItem('user'));
  const { form, handleChange } = useForm({});
  const [normalPrice, setNormalPrice] = useState(pricePerNight);
  const [promoPrice, setPromoPrice] = useState(offerPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeRooms = ({ target }) => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < rooms.length; i++) {
      if (target.value === rooms[i].roomType) {
        setNormalPrice(rooms[i].pricePerNight);
        setPromoPrice(rooms[i].offerPrice);
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(createBooking(
        {
          ...form, idHotel: id, idUser: _id, pricePerNight: normalPrice, offerPrice: promoPrice,
        },
      ));
      navigate('/bookings');
    } catch (error) {
      throw new Error(error);
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
          {promoPrice ? <><del><p className="booking-form__features-text">{normalPrice}</p></del> <p className="booking-form__features-text booking-form__features-text--size">{promoPrice}</p></> : <p className="booking-form__features-text">{normalPrice}</p> }
        </section>
      </section>
      <hr className="booking-form__divider" />
      <form className="booking-form__form" onSubmit={handleSubmit}>
        <section className="booking-form__form-date">
          <div>Check In</div>
          <input className="booking-form__form-calendar" type="date" name="checkInDate" required onChange={handleChange} />
        </section>
        <section className="booking-form__form-date">
          <div>Check Out</div>
          <input className="booking-form__form-calendar" type="date" name="checkOutDate" required onChange={handleChange} />
        </section>
        <input className="booking-form__form-number" type="number" placeholder="Guests Number" required name="guestsNumber" onChange={handleChange} />
        <select className="booking-form__form-rooms" name="selectedRoom" onChange={handleChangeRooms}>
          <option disabled selected>Rooms Type</option>
          {
            rooms.map((room) => (
              <option>{room.roomType}</option>
            ))
          }
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
  coordinates: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string.isRequired,
  rooms: PropTypes.arrayOf({}).isRequired,
};

BookingForm.defaultProps = {
  offerPrice: 0,
  coordinates: ['0', '0'],
};

export default BookingForm;
