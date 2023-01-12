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
import HotelGallery from '../../components/HotelGallery/HotelGallery';

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
    // imageProfile,
    images,
  } = useSelector((state) => state.hotels.hotels);
  return (
    <div className="hotel-details">
      <header className="hotel-details__header">
        <NavigationBar />
      </header>
      <div className="hotel-details__hotel-info">
        {name && address && feature1 && feature2
          ? (
            <HotelInfo
              name={name}
              address={address}
              feature1={feature1}
              feature2={feature2}
            />
          )
          : null}

      </div>

      <div className="hotel-details__main-container">
        <div>
          <div className="hotel-details__hotel-images">
            {images
              ? (
                <HotelGallery
                  images={images}
                />
              )
              : null}
          </div>
          {
          rooms
            ? <main className="hotel-details__rooms"><HotelRooms rooms={rooms} /></main>
            : null
        }
        </div>
        <aside className="hotel-details__aside">
          {pricePerNight
            ? (
              <BookingForm
                pricePerNight={pricePerNight}
                offerPrice={offerPrice}
              />
            )
            : null}
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
