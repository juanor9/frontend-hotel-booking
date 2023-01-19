import PropTypes from 'prop-types';
import './styles.css';

const HotelsLocation = ({ country, city, address }) => (
  <section className="hotelsLocation">
    <div className="hotelsLocation__div--first">
      <h3 className="hotelsLocation__title">Country:</h3>
      <p className="hotelsLocation__description">{country}</p>
    </div>
    <div className="hotelsLocation__div">
      <h3 className="hotelsLocation__title">City:</h3>
      <p className="hotelsLocation__description">{city}</p>
    </div>
    <div className="hotelsLocation__div">
      <h3 className="hotelsLocation__title">Address:</h3>
      <p className="hotelsLocation__description">{address}</p>
    </div>
  </section>
);

HotelsLocation.propTypes = {
  country: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default HotelsLocation;
