/* eslint import/no-named-as-default: off */
import {
  CardNumberElement, CardExpiryElement, CardCvcElement, useElements, useStripe,
} from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import createPayment from '../../services/payments';
import masterCard from '../../assets/master-card-r.png';
import visa from '../../assets/visa.png';
import americanExpress from '../../assets/american-express.png';
import discover from '../../assets/discover.png';
import cvvCard from '../../assets/cvv-card.jpg';
import './styles.css';

const PayNowForm = () => {
  const { bookings } = useSelector((state) => state.bookings);
  const elements = useElements();
  const stripe = useStripe();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement, CardExpiryElement, CardCvcElement),
    });

    try {
      if (bookings.offerPrice !== '0') {
        const amount = Math.floor(bookings.offerPrice * 100);
        createPayment(paymentMethod, amount);
        navigate('/success');
      } else {
        const amount = Math.floor(bookings.pricePerNight * 100);
        createPayment(paymentMethod, amount);
        navigate('/success');
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <form className="card-data__form" onSubmit={handleSubmit}>
      <div>
        <p>Name On Card</p>
        <input className="card-data__input card-data__name-card" type="text" name="name-on-card" required />
      </div>
      <p className="">Card Number</p>
      <div className="card-data__cards card-data__name-card">
        <div className="card-data__input card-data__no-borde"><CardNumberElement /></div>
        <img className="card-data__img" src={masterCard} alt="mastercard-img" />
        <img className="card-data__img" src={americanExpress} alt="a-express-img" />
        <img className="card-data__img" src={visa} alt="visa-card-img" />
        <img className="card-data__img" src={discover} alt="discover-card" />
      </div>
      <div className="card-data__date">
        <div>
          <p>Month</p>
          <div className="card-data__input card-data__flex card-data__name-card"><CardExpiryElement /></div>
        </div>
        <div>
          <p>Cvv</p>
          <div className="card-data__cards  lineal">
            <div className="card-data__input card-data__flex card-data__no-borde"><CardCvcElement /></div>
            <img className="card-data__cvv" src={cvvCard} alt="cvv-card" />
          </div>
        </div>
      </div>
      <div className="card-data__btn-cont">
        <button className="card-data__btn" type="submit">
          MAKE PAYMENT
        </button>
      </div>
    </form>
  );
};

export default PayNowForm;
