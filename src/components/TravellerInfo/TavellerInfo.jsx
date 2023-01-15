/* eslint-disable no-const-assign */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../hooks/useForm';
import { captureData } from '../../features/bookings/bookingsSlice';
import './styles.css';

const TravellerInfo = () => {
  const bookings = useSelector((state) => state.bookings);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(true);
  const { form, handleChange } = useForm({});
  const [estadoBoton, setEstadoBoton] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const formVisible = () => {
    if (form.firstnameUser && form.lastnameUser && form.emailUser && form.contactUser) {
      dispatch(captureData({ bookings, ...form }));
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
            <input className="traveller-info__space" type="text" name="firstnameUser" onChange={handleChange} placeholder="First Name" required />
          </div>
          <div className="traveller-info__input traveller-info__derecho">
            <p>Last Name</p>
            <input className="traveller-info__space" type="text" name="lastnameUser" onChange={handleChange} placeholder="Last Name" required />
          </div>
        </div>
        <div className="traveller-info__input">
          <p>Email Address</p>
          <input className="traveller-info__fact" type="email" name="emailUser" onChange={handleChange} placeholder="Enter Email" required />
        </div>
        <div className="traveller-info__input">
          <p>Contact Info</p>
          <input className="traveller-info__fact" name="contactUser" onChange={handleChange} placeholder="Contact info" required />
        </div>
        <div className="traveller-info__input">
          <p>Special Request</p>
          <textarea className="traveller-info__fact traveller-info__area" name="requestUser" onChange={handleChange} placeholder="e.g.. early check-in, airport transfer" />
        </div>
        <div className="traveller-info__input">
          <p>Have A Coupon Code</p>
          <div className="traveller-info__name">
            <input className="traveller-info__fact" type="text" name="numcupon" onChange={handleChange} placeholder="Promo Code" />
            <button className="traveller-info__btn-promo" type="button">
              APPLAY
            </button>
          </div>
        </div>
        <div className="traveller-info__btn-cont">
          <input
            className="traveller-info__btn"
            type="submit"
            value="PAY NOW"
            onClick={formVisible}
            disabled={estadoBoton}
          />
        </div>
      </form>
    </div>
  );
};

export default TravellerInfo;
