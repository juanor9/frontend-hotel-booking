import PropTypes from 'prop-types';
import './styles.css';

const OfferCard = ({ title, text, image }) => (
  <div className="top-offer__card">
    <img className="offer__img" alt="offerFood" src={image} />
    <h3 className="offer__title">{title}</h3>
    <p className="offer__text">{text}</p>
  </div>
);

OfferCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.isRequired,
};

export default OfferCard;
