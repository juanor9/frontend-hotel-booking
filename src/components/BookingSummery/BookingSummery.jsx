import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getHotel } from '../../features/hotels/hotelsSlice';
import { captureData } from '../../features/bookings/bookingsSlice';
import calculateDays from '../../services/bookings';
import './styles.css';

const BookingSummery = () => {
  const { hotels } = useSelector((state) => state.hotels);
  const { bookings } = useSelector((state) => state.bookings);
  const { id } = useParams;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotel(id));
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
            {bookings.checkin}
          </span>
        </div>
        <div className="summery__dates-item summery__left">
          <p>Check Out</p>
          <span>
            {bookings.checkout}
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
        <p>{bookings.guests}&nbsp;guests,&nbsp;
          {bookings.roomstype},&nbsp;
          {`${calculateDays(bookings.checkin, bookings.checkout)} Nights`}
        </p>
        <button className="summery__btn" type="button"><Link to="/hotels/:id" className="summery__btn">Edit</Link></button>
      </div>
      <hr className="summery__hr" />
      <div>
        <h3>Payment Details</h3>
        <p className="summery__details">Base Price <span>${hotels.pricePerNight}</span></p>
        <p className="summery__details">Promo Discount $<span>-${hotels.offerPrice ? hotels.pricePerNight - hotels.offerPrice : 0 }</span></p>
        <p className="summery__details">Tax & ServiceFees <span>${0}</span></p>
        <hr className="summery__hr" />
        <p className="summery__details">Payable Amount <span className="summery__total">${hotels.offerPrice ? hotels.offerPrice : hotels.pricePerNight}</span></p>
      </div>
    </div>
  );
};

export default BookingSummery;
