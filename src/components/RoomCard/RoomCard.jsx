import PropTypes from 'prop-types';
import './style.css';

const RoomCard = (props) => {
  const {
    name,
    img,
    bed,
    pool,
    shower,
    tv,
    couch,
    inclusion,
    price,
    offer,
    offerPrice,
  } = props;
  return (
    <section id="room-card" className="room-card">
      <h3 className="room-card__header">{name}</h3>
      <div className="room-card__info">
        <article className="room-card__img">
          <picture className="room-card__pic">
            <img src={img} alt="" />
          </picture>
        </article>
        <article className="room-card__amenities">
          <h4>Amenities</h4>
          <ul className="room-card__info-list">
            {bed ? (
              <li className="room-card__list-item">
                <span className="room-card__list-icon--bed" />{' '}
                <span className="room-card__list-icon">{bed}</span>
              </li>
            ) : null}
            {pool === true ? (
              <li className="room-card__list-item">
                <span className="room-card__list-icon--pool" />{' '}
                <span className="room-card__list-icon">Pool view</span>
              </li>
            ) : null}
            {shower === true ? (
              <li className="room-card__list-item">
                <span className="room-card__list-icon--shower" />{' '}
                <span className="room-card__list-icon">Shower</span>
              </li>
            ) : null}
            {tv ? (
              <li className="room-card__list-item">
                <span className="room-card__list-icon--tv" />{' '}
                <span className="room-card__list-icon">{tv}</span>
              </li>
            ) : null}
            {couch === true ? (
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
            {inclusion.map((e) => (
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
        {offer === true ? (
          <>
            <p className="room-card__old-price">${price}</p>
            <p className="room-card__current-price">${offerPrice}</p>
            <p className="room-card__pricing">per night</p>
          </>
        ) : (
          <>
            <p className="room-card__current-price">${price}</p>
            <p className="room-card__pricing">per night</p>
          </>
        )}
        <button type="button" className="room-card__book-button">
          Book Now
        </button>
      </article>
    </section>
  );
};

RoomCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
  bed: PropTypes.string,
  pool: PropTypes.bool,
  shower: PropTypes.bool,
  tv: PropTypes.string,
  couch: PropTypes.bool,
  inclusion: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
  offer: PropTypes.bool,
  offerPrice: PropTypes.number,
};
RoomCard.defaultProps = {
  img: './grey.jpg',
  bed: '',
  pool: false,
  shower: false,
  tv: '',
  couch: false,
  offer: false,
  offerPrice: 0,
};
export default RoomCard;
