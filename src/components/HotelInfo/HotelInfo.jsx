import './style.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faFullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faEmptyStar } from '@fortawesome/free-regular-svg-icons';

const HotelInfo = (props) => {
  const {
    name,
    rating,
    address,
    feature1,
    feature2,
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
      </div>
      <p className="hotel-info__address">{address}</p>
      <ul className="hotel-info__features">
        <li className="hotel-info__feature-item">{feature1}</li>
        <li className="hotel-info__feature-item">{feature2}</li>
      </ul>
    </section>
  );
};
HotelInfo.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number,
  address: PropTypes.string,
  feature1: PropTypes.string.isRequired,
  feature2: PropTypes.string.isRequired,
};
HotelInfo.defaultProps = {
  rating: 0,
  address: 'No address available',
};
export default HotelInfo;
