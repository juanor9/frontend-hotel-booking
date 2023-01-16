import {
  CardNumberElement, CardExpiryElement, CardCvcElement, useElements, useStripe,
} from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import { createBooking } from '../../features/bookings/bookingsSlice';
import { generatePayment } from '../../services/bookings';
import masterCard from '../../assets/master-card-r.png';
import visa from '../../assets/visa.png';
import americanExpress from '../../assets/american-express.png';
import discover from '../../assets/discover.png';
import cvvCard from '../../assets/cvv-card.jpg';
import './styles.css';

const PayNowForm = () => {
  const elements = useElements();
  const stripe = useStripe();
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings.bookings);
  const hotels = useSelector((state) => state.hotels.hotels);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement, CardExpiryElement, CardCvcElement),
    });
    if (error) {
      console.error(error);
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        paymentMethod,
        amount: Math.floor(hotels.pricePerNight * 100),
        description: `Hotel ${hotels.name}`,
      }),
    };
    generatePayment(options);
  };

  const makePayment = () => {
    dispatch(createBooking(bookings));
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
        <button className="card-data__btn" onClick={makePayment} type="submit">
          MAKE PAYMENT
        </button>
      </div>
    </form>
  );
};

export default PayNowForm;
