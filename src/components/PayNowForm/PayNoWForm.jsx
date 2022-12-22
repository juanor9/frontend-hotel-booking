import masterCard from '../../assets/master-card-r.png';
import visa from '../../assets/visa.png';
import americanExpress from '../../assets/american-express.png';
import discover from '../../assets/discover.png';
import cvvCard from '../../assets/cvv-card.jpg';
import useForm from '../../hooks/useForm';
import './styles.css';

const PayNowForm = () => {
  const { form, handleChange } = useForm({});
  const handleSubmit = (event) => {
    event.preventDefault();
    return form;
  };
  return (
    <form className="card-data__form" onSubmit={handleSubmit}>
      <div>
        <p>Name On Card</p>
        <input className="card-data__input" type="text" name="name-on-card" onChange={handleChange} required />
      </div>
      <p>Card Number</p>
      <div className="card-data__cards">
        <input className="card-data__input card-data__no-borde" type="text" name="card-number" onChange={handleChange} required />
        <img className="card-data__img" src={masterCard} alt="mastercard-img" />
        <img className="card-data__img" src={americanExpress} alt="a-express-img" />
        <img className="card-data__img" src={visa} alt="visa-card-img" />
        <img className="card-data__img" src={discover} alt="discover-card" />
      </div>
      <div className="card-data__date">
        <div>
          <p>Month</p>
          <input className="card-data__input card-data__flex" type="text" name="card-number" placeholder="Month..." onChange={handleChange} required />
        </div>
        <div>
          <p>Year</p>
          <input className="card-data__input card-data__flex" type="text" name="card-number" placeholder="Year..." onChange={handleChange} required />
        </div>
        <div>
          <p>Cvv</p>
          <div className="card-data__cards">
            <input className="card-data__input card-data__flex card-data__no-borde" type="text" name="card-number" onChange={handleChange} required />
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
