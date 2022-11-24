import PropTypes from 'prop-types';
import './styles.css';

const RegisteredCards = ({ cardLogo, cardNumber, cardCompany }) => (
  <section className="card">
    <div className="card__option">
      <input type="checkbox" />
      <img alt="mastercard" src={cardLogo} className="card__img" />
      <p className="card__optionNumber">{cardNumber}</p>
    </div>
    <div className="card__optionCompany"><p>{cardCompany}</p></div>
  </section>
);

RegisteredCards.propTypes = {
  cardLogo: PropTypes.isRequired,
  cardNumber: PropTypes.string.isRequired,
  cardCompany: PropTypes.string.isRequired,
};

export default RegisteredCards;
