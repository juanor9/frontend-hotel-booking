import './styles.css';
import offerFood from './images/offerFood.jpg';

const OfferCard = () => (
  <div className="card">
    <img className="card__img" alt="offerFood" src={offerFood} />
    <h3 className="card__title">Food Order</h3>
    <p className="card__text">Complimantary Breakfast. Use Code RICAFOOD</p>
  </div>
);

export default OfferCard;
