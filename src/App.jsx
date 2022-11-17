import './componets/NewsList/StylesNews.css';
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
import NewsList from './componets/NewsList/NewsList';

const App = () => (
  <div className="App">
    <header className="App-header">
      <NewsList />
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default App;
