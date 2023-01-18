import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SliderNav from '../../components/SliderNav/SliderNav';
import PaymentForm from '../../components/PaymentForm/PaymentForm';
import './styles.css';

const BookingPayment = () => (
  <div className="bookingPayment__container">
    <header className="bookingPayment__header">
      <nav>
        <NavigationBar />
      </nav>
      <div className="bookingPayment__nav">
        <SliderNav />
      </div>
    </header>
    <div className="bookingPayment__options">
      <PaymentForm />
    </div>
  </div>
);

export default BookingPayment;
