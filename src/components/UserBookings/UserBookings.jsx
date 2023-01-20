/* eslint-disable no-unused-vars */
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getUserById } from '../../features/users/usersSlice';
import { getHotelById } from '../../features/hotels/hotelsSlice';
import BookingHistory from '../BookingHistory/BookingHistory';

const UserBookings = () => {
  const { _id } = JSON.parse(localStorage.getItem('user'));
  const dispatch = useDispatch();

  const { userData } = useSelector((state) => state.user);
  const { name, imageProfile } = useSelector((state) => state.hotels.hotels);
  const { booking } = userData;
  const [newBookings, setNewBookings] = useState([]);

  useEffect(() => {
    try {
      dispatch(getUserById(_id));
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  useEffect(() => {
    try {
      booking.map(($booking) => {
        dispatch(getHotelById($booking.idHotel));
        return null;
      });
    } catch (error) {
      throw new Error(error);
    }
  }, [booking]);

  useEffect(() => {
    booking.map(($booking) => {
      const dateCheckin = new Date($booking.checkInDate);
      const datecheckout = new Date($booking.checkOutDate);
      setNewBookings([
        {
          hotelName: name,
          hotelImage: imageProfile,
          checkin: dateCheckin.toISOString().slice(0, 10),
          checkout: datecheckout.toISOString().slice(0, 10),
          price: $booking.pricePerNight,
          guests: $booking.guestsNumber,
        },
      ]);
      return newBookings;
    });
  }, [name, imageProfile]);
  useEffect(() => {}, [newBookings]);

  return (
    <div className="user-info">
      {console.log(newBookings)}
      <section className="user-info__title">
        {newBookings
          ? newBookings.map(($booking) => (
            <BookingHistory
              key={$booking._id}
              name={$booking.hotelName}
              image={$booking.hotelImage}
              checkIn={$booking.checkin}
              checkOut={$booking.checkout}
              price={$booking.price}
              guests={$booking.guests}
            />
          ))
          : null}
      </section>
    </div>
  );
};

export default UserBookings;
