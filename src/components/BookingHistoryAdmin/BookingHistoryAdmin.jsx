import PropTypes from 'prop-types';
import './styles.css';

const BookingHistory = ({
  hotelImg, name, checkIn, checkOut, price, guests,
}) => (
  <div className="booking-historyAdmin">
    <section className="booking-historyAdmin__bookings">
      <img className="booking-historyAdmin__img" alt="hotel" src={hotelImg} />
      <section className="booking-historyAdmin__description">
        <h3>{name}</h3>
        <p className="booking-historyAdmin__description--gray"><span className="booking-historyAdmin__text">Dates:</span> {checkIn} - {checkOut}</p>
        <p className="booking-historyAdmin__description--gray"><span className="booking-historyAdmin__text">Price:</span> ${price}</p>
        <p className="booking-historyAdmin__description--gray"><span className="booking-historyAdmin__text">Guests:</span> {guests}</p>
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
  guests: PropTypes.number.isRequired,
};

export default BookingHistory;
