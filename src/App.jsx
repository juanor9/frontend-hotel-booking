import './componets/NavigationBar/NavigationBar.css';
import NavigationBar from './componets/NavigationBar/NavigationBar';
import OfferCard from './componets/OfferCard/OfferCard';
import OfferImg from './componets/OfferCard/images/offerFood.jpg';
import SuccessfulPayment from './componets/SuccessfulPayment/SuccessfulPayment';
import NewsletterForm from './componets/NewsletterForm/NewsletterForm';

const App = () => (
  <div className="App">
    <SuccessfulPayment />
    <OfferCard title="Food Order" text="Complimantary Breakfast. Use Code RICAFOOD" image={OfferImg} />
    <NavigationBar />
    <NewsletterForm />
  </div>
);

export default App;
