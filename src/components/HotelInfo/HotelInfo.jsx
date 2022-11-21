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
  let i = 0;
  return (
    <section id="hotel-info" className="hotel-info">
      <div className="hotel-info__header">
        <h2 className="hotel-info__name">{name}</h2>
        <p className="hotel-info__rating">
          {
          [...Array(rating)].map(() => {
            i += 1;
            return (<FontAwesomeIcon icon={faFullStar} key={`star${i}`} />);
          })
}
          {[...Array(5 - rating)].map(() => {
            i += 1;
            return (<FontAwesomeIcon icon={faEmptyStar} key={`empty-star${i}`} />);
          })}
        </p>
        <button className="hotel-info__header-button" type="button">
          <FontAwesomeIcon icon={faShareFromSquare} key="share" /> Share
        </button>
        <button className="hotel-info__header-button" type="button">
          <FontAwesomeIcon icon={faHeart} key="save" /> Save
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
