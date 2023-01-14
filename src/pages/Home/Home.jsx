import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Explainer from '../../components/Explainer/Explainer';
import data from '../../assets/offer.json';
import OfferView from '../../components/OfferView/OfferView';
import Popular from '../../components/Popular/Popular';
import NewsletterForm from '../../components/NewsletterForm/NewsletterForm';
import ReadArticles from '../../components/ReadArticles/ReadArticles';
import HotelFilter from '../../components/HotelFilter/HotelFilter';
import './styles.css';

const Home = () => (
  <div className="home__container">
    <nav className="home__nav">
      <NavigationBar />
    </nav>
    <header className="card__filter-home">
      <h2 className="title__nav-home">
        BOOK ROOMS, HOMES & APTS
        <HotelFilter />
      </h2>
    </header>
    <section className="offer-view__component">
      <OfferView />
    </section>
    <h2 className="popular-destination__title">
      Most Popular Destination
    </h2>
    <article>
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
              <Popular
                title="Hotel Booking"
                text="Avail hot deals on hotel"
                image="https://tse1.mm.bing.net/th?id=OIP.8ScCX1fIM6a75Vhi4aEAzAHaE0&pid=Api&P=0"
              />
            </div>
          )
      }
    </article>
    <section className="explainer__component">
      <Explainer />
    </section>
    <section className="read-article__component">
      <article>
        <ReadArticles
          image="https://tse4.mm.bing.net/th?id=OIP.RGktba09JIpAQ29ri0leSQHaHJ&pid=Api&P=0"
          day="02"
          month="JUN"
          postBy="Regina Tylor"
          text="Lorem ipsum dolor sit amet consectetur "
          headline="neque minus, eveniet hic modi obcaecati expedita delectus mollitia! Blanditiis"
        />
      </article>
      <article className="read-article__descktop">
        <ReadArticles
          image="https://tse4.mm.bing.net/th?id=OIP.JVqWEQTJbh_NW4PbHRZC7AHaHa&pid=Api&P=0"
          day="02"
          month="JUN"
          postBy="Regina Tylor"
          text="Lorem ipsum dolor sit amet consectetur "
          headline="neque minus, eveniet hic modi obcaecati expedita delectus mollitia! Blanditiis"
        />
      </article>
    </section>
    <article className="newsletter-form__component">
      <NewsletterForm />
    </article>
  </div>
);

export default Home;
