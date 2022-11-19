import Explainer from './componets/Explainer/Explainer';
import './componets/NewsList/StylesNews.css';
import './componets/NavigationBar/NavigationBar.css';
import NavigationBar from './componets/NavigationBar/NavigationBar';
import OfferCard from './componets/OfferCard/OfferCard';
import OfferImg from './componets/OfferCard/images/offerFood.jpg';
import SuccessfulPayment from './componets/SuccessfulPayment/SuccessfulPayment';
import NewsletterForm from './componets/NewsletterForm/NewsletterForm';
import HotelCard from './componets/HotelCard/HotelCard';
import HotelImg from './componets/HotelCard/images/hotelMiami.jpg';
import PerfilMenu from './componets/PerfilMenu/PerfilMenu';
import ImgPerfil from './componets/PerfilMenu/images/perfilImage.jpg';
import UserInfo from './componets/UserInfo/UserInfo';
import RegisterForm from './componets/RegisterForm/RegisterForm';
import RegisteredCards from './componets/RegisteredCards/RegisteredCards';
import MasterCard from './componets/RegisteredCards/images/mastercard.png';
import BookingHistory from './componets/BookingHistory/BookingHistory';
import HotelMiami from './componets/BookingHistory/images/hotelMiami.jpg';
import NewsList from './componets/NewsList/NewsList';
import HotelRooms from './componets/HotelRooms/HotelRooms';
import HotelFilter from './componets/HotelFilter/HotelFilter';
import BookingConfirmationForm from './componets/BookingConfirmationForm/BookingConfirmationForm'

const App = () => (
  <div className="App">
    <Explainer />
    <HotelFilter />
    <SuccessfulPayment />
    <OfferCard
      title="Food Order"
      text="Complimantary Breakfast. Use Code RICAFOOD"
      image={OfferImg}
    />
    <NavigationBar />
    <NewsletterForm />
    <HotelCard
      hotelImg={HotelImg}
      name="The W South"
      place="Miami"
      reviews={26412}
      price={1300}
      finalPrice={1245}
      eature1="Swimming"
      feature2="Parking"
    />
    <BookingConfirmationForm />
    <PerfilMenu
      name="Mark Enderess"
      phone="+91 123 - 456 - 7890"
      email="mark.enderess@mail.com"
      imagePerfil={ImgPerfil}
    />
    <UserInfo
      name="Mark Enderess"
      birthday="25/12/1990"
      gender="Female"
      address="549 Sulphur Springs Road"
      city="Downers Grove, IL"
      zip={60515}
      email="mark.enderess@mail.com"
      phone="+91 123 - 456 - 7890"
      password="************"
    />
    <RegisterForm />
    <RegisteredCards
      cardLogo={MasterCard}
      cardNumber="**** **** **** 1128"
      cardCompany="MasterCard"
    />
    <HotelRooms />
    <NewsList />
    <BookingHistory />
    <HotelMiami />
  </div>
);

export default App;
