import './styles.css';
import HotelImg from './images/hotelMiami.jpg';
import HeartIcon from './images/iconHeart.png';
import MapPoint from './images/mapPoint.png';
import Star from './images/star.png';

const HotelCard = () => (
  <div className="card">
    <section className="card__figures">
      <img className="figures__hotel" alt="hotel" src={HotelImg} />
      <img className="figures__icon" alt="icon" src={HeartIcon} />
    </section>
    <section className="card__title">
      <h3 className="title__name">The W South</h3>
      <p className="title__place"><img alt="map point" src={MapPoint} /> Miami</p>
    </section>
    <section className="card__text">
      <p className="text__body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo distinctio, deserunt similique magnam ipsa commodi ea.</p>
      <p className="text__starsRaiting">
        <img alt="stars raiting" src={Star} />
        <img alt="stars raiting" src={Star} />
        <img alt="stars raiting" src={Star} />
        <img alt="stars raiting" src={Star} />
        <img alt="stars raiting" src={Star} className="text__review" />
        26412 review
      </p>
    </section>
    <section className="card__bottom">
      <div className="card__prices">
        <p className="prices__del"><del>$1300</del></p>
        <p className="prices__final">$1245</p>
      </div>
      <div className="card__features">
        <div className="features__detail">Swimming</div>
        <div className="features__detail">Parking</div>
      </div>
    </section>
  </div>
);

export default HotelCard;
