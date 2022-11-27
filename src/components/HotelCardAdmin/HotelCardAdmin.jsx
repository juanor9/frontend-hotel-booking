import PropTypes from 'prop-types';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import MapPoint from '../../assets/mapPoint.png';

const HotelCardAdmin = ({
  hotelImg, name, place, text, price, finalPrice, feature1, feature2, id,
}) => (
  <section id={id} className="cardHotelAdmin">
    <img className="cardHotelAdmin__figure" alt="hotel" src={hotelImg} />
    <section className="cardHotelAdmin__title">
      <h3 className="cardHotelAdmin__name">{name}</h3>
      <p className="cardHotelAdmin__place"><img alt="map point" src={MapPoint} />{place}</p>
    </section>
    <p className="cardHotelAdmin__description">{text}</p>
    <section className="cardHotelAdmin__bottom">
      <div className="cardHotelAdmin__prices">
        <p className="cardHotelAdmin__priceBefore"><del>${price}</del></p>
        <p className="cardHotelAdmin__priceAfter">${finalPrice}</p>
      </div>
      <div className="cardHotelAdmin__features">
        <div className="cardHotelAdmin__detail">{feature1}</div>
        <div className="cardHotelAdmin__detail">{feature2}</div>
      </div>
    </section>
    <section className="cardHotelAdmin__managment">
      <FontAwesomeIcon className="cardHotelAdmin__icon" icon={faPenToSquare} />
      <FontAwesomeIcon className="cardHotelAdmin__icon" icon={faTrashCan} />
    </section>
  </section>
);

HotelCardAdmin.propTypes = {
  hotelImg: PropTypes.isRequired,
  name: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  finalPrice: PropTypes.number.isRequired,
  feature1: PropTypes.string.isRequired,
  feature2: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default HotelCardAdmin;
