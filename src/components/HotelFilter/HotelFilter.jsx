import './style.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createBooking } from '../../features/bookings/bookingsSlice';
import useForm from '../../hooks/useForm';

const HotelFilter = () => {
  const { form, handleChange } = useForm({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(createBooking(form));
      navigate('/hotels-filtered');
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <section id="hotel-filter" className="hotel-filter">
      <form className="hotel-filter__form" onSubmit={handleSubmit}>
        <label htmlFor="city" className="hotel-filter__label">
          Hotel
          <input className="hotel-filter__input" type="text" name="city" id="city" placeholder="City" required onChange={handleChange} />
        </label>
        <span className="hotel-filter__divider" />
        <label htmlFor="check-in" className="hotel-filter__label">
          Check-in
          <input className="hotel-filter__input" type="date" name="checkInDate" id="check-in" required onChange={handleChange} />
        </label>
        <span className="hotel-filter__divider hotel-filter__divider--half" />
        <label htmlFor="check-out" className="hotel-filter__label">
          Check-out
          <input className="hotel-filter__input" type="date" name="checkOutDate" id="check-out" required onChange={handleChange} />
        </label>
        <span className="hotel-filter__divider" />
        <label htmlFor="guests" className="hotel-filter__label">
          Guests
          <input className="hotel-filter__input" type="number" name="guestsNumber" id="guests" placeholder="1" required onChange={handleChange} />
        </label>
        <button className="hotel-filter__submit" type="submit">Search</button>
      </form>
    </section>
  );
};

export default HotelFilter;
