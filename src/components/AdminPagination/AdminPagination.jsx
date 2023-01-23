import PropTypes from 'prop-types';
import HotelCardAdmin from '../HotelCardAdmin/HotelCardAdmin';

const AdminPagination = ({
  results, currentPage, maxPages, handleNext, handlePrev,
}) => (
  <section className="pagination__card">
    <section className="page__hotelsList">
      {results.map((hotel) => (
        <HotelCardAdmin
          imageProfile={hotel.imageProfile}
          name={hotel.name}
          about={hotel.about}
          city={hotel.city}
          country={hotel.country}
          address={hotel.address}
          phone={hotel.phone}
          email={hotel.email}
          pricePerNight={hotel.pricePerNight}
          offerPrice={hotel.offerPrice}
          checkin={hotel.checkin}
          checkout={hotel.checkout}
          feature1={hotel.feature1}
          feature2={hotel.feature2}
          id={hotel._id}
          key={hotel._id}
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

AdminPagination.propTypes = {
  results: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  currentPage: PropTypes.number.isRequired,
  maxPages: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
};

export default AdminPagination;
