import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getHotels } from '../../features/hotels/hotelsSlice';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SliderNav from '../../components/SliderNav/SliderNav';
import HotelFilter from '../../components/HotelFilter/HotelFilter';
import HotelCard from '../../components/HotelCard/HotelCard';

const HotelsFiltered = () => {
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
    <div className="pageHotelsFiltered">
      <section className="pageHotelsFiltered__nav">
        <nav className="pageHotelsFiltered_navbar">
          <NavigationBar />
          <SliderNav />
        </nav>
        <nav>
          <HotelFilter />
        </nav>
      </section>
      <section className="pageHotelsFiltered__body">
        <section className="pageHotelsFiltered__hotelsList">
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
      </section>
    </div>
  );
};

export default HotelsFiltered;
