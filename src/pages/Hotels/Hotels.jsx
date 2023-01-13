import './styles.css';
// componentes
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SliderNav from '../../components/SliderNav/SliderNav';
import HotelFilter from '../../components/HotelFilter/HotelFilter';
import HotelsPagination from '../../components/HotelsPagination/HotelsPagination';

const Hotels = () => (
  <div className="page">
    <section className="page__nav">
      <nav className="page_navbar">
        <NavigationBar />
        <SliderNav />
      </nav>
    </section>
    <section className="page__body">
      <HotelFilter />
      <HotelsPagination />
    </section>
  </div>
);

export default Hotels;
