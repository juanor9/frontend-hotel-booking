import './styles.css';
import MasterCard from './images/mastercard.png';

const RegisteredCards = () => (
  <div className="card">
    <h2>Cards & Payments Methods</h2>
    <section className="card__option">
      <div className="card__optionCard">
        <input type="checkbox" />
        <img alt="mastercard" src={MasterCard} className="card__img" />
        <p className="card__optionNumber">**** **** **** 1128</p>
      </div>
      <div className="card__optionCompany"><p>MasterCard</p></div>
    </section>
    <button className="card__button" type="submit">Edit</button>
  </div>
);

export default RegisteredCards;
