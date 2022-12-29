import './styles.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHotels } from '../../features/hotels/hotelsSlice';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SliderNav from '../../components/SliderNav/SliderNav';
import HotelFilter from '../../components/HotelFilter/HotelFilter';
import HotelCard from '../../components/HotelCard/HotelCard';
import Filter from '../../components/LatestFilter/Filter';
import HotelsPagination from '../../components/HotelsPagination/HotelsPagination';

const Hotels = () => {
  const { hotels } = useSelector((state) => state.hotels);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotels());
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
              imageProfile={hotel.imageProfile}
              name={hotel.name}
              about={hotel.about}
              pricePerNight={hotel.pricePerNight}
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
