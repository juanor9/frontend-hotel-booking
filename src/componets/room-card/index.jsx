/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import './style.css';

const RoomCard = (props) => (
  <section id="room-card" className="room-card">
    <h3 className="room-card__header">{props.name}</h3>
    <div className="room-card__info">
      <article className="room-card__img">
        <picture className="room-card__pic">
          <img src={props.img} alt="" />
        </picture>
      </article>
      <article className="room-card__amenities">
        <h4>Amenities</h4>
        <ul className="room-card__info-list">
          {props.bed ? (
            <li className="room-card__list-item">
              <span className="room-card__list-icon--bed" />{' '}
              <span className="room-card__list-icon">{props.bed}</span>
            </li>
          ) : null}
          {props.pool === true ? (
            <li className="room-card__list-item">
              <span className="room-card__list-icon--pool" />{' '}
              <span className="room-card__list-icon">Pool view</span>
            </li>
          ) : null}
          {props.shower === true ? (
            <li className="room-card__list-item">
              <span className="room-card__list-icon--shower" />{' '}
              <span className="room-card__list-icon">Shower</span>
            </li>
          ) : null}
          {props.tv ? (
            <li className="room-card__list-item">
              <span className="room-card__list-icon--tv" />{' '}
              <span className="room-card__list-icon">{props.tv}</span>
            </li>
          ) : null}
          {props.couch === true ? (
            <li className="room-card__list-item">
              <span className="room-card__list-icon--couch" />{' '}
              <span className="room-card__list-icon">Couch</span>
            </li>
          ) : null}
        </ul>
      </article>
      <article className="room-card__inclusion">
        <h4>Inclusion</h4>
        <ul className="room-card__info-list">
          {props.inclusion.map((e) => (
            <li className="room-card__list-item">
              <span className="room-card__list-icon--check" />{' '}
              <span className="room-card__list-icon">{e}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
    <hr className="room-card__price-divider" />
    <article className="room-card__price">
      {props.offer === true ? (
        <>
          <p className="room-card__old-price">${props.price}</p>
          <p className="room-card__current-price">${props.offerPrice}</p>
          <p className="room-card__pricing">per night</p>
        </>
      ) : (
        <>
          <p className="room-card__current-price">${props.price}</p>
          <p className="room-card__pricing">per night</p>
        </>
      )}
      <button type="button" className="room-card__book-button">
        Book Now
      </button>
    </article>
  </section>
);
export default RoomCard;
