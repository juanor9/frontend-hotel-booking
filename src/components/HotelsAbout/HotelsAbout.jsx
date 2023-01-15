import PropTypes from 'prop-types';
import './styles.css';

const HotelsAbout = ({ about }) => (
  <section className="hotelsAbout">
    <h3 className="hotelsAbout__title">Hotel Description: </h3>
    <p className="hotelsAbout__description">{about}</p>
  </section>
);

HotelsAbout.propTypes = {
  about: PropTypes.string.isRequired,
};

export default HotelsAbout;
