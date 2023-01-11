import PropTypes from 'prop-types';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faShower,
  faPersonSwimming as faPool,
  faTv,
  faCouch,
} from '@fortawesome/free-solid-svg-icons';

const RoomCard = (props) => {
  const {
    roomType,
    image,
    bedType,
    amenitiesPool,
    amenitiesShower,
    amenitiesTV,
    amenitiesCouch,
    pricePerNight,
    offerPrice,
  } = props;
  return (
    <section id="room-card" className="room-card">
      <h3 className="room-card__header">{roomType}</h3>
      <div className="room-card__info">
        <article className="room-card__img">
          <picture className="room-card__pic">
            <img src={image} alt="" />
          </picture>
        </article>
        <article className="room-card__amenities">
          <h4>Amenities</h4>
          <ul className="room-card__info-list">
            {bedType ? (
              <li className="room-card__list-item">
                <FontAwesomeIcon icon={faBed} key={`${roomType} bed`} /> {' '}
                <span className="room-card__list-icon">{bedType}</span>
              </li>
            ) : null}
            {amenitiesPool === true ? (
              <li className="room-card__list-item">
                <FontAwesomeIcon icon={faPool} key={`${roomType} pool view`} />
                <span className="room-card__list-icon">Pool view</span>
              </li>
            ) : null}
            {amenitiesShower === true ? (
              <li className="room-card__list-item">
                <FontAwesomeIcon icon={faShower} key={`${roomType} shower`} />
                <span className="room-card__list-icon">Shower</span>
              </li>
            ) : null}
            {amenitiesTV === true ? (
              <li className="room-card__list-item">
                <FontAwesomeIcon icon={faTv} key={`${roomType} tv`} />
                <span className="room-card__list-icon">LCD TV</span>
              </li>
            ) : null}
            {amenitiesCouch === true ? (
              <li className="room-card__list-item">
                <FontAwesomeIcon icon={faCouch} key={`${roomType} couch`} />
                <span className="room-card__list-icon">Couch</span>
              </li>
            ) : null}
          </ul>
        </article>
        {/* <article className="room-card__inclusion">
          <h4>Inclusion</h4>
          <ul className="room-card__info-list">
            {inclusion.map((e) => {
              i += 1;
              return (
                <li className="room-card__list-item">
                  <FontAwesomeIcon icon={faCheck} key={`check${i}`} />{' '}
                  <span className="room-card__list-icon">{e}</span>
                </li>
              );
            })}
          </ul>
          </article> */}
      </div>
      <hr className="room-card__price-divider" />
      <article className="room-card__price">
        { offerPrice ? <div className="room-card__doblePrice"><p className="room-card__old-price"><del>${pricePerNight}</del></p><p className="room-card__current-price">{offerPrice}</p></div> : <p className="room-card__current-price">${pricePerNight}</p> }
        <p className="room-card__pricing">per night</p>
        <button type="button" className="room-card__book-button">
          Book Now
        </button>
      </article>
    </section>
  );
};

RoomCard.propTypes = {
  roomType: PropTypes.string.isRequired,
  image: PropTypes.string,
  bedType: PropTypes.string,
  amenitiesPool: PropTypes.bool,
  amenitiesShower: PropTypes.bool,
  amenitiesTV: PropTypes.bool,
  amenitiesCouch: PropTypes.bool,
  pricePerNight: PropTypes.number.isRequired,
  offerPrice: PropTypes.number,
};
RoomCard.defaultProps = {
  image: './grey.jpg',
  bedType: '',
  amenitiesPool: false,
  amenitiesShower: false,
  amenitiesTV: false,
  amenitiesCouch: false,
  offerPrice: 0,
};

export default RoomCard;
