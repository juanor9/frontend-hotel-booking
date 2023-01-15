import { useParams } from 'react-router-dom';
import {
  faBed,
  faShower,
  faPersonSwimming as faPool,
  faTv,
  faCouch,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { getHotel } from '../../features/hotels/hotelsSlice';
import './style.css';

const RoomCard = () => {
  const { hotels } = useSelector((state) => state.hotels);
  const { id } = useParams;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotel(id));
  }, [getHotel]);

  const handleSail = () => {
    alert('please fill in all the fields of the form');
  };
  return (
    <section id="room-card" className="room-card">
      <h3 className="room-card__header">{hotels.roomType}</h3>
      <div className="room-card__info">
        <article className="room-card__img">
          <picture className="room-card__pic">
            <img src={hotels.rooms} alt="" />
          </picture>
        </article>
        <article className="room-card__amenities">
          <h4>Amenities</h4>
          <ul className="room-card__info-list">
            {hotels.bedType ? (
              <li className="room-card__list-item">
                <FontAwesomeIcon icon={faBed} key={`${hotels.roomType} bed`} /> {' '}
                <span className="room-card__list-icon">{hotels.bedType}</span>
              </li>
            ) : null}
            {hotels.amenitiesPool === true ? (
              <li className="room-card__list-item">
                <FontAwesomeIcon icon={faPool} key={`${hotels.roomType} pool view`} />
                <span className="room-card__list-icon">Pool view</span>
              </li>
            ) : null}
            {hotels.amenitiesShower === true ? (
              <li className="room-card__list-item">
                <FontAwesomeIcon icon={faShower} key={`${hotels.roomType} shower`} />
                <span className="room-card__list-icon">Shower</span>
              </li>
            ) : null}
            {hotels.amenitiesTV === true ? (
              <li className="room-card__list-item">
                <FontAwesomeIcon icon={faTv} key={`${hotels.roomType} tv`} />
                <span className="room-card__list-icon">LCD TV</span>
              </li>
            ) : null}
            {hotels.amenitiesCouch === true ? (
              <li className="room-card__list-item">
                <FontAwesomeIcon icon={faCouch} key={`${hotels.roomType} couch`} />
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
        { hotels.offerPrice ? <div className="room-card__doblePrice"><p className="room-card__old-price"><del>${hotels.pricePerNight}</del></p><p className="room-card__current-price">{hotels.offerPrice}</p></div> : <p className="room-card__current-price">${hotels.pricePerNight}</p> }
        <p className="room-card__pricing">per night</p>
        <button onClick={handleSail} type="button" className="room-card__book-button">
          Book Now
        </button>
      </article>
    </section>
  );
};

export default RoomCard;
