import { useParams } from 'react-router-dom';
import './style.css';
import hotels from '../../assets/hotel.json';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import HotelInfo from '../../components/HotelInfo/HotelInfo';
import HotelRooms from '../../components/HotelRooms/HotelRooms';
import BookingForm from '../../components/BookingsForm/BookingForm';
import Weather from '../../components/Weather/Weather';

const Rooms = () => {
  const { id } = useParams();
  const hotel = hotels.hotels.find((e) => e.id === Number(id));
  return (
    <div className="hotel-details">
      <header className="hotel-details__header">
        <NavigationBar />
      </header>
      <div className="hotel-details__hotel-info">
        <HotelInfo
          name={hotel.name}
          rating={hotel.rating}
          address={hotel.address}
          features={hotel.features}
        />
      </div>

      <div className="hotel-details__main-container">
        <main className="hotel-details__rooms">
          <HotelRooms rooms={hotel.rooms} />
        </main>
        <aside className="hotel-details__aside">
          <BookingForm />
          <Weather />
        </aside>
      </div>
    </div>
  );
};

export default Rooms;
