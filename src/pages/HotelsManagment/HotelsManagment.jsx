import './styles.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHotels } from '../../features/hotels/hotelsSlice';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SliderNav from '../../components/SliderNav/SliderNav';
import HotelCardAdmin from '../../components/HotelCardAdmin/HotelCardAdmin';

const HotelsManagment = () => {
  const { hotels } = useSelector((state) => state.hotels);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotels());
  }, []);
  return (
    <div className="hotelsManagment">
      <header className="hotelsManagment__header">
        <NavigationBar />
        <SliderNav />
      </header>
      <section className="hotelsManagment__title">
        <h2>Hotels Managment</h2>
      </section>
      <section className="hotelsManagment__list">
        {
          hotels.map((hotel) => (
            <HotelCardAdmin
              imageProfile={hotel.imageProfile}
              name={hotel.name}
              about={hotel.about}
              pricePerNight={hotel.pricePerNight}
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
