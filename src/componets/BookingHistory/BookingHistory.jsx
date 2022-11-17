import PropTypes from 'prop-types';
import './styles.css';

const BookingHistory = ({
  hotelImg, name, checkIn, checkOut, price,
}) => (
  <div className="card">
    <section className="card__Bookings">
      <img className="card__img" alt="hotel" src={hotelImg} />
      <section className="card__description">
        <h3>{name}</h3>
        <p className="card__description--gray">{checkIn} - {checkOut}</p>
        <p className="card__description--gray">${price}</p>
      </section>
    </section>
  </div>
);

BookingHistory.propTypes = {
  hotelImg: PropTypes.isRequired,
  name: PropTypes.string.isRequired,
  checkIn: PropTypes.string.isRequired,
  checkOut: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default BookingHistory;
