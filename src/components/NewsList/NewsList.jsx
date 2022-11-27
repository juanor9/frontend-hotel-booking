import './styles.css';

const NewsList = () => (
  <article className="news__list-cont">
    <div className="news__card--image">
      <img className="news__card--img" src="https://tse4.mm.bing.net/th?id=OIP.hIom1U0HTOfsRfQ8X2cz0wHaFj&pid=Api&P=0" alt="news img" />
    </div>
    <div className="news__card--text">
      <h3 className="news__card--title">
        Recent News
      </h3>
      <p className="news__card--paragraph">
        Lorem ipsum  amet adipisicingadipisicing elit...
      </p>
    </div>
  </article>
);

export default NewsList;
