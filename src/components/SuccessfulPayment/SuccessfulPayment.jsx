import { Link } from 'react-router-dom';
import van from '../../assets/van.jpg';
import './styles.css';

const SuccessfulPayment = () => (
  <div className="success-component">
    <img className="success-component__img" alt="van" src={van} />
    <h1 className="success-component__title">Payment Successful! Get Ready For Comfortable Stay.</h1>
    <p className="success-component__text">Thank You For Your Payment. We Have Received Your Payment Successfully. We hope you enjoy your stay in our hotel!</p>
    <Link to="/profile"><button className="success-component__button" type="submit">Profile</button></Link>
  </div>
);

export default SuccessfulPayment;
