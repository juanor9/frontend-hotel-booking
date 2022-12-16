import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SliderNav from '../../components/SliderNav/SliderNav';
import TravellerInfo from '../../components/TravellerInfo/TavellerInfo';
import BookingSummery from '../../components/BookingSummery/BookingSummery';
import './styles.css';

const Booking = () => (
  <>
    <header className="booking__container">
      <nav>
        <NavigationBar />
      </nav>
      <div className="booking__nav">
        <SliderNav />
      </div>
    </header>
    <article className="booking__article">
      <div className="booking__form booking__article--left">
        <BookingSummery />
      </div>
      <div className="booking__form booking__article--rigth">
        <TravellerInfo />
      </div>
    </article>
  </>

);

export default Booking;
