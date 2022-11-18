import './style.css';

const HotelFilter = () => (
  <section id="hotel-filter" className="hotel-filter">
    <form className="hotel-filter__form">
      <label htmlFor="city" className="hotel-filter__label">
        Hotel
        <input className="hotel-filter__input" type="text" name="city" id="city" placeholder="City" />
      </label>
      <span className="hotel-filter__divider" />
      <label htmlFor="check-in" className="hotel-filter__label">
        Check-in
        <input className="hotel-filter__input" type="date" name="check-in" id="check-in" />
      </label>
      <span className="hotel-filter__divider hotel-filter__divider--half" />
      <label htmlFor="check-out" className="hotel-filter__label">
        Check-out
        <input className="hotel-filter__input" type="date" name="check-out" id="check-out" />
      </label>
      <span className="hotel-filter__divider" />
      <label htmlFor="guests" className="hotel-filter__label">
        Guests
        <input className="hotel-filter__input" type="number" name="guests" id="guests" placeholder="1" />
      </label>
      <button className="hotel-filter__submit" type="submit">Search</button>
    </form>
  </section>
);
export default HotelFilter;
