import PropTypes from 'prop-types';
import './styles.css';
import HeartIcon from '../../assets/iconHeart.png';
import MapPoint from '../../assets/mapPoint.png';
import Star from '../../assets/star.png';

const HotelCard = ({
  hotelImg, name, place, text, reviews, price, finalPrice, feature1, feature2,
}) => (
  <div className="card">
    <section className="card__figures">
      <img className="figures__hotel" alt="hotel" src={hotelImg} />
      <img className="figures__icon" alt="icon" src={HeartIcon} />
    </section>
    <section className="card__title">
      <h3 className="title__name">{name}</h3>
      <p className="title__place"><img alt="map point" src={MapPoint} />{place}</p>
    </section>
    <section className="card__text">
      <p className="text__body">{text}</p>
      <p className="text__starsRaiting">
        <img alt="stars raiting" src={Star} />
        <img alt="stars raiting" src={Star} />
        <img alt="stars raiting" src={Star} />
        <img alt="stars raiting" src={Star} />
        <img alt="stars raiting" src={Star} className="text__review" />
        {reviews} review
      </p>
    </section>
    <section className="card__bottom">
      <div className="card__prices">
        <p className="prices__del"><del>${price}</del></p>
        <p className="prices__final">${finalPrice}</p>
      </div>
      <div className="card__features">
        <div className="features__detail">{feature1}</div>
        <div className="features__detail">{feature2}</div>
      </div>
    </section>
  </div>
);

HotelCard.propTypes = {
  hotelImg: PropTypes.isRequired,
  name: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  reviews: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  finalPrice: PropTypes.number.isRequired,
  feature1: PropTypes.string.isRequired,
  feature2: PropTypes.string.isRequired,
};

export default HotelCard;
