import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MapPoint from '../../assets/mapPoint.png';
import './styles.css';

const HotelCard = ({
  imageProfile, name, about, city, pricePerNight, offerPrice, feature1, feature2, id,
}) => (
  <Link to={`/hotels/${id}`} className="hotel-card">
    <section className="hotel-card__icons">
      <img className="hotel-card__img" alt="hotel" src={imageProfile} />
    </section>
    <section className="hotel-card__header">
      <h3 className="hotel-card__name">{name}</h3>
      <p className="hotel-card__city"><img alt="map point" src={MapPoint} />{city}</p>
    </section>
    <section className="hotel-card__caption">
      <p className="hotel-card__description">{about}</p>
    </section>
    <section className="hotel-card__bottom">
      <div className="hotel-card__prices">
        { offerPrice ? <><p className="hotel-card__price-del"><del>${pricePerNight}</del></p><p className="hotel-card__price-final">{offerPrice}</p></> : <p className="hotel-card__price-del">${pricePerNight}</p> }
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
