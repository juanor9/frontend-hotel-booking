import van from '../../assets/van.jpg';
import './styles.css';

const SuccessfulPayment = () => (
  <div className="success-component">
    <img className="success-component__img" alt="van" src={van} />
    <h1 className="success-component__title">Payment Successful! Get Ready For Comfortable Stay.</h1>
    <p className="success-component__text">Thank You For Your Payment. We Have Received Your Payment Successfully. You Will Get An Email Invoice Soon!</p>
  </div>
);

export default SuccessfulPayment;
