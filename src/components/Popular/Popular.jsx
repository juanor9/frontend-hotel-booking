import PropTypes from 'prop-types';
import './styles.css';

const Popular = ({ title, text, image }) => (
  <section>
    <div className="popular__card">
      <img className="popular__img" alt="offerFood" src={image} />
      <h3 className="popular__title">{title}</h3>
      <p className="popular__text">{text}</p>
    </div>
  </section>
);

Popular.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Popular;
