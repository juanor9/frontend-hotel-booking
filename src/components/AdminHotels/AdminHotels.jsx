/* eslint-disable no-unused-vars */
import './styles.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHotels } from '../../features/hotels/hotelsSlice';
import HotelCardAdmin from '../HotelCardAdmin/HotelCardAdmin';

const AdminHotels = () => {
  const { hotels } = useSelector((state) => state.hotels);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotels());
  }, []);
  return (
    <section className="hotelsManagment__list">
      <h2>Hotels Managment</h2>
      {
    hotels.map((hotel) => (
      <HotelCardAdmin
        imageProfile={hotel.imageProfile}
        name={hotel.name}
        about={hotel.about}
        city={hotel.city}
        pricePerNight={hotel.pricePerNight}
        offerPrice={hotel.offerPrice}
        feature1={hotel.feature1}
        feature2={hotel.feature2}
        id={hotel._id}
        key={hotel._id}
      />
    ))
  }
    </section>
  );
};

export default AdminHotels;
