import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SliderNav from '../../components/SliderNav/SliderNav';
import TravellerInfo from '../../components/TravellerInfo/TavellerInfo';
import BookingSummery from '../../components/BookingSummery/BookingSummery';
import PaymentForm from '../../components/PaymentForm/PaymentForm';
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
      <div className="booking__summery booking__article--left">
        <BookingSummery />
      </div>
      <article className="booking__article">
        <div className="booking__form booking__article--rigth booking__absolute">
          <PaymentForm />
          <div className="booking__form booking__relative">
            <TravellerInfo />
          </div>
        </div>
      </article>
    </div>
  </div>
);

export default Booking;
