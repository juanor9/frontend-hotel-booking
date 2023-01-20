import PropTypes from 'prop-types';
import BookingHistoryAdmin from '../BookingHistoryAdmin/BookingHistoryAdmin';

const BookingsPagination = ({
  results, currentPage, maxPages, handleNext, handlePrev,
}) => (
  <section className="pagination__card">
    <section className="page__hotelsList">
      {results.map((booking) => (
        <BookingHistoryAdmin
          name={booking.idHotel.name}
          hotelImg={booking.idHotel.imageProfile}
          checkIn={booking.checkInDate ? booking.checkInDate.toString().slice(0, 10) : null}
          checkOut={booking.checkOutDate ? booking.checkOutDate.toString().slice(0, 10) : null}
          price={booking.offerPrice !== '0' ? booking.offerPrice : booking.pricePerNight}
          guests={booking.guestsNumber}
          id={booking._id}
          key={booking._id}
        />
      ))}
    </section>
    <section className="pagination__buttons">
      <button className="pagination__button" type="submit" onClick={handlePrev}>{'<<'}</button>
      <p className="pagination__currentPage">{currentPage + 1} of {maxPages}</p>
      <button className="pagination__button" type="submit" onClick={handleNext}>{'>>'}</button>
    </section>
  </section>
);

BookingsPagination.propTypes = {
  results: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  currentPage: PropTypes.number.isRequired,
  maxPages: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
};

export default BookingsPagination;
