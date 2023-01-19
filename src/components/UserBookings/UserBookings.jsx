/* eslint-disable no-unused-vars */
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserById } from '../../features/users/usersSlice';

const UserBookings = () => {
  const { _id } = JSON.parse(localStorage.getItem('user'));
  const dispatch = useDispatch();

  const { userData } = useSelector((state) => state.user);
  const { booking } = userData;
  // console.log(booking[0].idHotel);

  useEffect(() => {
    try {
      dispatch(getUserById(_id));
    } catch (error) {
      throw new Error(error);
    }
  }, []);
  return (
    <div className="user-info">
      <section className="user-info__title">
        {booking
          ? booking.map(($booking) => (
            <section key={$booking._id}>
              <p>{$booking.idHotel}</p>
              <p>{$booking.checkInDate}</p>
              <p>{$booking.checkOutDate}</p>
              <p>{$booking.guestsNumber}</p>
              <p>{$booking.pricePerNight}</p>
            </section>
          ))
          : null}
      </section>
    </div>
  );
};

export default UserBookings;
