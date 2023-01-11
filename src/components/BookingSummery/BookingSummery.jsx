import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getHotel } from '../../features/hotels/hotelsSlice';
import { captureData } from '../../features/bookings/bookingsSlice';
import './styles.css';

const BookingSummery = () => {
  const { hotels } = useSelector((state) => state.hotels);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotel('63bc801c24c669677e027c5f'));
    dispatch(captureData(hotels));
  }, [captureData, getHotel]);

  return (
    <div className="summery__container">
      <h2>Booking Summery</h2>
      <div className="summary__view">
        <img className="summery__image" src={hotels.imageProfile} alt={hotels.name} />
        <div>
          <h3 className="summery__about">{hotels.about}</h3>
          <p className="summery__paragraph">
            {hotels.name}&nbsp;
            {hotels.city}&nbsp;
            {hotels.country}
          </p>
        </div>
      </div>
      <hr className="summery__hr" />
      <div className="summery__dates">
        <div className="summery__dates-item">
          <p>Check In</p>
          <span>
            {hotels.checkin}
          </span>
        </div>
        <div className="summery__dates-item summery__left">
          <p>Check Out</p>
          <span>
            {hotels.checkout}
          </span>
        </div>
        <div className="summery__dates-item">
          <p>Check In Time</p>
          <span>
            {hotels.checkin}
          </span>
        </div>
        <div className="summery__dates-item summery__left">
          <p>Check Out Time</p>
          <span>
            {hotels.checkout}
          </span>
        </div>
      </div>
      <hr className="summery__hr" />
      <div className="summery__edit">
        <p>{hotels.name}&nbsp;
          {hotels.name}&nbsp;
          {hotels.name}
        </p>
        <button className="summeery__btn" type="button">Edit</button>
      </div>
      <hr className="summery__hr" />
      <div>
        <h3>Payment Details</h3>
        <p className="summery__details">Base Price <span>{hotels.pricePerNight}</span></p>
        <p className="summery__details">Promo Discount <span>{0}</span></p>
        <p className="summery__details">Tax & ServiceFees <span>{0}</span></p>
        <hr className="summery__hr" />
        <p className="summery__details">Payable Amount <span className="summery__total">${hotels.pricePerNight}</span></p>
      </div>
    </div>
  );
};

export default BookingSummery;
