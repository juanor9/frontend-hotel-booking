import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getHotel } from '../../features/hotels/hotelsSlice';
import HeartIcon from '../../assets/iconHeart.png';
import MapPoint from '../../assets/mapPoint.png';
import Star from '../../assets/star.png';
import './styles.css';

const HotelCard = () => {
  const { id } = useParams();
  const { hotels } = useSelector((state) => state.hotels);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotel());
  }, []);
  return (
    <Link to={`/hotels/${id}`} className="hotel-card">
      <section className="hotel-card__icons">
        <img className="hotel-card__img" alt="hotel" src={hotels.imageProfile} />
        <img className="hotel-card__icon" alt="icon" src={HeartIcon} />
      </section>
      <section className="hotel-card__header">
        <h3 className="hotel-card__name">{hotels.name}</h3>
        <p className="hotel-card__city"><img alt="map point" src={MapPoint} />Medellin</p>
      </section>
      <section className="hotel-card__caption">
        <p className="hotel-card__description">{hotels.about}</p>
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
          <p className="hotel-card__price-del"><del>${hotels.pricePerNight}</del></p>
          <p className="hotel-card__price-final">${200}</p>
        </div>
        <div className="hotel-card__features">
          <div className="hotel-card__feature-detail">{hotels.feature1}</div>
          <div className="hotel-card__feature-detail">{hotels.feature2}</div>
        </div>
      </section>
    </Link>
  );
};
HotelCard.defaultProps = {
  imageProfile: './grey.jpg',
};

export default HotelCard;
