import './StylesPagination.css';

const HotelsPagination = () => (
  <section className="pagination__card">
    <div className="pagination__buttons">
      <button className="pagination__button" type="submit">{'<<'}</button>
      <button className="pagination__button" type="submit">1</button>
      <button className="pagination__button" type="submit">2</button>
      <button className="pagination__button" type="submit">3</button>
      <button className="pagination__button" type="submit">{'>>'}</button>
    </div>
  </section>
);

export default HotelsPagination;
