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
    <section className="admin-hotels">
      <h2 className="admin-hotels__header">Hotels Managment</h2>
      <div className="hotelsManagment__list">
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
      </div>
    </section>
  );
};

export default AdminHotels;
