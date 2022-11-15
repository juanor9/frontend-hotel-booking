import './style.css';

const HotelFilter = () => (
  <section id="hotel-filter" className="hotel-filter">
    <nav className="hotel-filter__nav">
      <ul className="hotel-filter__kind">
        <li className="hotel-filter__kind-item hotel-filter__kind-item--active">All</li>
        <li className="hotel-filter__kind-item">Popular</li>
        <li className="hotel-filter__kind-item">Latest</li>
        <li className="hotel-filter__kind-item">Trend</li>
      </ul>
      <ul className="hotel-filter__lastest">
        <li className="hotel-filter__lastest-sub">Latest filter</li>
        <li className="hotel-filter__lastest-item">▍</li>
        <li className="hotel-filter__lastest-item">▍▍</li>
        <li className="hotel-filter__lastest-item">▍▍▍</li>
      </ul>
    </nav>
  </section>
);
export default HotelFilter;
