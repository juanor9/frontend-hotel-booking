import van from '../../assets/van.jpg';
import './styles.css';

const SuccessfulPayment = () => (
  <div className="card">
    <img className="card__img" alt="van" src={van} />
    <h1 className="card__title">Payment Successful! Get Ready For Comfortable Stay.</h1>
    <p className="card__text">Thank You For Your Payment. We Have Received Your Payment Successfully. Your Transaction ID Is {123456712155215}, You Will Get An Email Invoice Soon!</p>
    <button className="card__button" type="submit">Download Invoice</button>
  </div>
);

export default SuccessfulPayment;
