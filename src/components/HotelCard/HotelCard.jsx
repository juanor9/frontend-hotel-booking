import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeartIcon from '../../assets/iconHeart.png';
import MapPoint from '../../assets/mapPoint.png';
import Star from '../../assets/star.png';
import './styles.css';

const HotelCard = ({
  imageProfile, name, about, city, pricePerNight, offerPrice, feature1, feature2, id,
}) => (
  <Link to={`/hotel/${id}`} className="hotel-card">
    <section className="hotel-card__icons">
      <img className="hotel-card__img" alt="hotel" src={imageProfile} />
      <img className="hotel-card__icon" alt="icon" src={HeartIcon} />
    </section>
    <section className="hotel-card__header">
      <h3 className="hotel-card__name">{name}</h3>
      <p className="hotel-card__city"><img alt="map point" src={MapPoint} />{city}</p>
    </section>
    <section className="hotel-card__caption">
      <p className="hotel-card__description">{about}</p>
      <p className="hotel-card__raiting">
        <img alt="stars raiting" src={Star} />
        <img alt="stars raiting" src={Star} />
        <img alt="stars raiting" src={Star} />
        <img alt="stars raiting" src={Star} />
        <img
          alt="stars raiting"
          src={Star}
          className="hotel-card__reviews"
        />
        {122222} reviews
      </p>
    </section>
    <section className="hotel-card__bottom">
      <div className="hotel-card__prices">
        <p className="hotel-card__price-del"><del>${pricePerNight}</del></p>
        <p className="hotel-card__price-final">${offerPrice}</p>
      </div>
      <div className="hotel-card__features">
        <div className="hotel-card__feature-detail">{feature1}</div>
        <div className="hotel-card__feature-detail">{feature2}</div>
      </div>
    </section>
  </Link>
);

HotelCard.propTypes = {
  imageProfile: PropTypes.string,
  name: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  pricePerNight: PropTypes.number.isRequired,
  offerPrice: PropTypes.number,
  feature1: PropTypes.string.isRequired,
  feature2: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

HotelCard.defaultProps = {
  imageProfile: './grey.jpg',
  offerPrice: 0,
};

export default HotelCard;
