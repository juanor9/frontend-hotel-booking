import './styles.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHotels } from '../../features/hotels/hotelsSlice';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SliderNav from '../../components/SliderNav/SliderNav';
import HotelFilter from '../../components/HotelFilter/HotelFilter';
import HotelsPagination from '../../components/HotelsPagination/HotelsPagination';

const Hotels = () => {
  const { hotels } = useSelector((state) => state.hotels);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotels());
  }, []);

  const hotelsPerPage = 9;
  const maxPages = Math.floor(hotels.length / hotelsPerPage);
  const [items, setItems] = useState([...hotels].splice(0, hotelsPerPage));
  const [currentPage, setCurrentPage] = useState(0);

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
    <div className="page">
      <section className="page__nav">
        <nav className="page_navbar">
          <NavigationBar />
          <SliderNav />
        </nav>
        <nav>
          <HotelFilter />
        </nav>
      </section>
      <section className="page__body">
        <HotelsPagination
          results={items}
          handleNext={handleNext}
          handlePrev={handlePrev}
          currentPage={currentPage}
          maxPages={maxPages}
        />
      </section>
    </div>
  );
};

export default Hotels;
