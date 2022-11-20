import PropTypes from 'prop-types';
import './styles.css';

const ReadArticles = ({
  image, day, month, postBy, text, headline,
}) => (
  <section className="card">
    <div className="card__left">
      <div className="card__image">
        <img src={image} alt={postBy} />
        <div className="card__date">
          <p className="card__number">{day}</p>
          <p className="card__month">{month}</p>
        </div>
      </div>
    </div>
    <div className="card__right">
      <div className="card__title">
        <h3>{postBy}</h3>
      </div>
      <div className="paragraph">
        <p>{text}</p>
        <span className="card__headline">{headline}</span>
      </div>
      <div className="card__btn">
        <button type="submit">READ MORE</button>
      </div>
    </div>
  </section>
);

ReadArticles.propTypes = {
  image: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  postBy: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
};

export default ReadArticles;
