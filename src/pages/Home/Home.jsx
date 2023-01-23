import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHotels } from '../../features/hotels/hotelsSlice';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import HotelFilter from '../../components/HotelFilter/HotelFilter';
import Explainer from '../../components/Explainer/Explainer';
import OfferView from '../../components/OfferView/OfferView';
import Popular from '../../components/Popular/Popular';
import NewsletterForm from '../../components/NewsletterForm/NewsletterForm';
import ReadArticles from '../../components/ReadArticles/ReadArticles';
import './styles.css';

const Home = () => {
  const { hotels } = useSelector((state) => state.hotels);
  const [width, setWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotels());
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [window.innerWidth]);

  // eslint-disable-next-line no-shadow
  const findCheapest = (hotels) => {
    const sorted = hotels.slice().sort((a, b) => a.pricePerNight - b.pricePerNight);
    return sorted.slice(0, 5);
  };
  const offers = findCheapest(hotels);
  const renderOne = offers.slice(0, 1);
  return (
    <div className="home__container">
      <nav className="home__nav">
        <NavigationBar />
      </nav>
      <header className="card__filter-home">
        <h2 className="title__nav-home">
          BOOK ROOMS, HOMES & APTS
        </h2>
        <HotelFilter />
      </header>
      <section className="offer-view__component">
        <OfferView />
      </section>
      <h2 className="popular-destination__title">
        Most Popular Destination
      </h2>
      <article>
        {
          width > 800
            ? (
              <div className="card__descktopHome">{
                offers.map((offer) => (
                  <Link key={offer._id} className="home-page__link" to={`/hotels/${offer._id}`}>
                    <Popular
                      title={offer.name}
                      image={offer.imageProfile}
                      price={offer.pricePerNight}
                    />
                  </Link>
                ))
              }
              </div>
            ) : (
              <div className="card__mobile">{
                renderOne.map((offer) => (
                  <Link key={offer._id} className="home-page__link" to={`/hotels/${offer._id}`}>
                    <Popular
                      title={offer.name}
                      image={offer.imageProfile}
                      price={offer.pricePerNight}
                    />
                  </Link>
                ))
              }
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
};

export default Home;
