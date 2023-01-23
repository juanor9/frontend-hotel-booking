import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './styles.css';

const BookingHistory = ({
  image,
  name,
  checkIn,
  checkOut,
  price,
  offerPrice,
  guests,
}) => {
  const { hotels } = useSelector((state) => state.hotels);
  return (
    <Link to={`/hotels/${hotels._id}`}>
      <div className="booking-history">
        <section className="booking-history__bookings">
          <img className="booking-history__img" alt="hotel" src={image} />
          <section className="booking-history__description">
            <h3>{name}</h3>
            <p className="booking-history__description--gray"><b>Guests: </b>{guests}</p>
            <p className="booking-history__description--gray"><b>Dates: </b>{checkIn} - {checkOut}</p>
            <p className="booking-history__description--gray"><b>Price: </b>${offerPrice !== '0' ? offerPrice : price}</p>
          </section>
        </section>
      </div>
    </Link>
  );
};

BookingHistory.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checkIn: PropTypes.string.isRequired,
  checkOut: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  offerPrice: PropTypes.number.isRequired,
  guests: PropTypes.number.isRequired,
};

export default BookingHistory;
