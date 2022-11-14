import './style.css';
import hotel from './hotel.json';
import RoomCard from '../room-card/index';

const HotelRooms = () => (
  <section id="hotel-rooms" className="hotel-rooms">
    <nav>
      <ul className="hotel-rooms__nav-list">
        <li className="hotel-rooms__nav-item hotel-rooms__nav-item--active">Rooms</li>
        <li className="hotel-rooms__nav-item">About</li>
        <li className="hotel-rooms__nav-item">Facility</li>
        <li className="hotel-rooms__nav-item">Location</li>
        <li className="hotel-rooms__nav-item">Reviews</li>
        <li className="hotel-rooms__nav-item">Policies</li>
      </ul>
    </nav>
    <article id="rooms" className="hotel-rooms__list">
      {hotel.rooms.map((e) => (
        <><RoomCard
          key={e.id}
          name={e.name}
          img={e.image}
          bed={e.amenities.beds}
          pool={e.amenities.poolView}
          shower={e.amenities.shower}
          tv={e.amenities.tv}
          couch={e.amenities.couch}
          inclusion={e.inclusion}
          price={e.price}
          offer={e.offer.active}
          offerPrice={e.offer.offerPrice}
        />
          <hr className="hotel-rooms__list-divider" />
        </>
      ))}
    </article>
  </section>
);
export default HotelRooms;
