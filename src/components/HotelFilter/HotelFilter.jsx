import './style.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHotels } from '../../features/hotels/hotelsSlice';
import HotelCard from '../HotelCard/HotelCard';

const HotelFilter = () => {
  const { hotels } = useSelector((state) => state.hotels);
  const [results, setResults] = useState(hotels);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotels());
  }, []);

  const searcher = ({ target }) => {
    setSearch(target.value);
    // eslint-disable-next-line no-console
    console.log(target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setResults(!search ? hotels
        : hotels.filter((hotel) => hotel.city.toLowerCase().includes(search.toLocaleLowerCase())));
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <section id="hotel-filter" className="hotel-filter">
      <form className="hotel-filter__form" onSubmit={handleSubmit}>
        <label htmlFor="city" className="hotel-filter__label">
          Hotel
          <input value={search} className="hotel-filter__input" type="text" name="city" id="city" placeholder="City" onChange={searcher} />
        </label>
        <span className="hotel-filter__divider" />
        <label htmlFor="check-in" className="hotel-filter__label">
          Check-in
          <input className="hotel-filter__input" type="date" name="check-in" id="check-in" />
        </label>
        <span className="hotel-filter__divider hotel-filter__divider--half" />
        <label htmlFor="check-out" className="hotel-filter__label">
          Check-out
          <input className="hotel-filter__input" type="date" name="check-out" id="check-out" />
        </label>
        <span className="hotel-filter__divider" />
        <label htmlFor="guests" className="hotel-filter__label">
          Guests
          <input className="hotel-filter__input" type="number" name="guests" id="guests" placeholder="1" />
        </label>
        <button className="hotel-filter__submit" type="submit">Search</button>
      </form>
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
    </section>
  );
};

export default HotelFilter;
