import React, { useState } from 'react';
import PayNowForm from '../PayNowForm/PayNoWForm';
import './styles.css';

const PaymentForm = () => {
  const [toPay, setToPay] = useState(0);

  return (
    <div className="payment-info__cont">
      <div className="payment-info__reset">
        <h2>Payment Option</h2>
        <button className="payment-info__reset-btn" type="submit" onClick={() => setToPay(0)}>Reset</button>
      </div>
      <div className="payment__btn-container">
        <button className="payment__btn" type="submit" onClick={() => setToPay(1)}>
          <div className={`${toPay === 1 ? 'payment__radio-red' : 'payment__radio'}`}> </div>Debit Card
        </button>
        {
          toPay === 1 && (
            <PayNowForm />
          )
        }
      </div>
      <div className="payment__btn-container">
        <button className="payment__btn" type="submit" onClick={() => setToPay(2)}>
          <div className={`${toPay === 2 ? 'payment__radio-red' : 'payment__radio'}`}> </div>Credit Card
        </button>
        {
          toPay === 2 && (
            <PayNowForm />
          )
        }
      </div>
      <div className="payment__btn-container">
        <button className="payment__btn" type="submit" onClick={() => setToPay(3)}>
          <div className={`${toPay === 3 ? 'payment__radio-red' : 'payment__radio'}`}> </div>Net Banking
        </button>
        {
          toPay === 3 && (
            <p>We are sorry. This functionality is not yet available</p>
          )
        }
      </div>
      <div className="payment__btn-container">
        <button className="payment__btn" type="submit" onClick={() => setToPay(4)}>
          <div className={`${toPay === 4 ? 'payment__radio-red' : 'payment__radio'}`}> </div>My Wallet
        </button>
        {
          toPay === 4 && (
            <p>We are sorry. This functionality is not yet available</p>
          )
        }
      </div>
    </div>
  );
};

export default PaymentForm;
