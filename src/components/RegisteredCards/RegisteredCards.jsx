import PropTypes from 'prop-types';
import './styles.css';

const RegisteredCards = ({ cardLogo, cardNumber, cardCompany }) => (
  <section className="payment-card">
    <div className="payment-card__option">
      <input type="checkbox" />
      <img alt="mastercard" src={cardLogo} className="payment-card__img" />
      <p className="payment-card__optionNumber">{cardNumber}</p>
    </div>
    <div className="payment-card__optionCompany"><p>{cardCompany}</p></div>
  </section>
);

RegisteredCards.propTypes = {
  cardLogo: PropTypes.string.isRequired,
  cardNumber: PropTypes.string.isRequired,
  cardCompany: PropTypes.string.isRequired,
};

export default RegisteredCards;
