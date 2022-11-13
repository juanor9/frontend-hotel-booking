import './style.css';
import roomImg from './hotel-2037166_1280.jpg';

const RoomCard = () => (
  <section id="room-card" className="room-card">
    <h3 className="room-card__header">Room Name</h3>
    <div className="room-card__info">
      <article className="room-card__img">
        <picture className="room-card__pic">
          <img src={roomImg} alt="" />
        </picture>
      </article>
      <article className="room-card__amenities">
        <h4>Amenities</h4>
        <ul className="room-card__info-list">
          <li className="room-card__list-item">
            <span className="room-card__list-icon--bed" />{' '}
            <span className="room-card__list-icon">King bed</span>
          </li>
          <li className="room-card__list-item">
            <span className="room-card__list-icon--pool" />{' '}
            <span className="room-card__list-icon">Pool view</span>
          </li>
          <li className="room-card__list-item">
            <span className="room-card__list-icon--shower" />{' '}
            <span className="room-card__list-icon">Shower</span>
          </li>
          <li className="room-card__list-item">
            <span className="room-card__list-icon--tv" />{' '}
            <span className="room-card__list-icon">LCD TV</span>
          </li>
        </ul>
      </article>
      <article className="room-card__inclusion">
        <h4>Inclusion</h4>
        <ul className="room-card__info-list">
          <li className="room-card__list-item">
            <span className="room-card__list-icon--check" />{' '}
            <span className="room-card__list-icon">Wi-Fi</span>
          </li>
          <li className="room-card__list-item">
            <span className="room-card__list-icon--check" />{' '}
            <span className="room-card__list-icon">Breakfast</span>
          </li>
          <li className="room-card__list-item">
            <span className="room-card__list-icon--check" />{' '}
            <span className="room-card__list-icon">Free cancelation</span>
          </li>
        </ul>
      </article>
    </div>
    <hr className="room-card__divider" />
    <article className="room-card__price">
      <p className="room-card__old-price">$1250</p>
      <p className="room-card__current-price">$1000</p>
      <p className="room-card__pricing">per night</p>
      <button type="button" className="room-card__book-button">
        Book Now
      </button>
    </article>
  </section>
);
export default RoomCard;
