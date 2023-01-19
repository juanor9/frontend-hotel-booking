import PropTypes from 'prop-types';
import './styles.css';

const BookingHistory = ({
  image,
  name,
  checkIn,
  checkOut,
  price,
  guests,
}) => (
  <div className="booking-history">
    <section className="booking-history__bookings">
      <img className="booking-history__img" alt="hotel" src={image} />
      <section className="booking-history__description">
        <h3>{name}</h3>
        <p className="booking-history__description--gray"><b>Guests: </b>{guests}</p>
        <p className="booking-history__description--gray"><b>Dates: </b>{checkIn} - {checkOut}</p>
        <p className="booking-history__description--gray"><b>Price: </b>${price}</p>
      </section>
    </section>
  </div>
);

BookingHistory.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checkIn: PropTypes.string.isRequired,
  checkOut: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  guests: PropTypes.number.isRequired,
};

export default BookingHistory;
