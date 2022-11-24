import './styles.css';

const NewsList = () => (
  <article className="news__list">
    <div className="news__card__image">
      <img className="news__card__img" src="https://tse4.mm.bing.net/th?id=OIP.hIom1U0HTOfsRfQ8X2cz0wHaFj&pid=Api&P=0" alt="news img" />
    </div>
    <div className="news__card__text">
      <h3 className="news__card__title">
        Recent News
      </h3>
      <p className="news__card__paragraph">
        Lorem ipsum dolor Lorem ipsum dolor amet consectetur adipisicing elit adipisicing elit...
      </p>
    </div>
  </article>
);

export default NewsList;
