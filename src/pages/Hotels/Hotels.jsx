import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
// componentes
import { getHotels } from '../../features/hotels/hotelsSlice';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SliderNav from '../../components/SliderNav/SliderNav';
import HotelFilter from '../../components/HotelFilter/HotelFilter';
import HotelsPagination from '../../components/HotelsPagination/HotelsPagination';
import HotelCard from '../../components/HotelCard/HotelCard';

const Hotels = () => {
  const { city } = useSelector((state) => state.bookings.bookings);
  const { hotels } = useSelector((state) => state.hotels);
  const [results, setResults] = useState(hotels);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotels());
  }, []);

  useEffect(() => {
    setSearch(city);
  });

  useEffect(() => {
    setResults(!search ? hotels
      : hotels.filter((hotel) => hotel.city.toLowerCase().includes(search.toLocaleLowerCase())));
  });

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
        <section className="page__hotelsList">
          {results.map((hotel) => (
            <HotelCard
              imageProfile={hotel.imageProfile}
              name={hotel.name}
              about={hotel.about}
              city={hotel.city}
              pricePerNight={hotel.pricePerNight}
              offerPrice={hotel.offerPrice}
              feature1={hotel.feature1}
              feature2={hotel.feature2}
              id={hotel._id}
              key={hotel._id}
            />
          ))}
        </section>
        <HotelsPagination />
      </section>
    </div>
  );
};

export default Hotels;
