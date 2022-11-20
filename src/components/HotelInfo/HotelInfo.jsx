import './style.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faFullStar, faShareFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faStar as faEmptyStar } from '@fortawesome/free-regular-svg-icons';

const HotelInfo = (props) => {
  const {
    name,
    rating,
    address,
    features,
  } = props;
  return (
    <section id="hotel-info" className="hotel-info">
      <div className="hotel-info__header">
        <h2 className="hotel-info__name">{name}</h2>
        <p className="hotel-info__rating">
          {[...Array(rating)].map(() => <FontAwesomeIcon icon={faFullStar} />)}
          {[...Array(5 - rating)].map(() => <FontAwesomeIcon icon={faEmptyStar} />)}
        </p>
        <button className="hotel-info__header-button" type="button">
          <FontAwesomeIcon icon={faShareFromSquare} /> Share
        </button>
        <button className="hotel-info__header-button" type="button">
          <FontAwesomeIcon icon={faHeart} /> Save
        </button>
      </div>
      <p className="hotel-info__address">{address}</p>
      <ul className="hotel-info__features">
        {features.map((e) => <li className="hotel-info__feature-item">{e}</li>)}
      </ul>
    </section>
  );
};
HotelInfo.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number,
  address: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string),
};
HotelInfo.defaultProps = {
  rating: 0,
  address: 'No address available',
  features: [''],
};
export default HotelInfo;
