import './componets/NavigationBar/NavigationBar.css';
import NavigationBar from './componets/NavigationBar/NavigationBar';
import OfferCard from './componets/OfferCard/OfferCard';
import OfferImg from './componets/OfferCard/images/offerFood.jpg';
import SuccessfulPayment from './componets/SuccessfulPayment/SuccessfulPayment';

const App = () => (
  <div className="App">
    <SuccessfulPayment />
    <OfferCard title="Food Order" text="Complimantary Breakfast. Use Code RICAFOOD" image={OfferImg} />
    <NavigationBar />
  </div>
);

export default App;
