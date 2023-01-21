import './styles.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { getHotels } from '../../features/hotels/hotelsSlice';
import AdminPagination from '../AdminPagination/AdminPagination';

const AdminHotels = () => {
  const { hotels } = useSelector((state) => state.hotels);
  const dispatch = useDispatch();
  const hotelsPerPage = 6;
  const maxPages = Math.floor(hotels.length / hotelsPerPage);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    try {
      const localHotels = [].concat(hotels);
      localHotels.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
      const calculateItems = localHotels.splice(0, hotelsPerPage);
      setItems(calculateItems);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }, [hotels]);

  useEffect(() => {
    dispatch(getHotels());
  }, []);

  const handleNext = () => {
    const totalHotels = hotels.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * hotelsPerPage;
    if (firstIndex === totalHotels) return;

    setItems([...hotels].splice(firstIndex, hotelsPerPage));
    setCurrentPage(nextPage);
  };

  const handlePrev = () => {
    const prevPage = currentPage - 1;
    const firstIndex = prevPage * hotelsPerPage;
    if (prevPage < 0) return;

    setItems([...hotels].splice(firstIndex, hotelsPerPage));
    setCurrentPage(prevPage);
  };
  return (
    <section className="admin-hotels">
      <h2 className="admin-hotels__header">Hotels Managment</h2>
      <Link to="/admin/hotels-registration" className="admin-hotels__add-button">
        <FontAwesomeIcon
          icon={faPlus}
        />{' '}
        Add a hotel
      </Link>
      <div className="hotelsManagment__list">
        <AdminPagination
          results={items}
          handleNext={handleNext}
          handlePrev={handlePrev}
          currentPage={currentPage}
          maxPages={maxPages}
        />
      </div>
    </section>
  );
};

export default AdminHotels;
