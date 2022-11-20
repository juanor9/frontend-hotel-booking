import './style.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import HotelRooms from '../../components/HotelRooms/HotelRooms';
import BookingForm from '../../components/BookingForm/BookingForm';
import Weather from '../../components/Weather/Weather';

const Rooms = () => (
  <div className="hotel-details">
    <header className="hotel-details__header">
      <NavigationBar />
    </header>
    Hotel details
    <div className="hotel-details__main-container">
      <main>
        <HotelRooms />
      </main>
      <aside>
        <BookingForm />
        Contact info component
        <Weather />
      </aside>
    </div>

    <footer>Page footer</footer>
  </div>
);

export default Rooms;
