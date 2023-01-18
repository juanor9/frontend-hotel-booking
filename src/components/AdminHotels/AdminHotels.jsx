/* eslint-disable no-unused-vars */
import './styles.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
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
      <Link to="/admin/hotels-registration" className="admin-hotels__add-button">
        <FontAwesomeIcon
          icon={faPlus}
        />{' '}
        Add a hotel
      </Link>
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
