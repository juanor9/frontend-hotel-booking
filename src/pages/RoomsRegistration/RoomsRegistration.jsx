import './styles.css';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getHotelById } from '../../features/hotels/hotelsSlice';
import RoomsForm from '../../components/RoomsForm/RoomsForm';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SliderNav from '../../components/SliderNav/SliderNav';
import RoomCardAdmin from '../../components/RoomCardAdmin/RoomCardAdmin';

const RoomsRegistration = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    rooms,
    name,
    imageProfile,
    country,
    city,
    address,
  } = useSelector((state) => state.hotels.hotels);

  useEffect(() => {
    dispatch(getHotelById(id));
  }, []);

  return (
    <div className="roomsReg">
      <header className="roomsReg__header">
        <NavigationBar />
        <SliderNav />
      </header>
      <section className="roomsReg__hotel">
        <figure className="roomsReg__hotel-figure">
          <img className="roomsReg__hotel-image" src={imageProfile} alt="" />
        </figure>
        <div>
          <h2>{name}</h2>
          <p>{city}, {country}</p>
          <p>{address}</p>
        </div>
      </section>
      <h3 className="roomsReg__title">Rooms Registration Form</h3>
      <section className="roomsReg__form">
        <RoomsForm hotelID={id} />
      </section>
      <h3 className="roomsReg__title">Rooms List</h3>
      {
          rooms !== undefined
            ? (
              <section className="roomsReg__list">
                {
            rooms.map((room) => (
              <RoomCardAdmin
                roomType={room.roomType}
                image={room.image}
                bedType={room.bedType}
                amenitiesCouch={room.amenitiesCouch}
                amenitiesPool={room.amenitiesPool}
                amenitiesShower={room.amenitiesShower}
                amenitiesTV={room.amenitiesTV}
                pricePerNight={room.pricePerNight}
                offerPrice={room.offerPrice}
                id={room._id}
                key={room._id}
              />
            ))
            }
              </section>
            ) : null
      }
      <Link to="/profile"><button type="submit">Back</button></Link>
    </div>
  );
};

export default RoomsRegistration;
