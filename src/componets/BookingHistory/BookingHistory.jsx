import './styles.css';
import hotelMiami from './images/hotelMiami.jpg';
import hotelBremen from './images/hotelBremen.jpg';

const BookingHistory = () => (
  <div className="card">
    <h2>Bookings</h2>
    <h3 className="card__titleActive">Active</h3>
    <section className="card__activeBookings">
      <img className="card__img" alt="hotel" src={hotelMiami} />
      <section className="card__description">
        <h3>The W South</h3>
        <p className="card__description--gray">25/11/2022 - 27/11/2022</p>
        <p className="card__description--gray">$2300</p>
      </section>
    </section>
    <h3 className="card__titleCompleted">Completed</h3>
    <section className="card__completedBookings">
      <img className="card__img" alt="hotel" src={hotelBremen} />
      <section className="card__description">
        <h3>Radisson</h3>
        <p className="card__description--gray">03/05/2022 - 06/05/2022</p>
        <p className="card__description--gray">$1500</p>
      </section>
    </section>
  </div>
);

export default BookingHistory;
