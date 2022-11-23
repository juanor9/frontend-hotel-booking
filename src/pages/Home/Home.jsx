import Footer from '../../components/Footer/Footer';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import HotelFilter from '../../components/HotelFilter/HotelFilter';
import Explainer from '../../components/Explainer/Explainer';
import data from '../../assets/offer.json';
import OfferView from '../../components/OfferView/OfferView';
import Popular from '../../components/Popular/Popular';
import NewsletterForm from '../../components/NewsletterForm/NewsletterForm';
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
    <section>
      <OfferView />
    </section>
    <h2 className="title__article">
      Most Popular Destination
    </h2>
    <article className="card__ofert">
      {
        window.innerWidth > 768
          ? (
            <div className="card__descktopHome">{
              data.map((e) => (
                <Popular
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
              <Popular
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
    <article>
      <NewsletterForm />
    </article>
    <footer className="card__footer">
      <Footer />
    </footer>
  </div>
);

export default Home;
