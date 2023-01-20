import './styles.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookings } from '../../features/bookings/bookingsSlice';
import BookingsPagination from '../BookingsPagination/BookingsPagination';

const AdminBookings = () => {
  const { bookings } = useSelector((state) => state.bookings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookings());
  }, []);

  const bookingsPerPage = 3;
  const maxPages = Math.floor(bookings.length / bookingsPerPage);
  const [items, setItems] = useState([...bookings].splice(0, bookingsPerPage));
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    const totalHotels = bookings.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * bookingsPerPage;
    if (firstIndex === totalHotels) return;

    setItems([...bookings].splice(firstIndex, bookingsPerPage));
    setCurrentPage(nextPage);
  };

  const handlePrev = () => {
    const prevPage = currentPage - 1;
    const firstIndex = prevPage * bookingsPerPage;
    if (prevPage < 0) return;

    setItems([...bookings].splice(firstIndex, bookingsPerPage));
    setCurrentPage(prevPage);
  };

  return (
    <div className="user-info">
      <section className="user-info__title">
        <h2>Bookings</h2>
        <section className="page__hotelsList">
          <BookingsPagination
            results={items}
            handleNext={handleNext}
            handlePrev={handlePrev}
            currentPage={currentPage}
            maxPages={maxPages}
          />
        </section>
      </section>
    </div>
  );
};

export default AdminBookings;
