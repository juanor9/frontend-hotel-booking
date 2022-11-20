import Footer from '../../components/footerInfo/Footer';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import HotelFilter from '../../components/HotelFilter/HotelFilter';
import Explainer from '../../components/Explainer/Explainer';
import OfferCard from '../../components/OfferCard/OfferCard';

const Home = () => (
  <div>
    <NavigationBar />
    <HotelFilter />
    <OfferCard
      title="ttttttttttttttttttttt"
      text="reteret reter"
      image="https://tse4.mm.bing.net/th?id=OIP.YvrLKP2jhEQqlcV0AtI2ngHaFc&pid=Api&P=0"
    />
    <Explainer />
    <Footer />
  </div>
);

export default Home;
