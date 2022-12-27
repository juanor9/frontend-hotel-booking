import './styles.css';
import { useState, useEffect } from 'react';
import { getHotels } from '../../services/hotels';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SliderNav from '../../components/SliderNav/SliderNav';
import HotelFilter from '../../components/HotelFilter/HotelFilter';
import HotelCard from '../../components/HotelCard/HotelCard';
import Filter from '../../components/LatestFilter/Filter';
import HotelsPagination from '../../components/HotelsPagination/HotelsPagination';

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getHotels();
        setHotels(data);
      } catch (error) {
        throw new Error(error);
      }
    };
    getData();
  }, []);
  return (
    <div className="page">
      <section className="page__nav">
        <nav className="page_navbar">
          <NavigationBar />
          <SliderNav />
        </nav>
        <nav>
          <HotelFilter />
        </nav>
      </section>
      <section className="page__body">
        <Filter />
        <section className="page__hotelsList">
          {hotels.map((hotel) => (
            <HotelCard
              hotelImg={hotel.hotelImg}
              name={hotel.name}
              place={hotel.location.city}
              text={hotel.text}
              price={hotel.price}
              finalPrice={hotel.finalPrice}
              feature1={hotel.feature1}
              feature2={hotel.feature2}
              id={hotel.id}
              key={hotel.id}
            />
          ))}
        </section>
        <HotelsPagination />
      </section>
    </div>
  );
};

export default Hotels;
