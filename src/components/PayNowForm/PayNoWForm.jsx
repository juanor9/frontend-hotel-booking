import {
  CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements, CardElement,
} from '@stripe/react-stripe-js';
import masterCard from '../../assets/master-card-r.png';
import visa from '../../assets/visa.png';
import americanExpress from '../../assets/american-express.png';
import discover from '../../assets/discover.png';
import cvvCard from '../../assets/cvv-card.jpg';
import './styles.css';

const PayNowForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // eslint-disable-next-line no-unused-vars
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log(error);
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
            <img className="card-data__cvv" src={cvvCard} alt="" />
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
