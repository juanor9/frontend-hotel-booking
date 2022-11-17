import './componets/NavigationBar/NavigationBar.css';
import NavigationBar from './componets/NavigationBar/NavigationBar';
import OfferCard from './componets/OfferCard/OfferCard';
import OfferImg from './componets/OfferCard/images/offerFood.jpg';
import SuccessfulPayment from './componets/SuccessfulPayment/SuccessfulPayment';
import NewsletterForm from './componets/NewsletterForm/NewsletterForm';
import HotelCard from './componets/HotelCard/HotelCard';
import HotelImg from './componets/HotelCard/images/hotelMiami.jpg';
import BookingConfirmationForm from './componets/BookingConfirmationForm/BookingConfirmationForm';
import PerfilMenu from './componets/PerfilMenu/PerfilMenu';
import ImgPerfil from './componets/PerfilMenu/images/perfilImage.jpg';
import UserInfo from './componets/UserInfo/UserInfo';
import RegisterForm from './componets/RegisterForm/RegisterForm';
import RegisteredCards from './componets/RegisteredCards/RegisteredCards';
import MasterCard from './componets/RegisteredCards/images/mastercard.png';
import BookingHistory from './componets/BookingHistory/BookingHistory';
import HotelMiami from './componets/BookingHistory/images/hotelMiami.jpg';

const App = () => (
  <div className="App">
    <SuccessfulPayment />
    <OfferCard title="Food Order" text="Complimantary Breakfast. Use Code RICAFOOD" image={OfferImg} />
    <NavigationBar />
    <NewsletterForm />
    <HotelCard hotelImg={HotelImg} name="The W South" place="Miami" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo distinctio, deserunt similique magnam ipsa commodi ea." reviews={26412} price={1300} finalPrice={1245} feature1="Swimming" feature2="Parking" />
    <BookingConfirmationForm />
    <PerfilMenu name="Mark Enderess" phone="+91 123 - 456 - 7890" email="mark.enderess@mail.com" imagePerfil={ImgPerfil} />
    <UserInfo name="Mark Enderess" birthday="25/12/1990" gender="Female" address="549 Sulphur Springs Road" city="Downers Grove, IL" zip={60515} email="mark.enderess@mail.com" phone="+91 123 - 456 - 7890" password="************" />
    <RegisterForm />
    <RegisteredCards cardLogo={MasterCard} cardNumber="**** **** **** 1128" cardCompany="MasterCard" />
    <BookingHistory hotelImg={HotelMiami} name="The W South" checkIn="25/11/2022" checkOut="27/11/2022" price={2300} />
  </div>
);

export default App;
