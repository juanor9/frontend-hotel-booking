import { useState } from 'react';
import useForm from '../../hooks/useForm';
import './styles.css';

const TravellerInfo = () => {
  const [visible, setVisible] = useState(true);
  const { form, handleChange } = useForm({});
  const [estadoBoton, setEstadoBoton] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    return form;
  };
  const formVisible = () => {
    if (form.firstname && form.lastname && form.email && form.contact) {
      setEstadoBoton(!estadoBoton);
      setVisible(!visible);
    } else {
      setVisible(visible);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={`${visible ? 'traveller-info__cont' : 'desaparecer'}`}
      >
        <h2>Traveller Information</h2>
        <div className="traveller-info__name">
          <div className="traveller-info__input">
            <p>First Name</p>
            <input className="traveller-info__space" type="text" name="firstname" onChange={handleChange} placeholder="First Name" required />
          </div>
          <div className="traveller-info__input traveller-info__derecho">
            <p>Last Name</p>
            <input className="traveller-info__space" type="text" name="lastname" onChange={handleChange} placeholder="Last Name" required />
          </div>
        </div>
        <div className="traveller-info__input">
          <p>Email Address</p>
          <input className="traveller-info__fact" type="email" name="email" onChange={handleChange} placeholder="Enter Email" required />
        </div>
        <div className="traveller-info__input">
          <p>Contact Info</p>
          <input className="traveller-info__fact" name="contact" onChange={handleChange} placeholder="Contact info" required />
        </div>
        <div className="traveller-info__input">
          <p>Special Request</p>
          <textarea className="traveller-info__fact traveller-info__area" name="request" onChange={handleChange} placeholder="e.g.. early check-in, airport transfer" />
        </div>
        <div className="traveller-info__input">
          <p>Have A Coupon Code</p>
          <div className="traveller-info__name">
            <input className="traveller-info__fact" type="text" name="numcupon" onChange={handleChange} placeholder="Promo Code" />
            <button className="traveller-info__btn-promo" type="button">
              APLAY
            </button>
          </div>
        </div>
        <div className="traveller-info__btn-cont">
          <input
            className="traveller-info__btn"
            type="submit"
            value="PLAY NOW"
            onClick={formVisible}
            disabled={estadoBoton}
          />
        </div>
      </form>
    </div>
  );
};

export default TravellerInfo;
