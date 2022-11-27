import './styles.css';
import OfferCard from '../OfferCard/OfferCard';
import data from '../../assets/offer.json';

const OfferView = () => (
  <section className="offerview__card">
    <div className="offerview__title">
      <h2>top offerts</h2>
    </div>
    <div className="offerview__component">
      <article className="card__ofert">
        {
          window.innerWidth > 768 && data.length
            ? (
              <div className="card__descktopHome">{
                data.map((e) => (
                  <OfferCard
                    key={e.id}
                    title={e.title}
                    text={e.text}
                    image="https://tse3.mm.bing.net/th?id=OIP.U4ndtPvDvEr8DaJZxoFT0AHaFb&pid=Api&P=0"
                  />
                ))
              }
              </div>
            ) : (
              <div className="card__mobile">
                <OfferCard
                  title="Hotel Booking"
                  text="Avail hot deals on hotel"
                  image="https://tse3.mm.bing.net/th?id=OIP.U4ndtPvDvEr8DaJZxoFT0AHaFb&pid=Api&P=0"
                />
              </div>
            )
        }
      </article>
    </div>
  </section>
);

export default OfferView;
