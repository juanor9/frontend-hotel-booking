import './style.css';
import PropTypes from 'prop-types';

const HotelInfo = (props) => {
  const {
    name,
    address,
    feature1,
    feature2,
  } = props;
  return (
    <section id="hotel-info" className="hotel-info">
      <div className="hotel-info__header">
        <h2 className="hotel-info__name">{name}</h2>
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
  address: PropTypes.string,
  feature1: PropTypes.string.isRequired,
  feature2: PropTypes.string.isRequired,
};
HotelInfo.defaultProps = {
  address: 'No address available',
};
export default HotelInfo;
