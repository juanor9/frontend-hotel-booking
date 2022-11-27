import './styles.css';
import { useEffect, useState } from 'react';
import { getHotels } from '../../services/hotels';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';
import SliderNav from '../../components/SliderNav/SliderNav';
import HotelCardAdmin from '../../components/HotelCardAdmin/HotelCardAdmin';

const HotelsManagment = () => {
  const [hotelsAdmin, setHotelsAdmin] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getHotels();
        setHotelsAdmin(data);
      } catch (error) {
        throw new Error(error);
      }
    };
    getData();
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
          hotelsAdmin.map((hotel) => (
            <HotelCardAdmin
              hotelImg={hotel.image}
              name={hotel.name}
              place={hotel.city}
              text={hotel.description}
              price={hotel.price}
              finalPrice={hotel.offerPrice}
              feature1={hotel.feature1}
              feature2={hotel.feature2}
              id={hotel.id}
              key={hotel.id}
            />
          ))
        }
      </section>
      <Footer />
    </div>
  );
};

export default HotelsManagment;
