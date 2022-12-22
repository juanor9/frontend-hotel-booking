import './styles.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotels } from '../../features/hotels/hotelsSlice';

import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SliderNav from '../../components/SliderNav/SliderNav';
import HotelFilter from '../../components/HotelFilter/HotelFilter';
import HotelCard from '../../components/HotelCard/HotelCard';
import Filter from '../../components/LatestFilter/Filter';
import HotelsPagination from '../../components/HotelsPagination/HotelsPagination';

import HotelsList from '../../assets/hotelsList.json';

const Hotels = () => {
  const { hotels } = useSelector((state) => state.hotels);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHotels());
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
              name={hotel.name}
              place={hotel.location.city}
              text={hotel.about}
            />
          ))}

          {
            HotelsList.map((hotel) => (
              <HotelCard
                hotelImg={hotel.hotelImg}
                name={hotel.name}
                place={hotel.place}
                text={hotel.text}
                reviews={hotel.reviews}
                price={hotel.price}
                finalPrice={hotel.finalPrice}
                feature1={hotel.feature1}
                feature2={hotel.feature2}
                key={hotel.id}
                id={hotel.id}
              />
            ))
          }
        </section>
        <HotelsPagination />
      </section>
    </div>
  );
};

export default Hotels;
