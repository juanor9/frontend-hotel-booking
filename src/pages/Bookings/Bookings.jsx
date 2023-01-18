import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SliderNav from '../../components/SliderNav/SliderNav';
import BookingSummery from '../../components/BookingSummery/BookingSummery';
import './styles.css';

const Booking = () => (
  <div className="booking__container">
    <header className="booking__header">
      <nav>
        <NavigationBar />
      </nav>
      <div className="booking__nav">
        <SliderNav />
      </div>
    </header>
    <div className="container__tables">
      <div className="booking__summery">
        <BookingSummery />
      </div>
    </div>
  </div>
);

export default Booking;
