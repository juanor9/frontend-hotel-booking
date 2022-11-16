import PropTypes from 'prop-types';
import './styles.css';

const OfferCard = ({ title, text, image }) => (
  <div className="card">
    <img className="card__img" alt="offerFood" src={image} />
    <h3 className="card__title">{title}</h3>
    <p className="card__text">{text}</p>
  </div>
);

OfferCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.isRequired,
};

export default OfferCard;
