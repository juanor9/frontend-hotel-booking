import PropTypes from 'prop-types';
import './styles.css';

const BookingHistory = ({
  hotelImg, name, checkIn, checkOut, price,
}) => (
  <div className="booking-history">
    <section className="booking-history__bookings">
      <img className="booking-history__img" alt="hotel" src={hotelImg} />
      <section className="booking-history__description">
        <h3>{name}</h3>
        <p className="booking-history__description--gray"><span className="booking-history__text">Dates:</span> {checkIn} - {checkOut}</p>
        <p className="booking-history__description--gray"><span className="booking-history__text">Price:</span> ${price}</p>
      </section>
    </section>
  </div>
);

BookingHistory.propTypes = {
  hotelImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checkIn: PropTypes.string.isRequired,
  checkOut: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default BookingHistory;
