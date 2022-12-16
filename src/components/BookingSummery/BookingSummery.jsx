import PropTypes from 'prop-types';
import './styles.css';

const BookingSummery = ({ reservationInformation }) => (
  <div className="summery__container">
    <h2>Booking Summery</h2>
    <div className="summary__view">
      <img className="summery__image" src={reservationInformation.image} alt="img" />
      <div>
        <h3>{reservationInformation.hotelDescription}</h3>
        <p>{reservationInformation.nameHotel}
          {reservationInformation.city}
          {reservationInformation.country}
        </p>
      </div>
    </div>
    <hr className="summery__hr" />
    <div className="summery__dates">
      <div className="summery__dates-item">
        <p>Check In</p>
        <span>
          {reservationInformation.checkIn}
        </span>
      </div>
      <div className="summery__dates-item summery__left">
        <p>Check Out</p>
        <span>
          {reservationInformation.checkOut}
        </span>
      </div>
      <div className="summery__dates-item">
        <p>Check In Time</p>
        <span>
          {reservationInformation.checkInTime}
        </span>
      </div>
      <div className="summery__dates-item summery__left">
        <p>Check Out Time</p>
        <span>
          {reservationInformation.checkOutTime}
        </span>
      </div>
    </div>
    <hr className="summery__hr" />
    <div className="summery__edit">
      <p>{reservationInformation.guestNumber},
        {reservationInformation.typeOfRoom},
        {reservationInformation.nightsNomber}
      </p>
      <button className="summeery__btn" type="button">Edit</button>
    </div>
    <hr className="summery__hr" />
    <div>
      <h3>Payment Details</h3>
      <p className="summery__details">Base Price <span>{reservationInformation.basePrice}</span></p>
      <p className="summery__details">Promo Discount <span>{reservationInformation.promoDiscount}</span></p>
      <p className="summery__details">Tax & ServiceFees <span>{reservationInformation.taxes}</span></p>
      <hr className="summery__hr" />
      <p className="summery__details">Payable Amount <span className="summery__total">$2410</span></p>
    </div>
  </div>
);

BookingSummery.propTypes = {
  reservationInformation: PropTypes.arrayOf.isRequired,
};

export default BookingSummery;
