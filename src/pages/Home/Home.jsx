import Footer from '../../components/Footer/Footer';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import HotelFilter from '../../components/HotelFilter/HotelFilter';
import Explainer from '../../components/Explainer/Explainer';
import OfferCard from '../../components/OfferCard/OfferCard';
import data from '../../assets/offer.json';
import imgOffer from '../../assets/offerFood.jpg';
import './styles.css';

const Home = () => (
  <div className="card__container grid">
    <nav className="card__nav">
      <NavigationBar />
    </nav>
    <header className="card__filterHome">
      <h2 className="title__nav">
        BOOK ROOMS, HOMES & APTS
      </h2>
      <HotelFilter />
    </header>
    <article className="card__ofert">
      <h2 className="title__article">
        Top Offers
      </h2>
      {
        window.innerWidth > 768
          ? (
            <div className="card__descktopHome">{
              data.map((e) => (
                <OfferCard
                  key={e.id}
                  title={e.title}
                  text={e.text}
                  image={imgOffer}
                />
              ))
            }
            </div>
          ) : (
            <div className="card__mobile">
              <OfferCard
                title="Hotel Booking"
                text="Avail hot deals on hotel"
                image={imgOffer}
              />
            </div>
          )
      }
    </article>
    <h2 className="title__article">
      Most Popular Destination
    </h2>
    <article className="card__ofert">
      {
        window.innerWidth > 768
          ? (
            <div className="card__descktopHome">{
              data.map((e) => (
                <OfferCard
                  key={e.id}
                  title={e.title}
                  text={e.text}
                  image="https://tse1.mm.bing.net/th?id=OIP.8ScCX1fIM6a75Vhi4aEAzAHaE0&pid=Api&P=0"
                />
              ))
            }
            </div>
          ) : (
            <div className="card__mobile">
              <OfferCard
                title="Hotel Booking"
                text="Avail hot deals on hotel"
                image="https://tse1.mm.bing.net/th?id=OIP.8ScCX1fIM6a75Vhi4aEAzAHaE0&pid=Api&P=0"
              />
            </div>
          )
      }
    </article>
    <section className="card__explainer">
      <Explainer />
    </section>
    <footer className="card__footer">
      <Footer />
    </footer>
  </div>
);

export default Home;
