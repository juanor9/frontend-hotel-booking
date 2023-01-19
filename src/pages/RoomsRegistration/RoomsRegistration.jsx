import './styles.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRooms } from '../../features/rooms/roomsSlice';
import RoomsForm from '../../components/RoomsForm/RoomsForm';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SliderNav from '../../components/SliderNav/SliderNav';
import RoomCardAdmin from '../../components/RoomCardAdmin/RoomCardAdmin';
import { getHotelById } from '../../features/hotels/hotelsSlice';

const RoomsRegistration = () => {
  const { id } = useParams();
  // const { rooms } = useSelector((state) => state.rooms);
  const { hotels } = useSelector((state) => state.hotels);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotelById(id));
    dispatch(getRooms());
  }, []);
  // console.log(hotels);
  let rooms;
  if (hotels.rooms) {
    rooms = hotels.rooms;
  }
  // const { rooms } = hotels.rooms;
  return (
    <div className="roomsReg">
      <header className="roomsReg__header">
        <NavigationBar />
        <SliderNav />
      </header>
      <section className="roomsReg__hotel">
        <figure>
          <img src={hotels.imageProfile} alt="" />
        </figure>
        <h2>{hotels.name}</h2>
        <p>{hotels.city}, {hotels.country}</p>
        <p>{hotels.address}</p>
      </section>
      <h3 className="roomsReg__title">Rooms Registration Form</h3>
      <section className="roomsReg__form">
        <RoomsForm
          hotelId={id}
        />
      </section>
      <h3 className="roomsReg__title">Rooms List</h3>
      <section className="roomsReg__list">
        {hotels.rooms
          ? (rooms.map((room) => (
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
          )))
          : null}
      </section>
    </div>
  );
};

export default RoomsRegistration;
