import './StylesGrid.css';

const HotelsGrid = () => (
  <section className="hotel__card">
    <div className="butons_card">
      <button className="hotels__buttons" type="submit">{'<<'}</button>
      <button className="hotels__buttons" type="submit">1</button>
      <button className="hotels__buttons" type="submit">2</button>
      <button className="hotels__buttons" type="submit">3</button>
      <button className="hotels__buttons" type="submit">{'>>'}</button>
    </div>
  </section>
);

export default HotelsGrid;
