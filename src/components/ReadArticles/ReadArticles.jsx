import PropTypes from 'prop-types';
import './styles.css';

const ReadArticles = ({
  image, day, month, postBy, text, headline,
}) => (
  <section className="readings">
    <div className="readings__left">
      <div className="readings__image">
        <img className="readings__img" src={image} alt={postBy} />
        <div className="readings__date">
          <p className="readings__number">{day}</p>
          <p className="readings__month">{month}</p>
        </div>
      </div>
    </div>
    <div className="readings__right">
      <div className="readings__title">
        <h3 className="readings__title-h3">{postBy}</h3>
      </div>
      <div className="readings__paragraph">
        <p>{text}</p>
        <span className="readings__headline">{headline}</span>
      </div>
      <div>
        <button className="readings__button" type="submit">READ MORE</button>
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
