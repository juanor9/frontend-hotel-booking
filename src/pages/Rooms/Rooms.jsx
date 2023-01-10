import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getHotelById } from '../../features/hotels/hotelsSlice';
import './style.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import HotelInfo from '../../components/HotelInfo/HotelInfo';
import HotelRooms from '../../components/HotelRooms/HotelRooms';
import BookingForm from '../../components/BookingForm/BookingForm';
import Weather from '../../components/Weather/Weather';
import HotelContact from '../../components/HotelContact/HotelContact';

const Rooms = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotelById(id));
  }, []);
  const {
    name,
    address,
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
        {
          // eslint-disable-next-line no-console
          console.log('rooms', rooms)
        }
        <aside className="hotel-details__aside">
          <BookingForm
            pricePerNight={pricePerNight}
            offerPrice={offerPrice}
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
