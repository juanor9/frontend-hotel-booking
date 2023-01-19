import './styles.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHotels } from '../../features/hotels/hotelsSlice';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SliderNav from '../../components/SliderNav/SliderNav';
import HotelCardAdmin from '../../components/HotelCardAdmin/HotelCardAdmin';

const HotelsManagment = () => {
  const { hotels } = useSelector((state) => state.hotels);
  const [results, setResults] = useState(hotels);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  useEffect(() => {
    dispatch(getHotels());
  }, []);

  useEffect(() => {
    setResults(!search ? hotels
      : hotels.filter((hotel) => hotel.city.toLowerCase().includes(search.toLocaleLowerCase())));
  });

  return (
    <div className="hotelsManagment">
      <header className="hotelsManagment__header">
        <NavigationBar />
        <SliderNav />
      </header>
      <section className="hotelsManagment__title">
        <h2>Hotels Managment</h2>
      </section>
      <section className="hotelsManagment__filter">
        <p>Filter by City: </p>
        <input value={search} type="text" name="city" onChange={handleChange} />
      </section>
      <section className="hotelsManagment__list">
        {
          results.map((hotel) => (
            <HotelCardAdmin
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
          ))
        }
      </section>
    </div>
  );
};

export default HotelsManagment;
