import './StylesGrid.css';

const HotelsGrid = () => (
  <section className="hotel__card">
    <div className="butons_card">
      <button type="submit">{'<<'}</button>
      <button type="submit">1</button>
      <button type="submit">2</button>
      <button type="submit">3</button>
      <button type="submit">{'>>'}</button>
    </div>
  </section>
);

export default HotelsGrid;
