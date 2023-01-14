import './StylesPagination.css';
import PropTypes from 'prop-types';
import HotelCard from '../HotelCard/HotelCard';

const HotelsPagination = ({
  results, currentPage, maxPages, handleNext, handlePrev,
}) => (
  <section className="pagination__card">
    <section className="page__hotelsList">
      {results.map((hotel) => (
        <HotelCard
          imageProfile={hotel.imageProfile}
          name={hotel.name}
          about={hotel.about}
          city={hotel.city}
          pricePerNight={hotel.pricePerNight}
          offerPrice={hotel.offerPrice}
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

HotelsPagination.propTypes = {
  results: PropTypes.arrayOf({}).isRequired,
  currentPage: PropTypes.number.isRequired,
  maxPages: PropTypes.number.isRequired,
  handleNext: PropTypes.isRequired,
  handlePrev: PropTypes.isRequired,
};

export default HotelsPagination;
