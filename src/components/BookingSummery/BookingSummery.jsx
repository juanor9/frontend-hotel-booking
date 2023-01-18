import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getHotelById } from '../../features/hotels/hotelsSlice';
import { getBookingById } from '../../features/bookings/bookingsSlice';
import { getUserById } from '../../features/users/usersSlice';
import { updateUser } from '../../services/users';
import './styles.css';

const BookingSummery = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { _id } = JSON.parse(localStorage.getItem('user'));
  const { bookings } = useSelector((state) => state.bookings);

  useEffect(() => {
    getHotelById(bookings.idHotel);
  });

  useEffect(() => {
    getBookingById(bookings._id);
  }, []);

  useEffect(() => {
    dispatch(getUserById(_id));
  }, []);

  const
    {
      imageProfile,
      name,
      about,
      city,
      country,
      checkin,
      checkout,
    } = useSelector((state) => state.hotels.hotels);

  const handleClickBack = async () => {
    try {
      navigate(`/hotels/${bookings.idHotel}`);
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleClickPay = async () => {
    try {
      dispatch(updateUser({ _id, formdata: { booking: bookings._id } }));
      navigate('/bookings-payment');
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div className="summery__container">
      <h2>Booking Summery</h2>
      <div className="summary__view">
        <img className="summery__image" src={imageProfile} alt={name} />
        <div>
          <h3 className="summery__about">{about}</h3>
          <p className="summery__paragraph">
            {name}&nbsp;
            {city}&nbsp;
            {country}
          </p>
        </div>
      </div>
      <hr className="summery__hr" />
      <div className="summery__dates">
        <div className="summery__dates-item summery__left">
          <p>Check In</p>
          <span>
            {checkin}
          </span>
        </div>
        <div className="summery__dates-item summery__right">
          <p>Check Out</p>
          <span>
            {checkout}
          </span>
        </div>
        <div className="summery__dates-item summery__left">
          <p>Check In Time</p>
          <span>
            {bookings.checkInDate ? bookings.checkInDate.toString().slice(0, 10) : null}
          </span>
        </div>
        <div className="summery__dates-item summery__right">
          <p>Check Out Time</p>
          <span>
            {bookings.checkOutDate ? bookings.checkOutDate.toString().slice(0, 10) : null}
          </span>
        </div>
      </div>
      <hr className="summery__hr" />
      <div className="summery__edit">
        <p>{bookings.guestsNumber} Guests</p>
      </div>
      <hr className="summery__hr" />
      <div>
        <h3>Payment Details</h3>
        <p className="summery__details">Base Price <span>{bookings.pricePerNight}</span></p>
        <p className="summery__details">Promo Discount $<span>-${bookings.offerPrice !== '0' ? bookings.pricePerNight - bookings.offerPrice : 0 }</span></p>
        <p className="summery__details">Tax & ServiceFees <span>{0}</span></p>
        <hr className="summery__hr" />
        <p className="summery__details">Payable Amount <span className="summery__total">${bookings.offerPrice !== '0' ? bookings.offerPrice : bookings.pricePerNight}</span></p>
      </div>
      <div className="summery__buttonEnv">
        <button className="summery__button" type="submit" onClick={handleClickBack}>Back</button>
        <button className="summery__button" type="submit" onClick={handleClickPay}>Pay Now</button>
      </div>
    </div>
  );
};

export default BookingSummery;
