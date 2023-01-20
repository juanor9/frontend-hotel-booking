import PropTypes from 'prop-types';
import './styles.css';

const Popular = ({ title, price, image }) => (
  <section>
    <div className="popular__card">
      <img className="popular__img" alt="offerFood" src={image} />
      <h3 className="popular__title">{title}</h3>
      <p className="popular__text">$ {price}</p>
    </div>
  </section>
);

Popular.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Popular;
