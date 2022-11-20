import Footer from '../../components/footerInfo/Footer';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import HotelFilter from '../../components/HotelFilter/HotelFilter';
import Explainer from '../../components/Explainer/Explainer';
import OfferCard from '../../components/OfferCard/OfferCard';
import ReadArticles from '../../components/ReadArticles/ReadArticles';
import imgOffer from '../../assets/offerFood.jpg';
import './styles.css';

const Home = () => (
  <div className="card__container">
    <nav className="card__nav">
      <NavigationBar />
    </nav>
    <header className="card__filter">
      <h2 className="title__nav">
        BOOK ROOMS, HOMES & APTS
      </h2>
      <HotelFilter />
    </header>
    <article className="card__ofert">
      <h2 className="title__article">
        Top Offers
      </h2>
      <OfferCard
        title="Food order"
        text="reteret reter"
        image={imgOffer}
      />
    </article>
    <h2 className="title__article">
      Top Offers
    </h2>
    <OfferCard
      title="Food order"
      text="reteret reter"
      image="https://tse4.mm.bing.net/th?id=OIP.YvrLKP2jhEQqlcV0AtI2ngHaFc&pid=Api&P=0"
    />
    <Explainer />
    <ReadArticles
      image="https://tse4.mm.bing.net/th?id=OIP.YvrLKP2jhEQqlcV0AtI2ngHaFc&pid=Api&P=0"
      day="02"
      month="Ene"
      postBy="Julia Holmes"
      text="lorem imsun in dolor"
      headline="lorem impsun lorem impsun "
    />
    <Footer />
  </div>
);

export default Home;
