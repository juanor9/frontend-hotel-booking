import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getHotelById } from '../../features/hotels/hotelsSlice';
import BookingForm from '../../components/BookingForm/BookingForm';
import HotelContact from '../../components/HotelContact/HotelContact';
import HotelInfo from '../../components/HotelInfo/HotelInfo';
import HotelRooms from '../../components/HotelRooms/HotelRooms';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Weather from '../../components/Weather/Weather';

const Rooms = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotelById(id));
  }, []);
  const {
    name,
    address,
    geoLocation,
    phone,
    email,
    pricePerNight,
    offerPrice,
    feature1,
    feature2,
    checkin,
    checkout,
    rooms,
  } = useSelector((state) => state.hotels.hotels);
  const { coordinates } = geoLocation;
  return (
    <div className="hotel-details">
      <header className="hotel-details__header">
        <NavigationBar />
      </header>
      <div className="hotel-details__hotel-info">
        <HotelInfo
          name={name}
          address={address}
          feature1={feature1}
          feature2={feature2}
        />
      </div>

      <div className="hotel-details__main-container">
        {
          rooms !== undefined ? <main className="hotel-details__rooms"><HotelRooms rooms={rooms} /></main> : null
        }
        <aside className="hotel-details__aside">
          <BookingForm
            pricePerNight={pricePerNight}
            offerPrice={offerPrice}
            {coordinates
            ?coordinates={coordinates}
          :coordinates=[0,0]}
          />
          <HotelContact
            address={address}
            phone={phone}
            email={email}
            checkin={checkin}
            checkout={checkout}
          />
          <Weather />
        </aside>
      </div>
    </div>
  );
};

export default Rooms;
