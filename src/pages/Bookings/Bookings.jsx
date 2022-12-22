import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SliderNav from '../../components/SliderNav/SliderNav';
import TravellerInfo from '../../components/TravellerInfo/TavellerInfo';
import BookingSummery from '../../components/BookingSummery/BookingSummery';
import PaymentForm from '../../components/PaymentForm/PaymentForm';
import './styles.css';

const Booking = () => {
  const reservationInformation = {
    image: 'https://tse4.mm.bing.net/th?id=OIP.h-R1e474we3Kw27WDmz-zwHaEK&pid=Api&P=0',
    hotelDescription: 'Buena vista',
    nameHotel: 'Hotel buena vista',
    city: 'Pereira',
    country: 'Colombia',
    checkIn: '2022-12-22',
    checkOut: '2022-12-25',
    checkInTime: '06:30:00',
    checkOutTime: '01:00:00',
    guestNumber: '2',
    typeOfRoom: 'Suit',
    nightsNomber: '3 Night',
    basePrice: '$ 3000',
    promoDiscount: '$ 200',
    taxes: '$ 50',
  };
  return (
    <>
      <header className="booking__container">
        <nav>
          <NavigationBar />
        </nav>
        <div className="booking__nav">
          <SliderNav />
        </div>
      </header>
      <div className="formularios">
        <div className="booking__summery booking__article--left">
          <BookingSummery reservationInformation={reservationInformation} />
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
    </>
  );
};

export default Booking;
