import './styles.css';
import OfferCard from '../OfferCard/OfferCard';
import OfferFoodImage from '../../assets/offerFood.jpg';
import data from '../../assets/offer.json';

const OfferView = () => (
  <section className="offerview__card">
    <div className="offerview__title">
      <h2>top offerts</h2>
    </div>
    <div className="offerview__component">
      <article>
        {
          window.innerWidth > 768
            ? (
              <div className="card__descktopHome">{
                data.map((e) => (
                  <OfferCard
                    key={e.id}
                    title={e.title}
                    text={e.text}
                    image={OfferFoodImage}
                  />
                ))
              }
              </div>
            ) : (
              <div>
                <OfferCard
                  title="Hotel Booking"
                  text="Avail hot deals on hotel"
                  image={OfferFoodImage}
                />
              </div>
            )
        }
      </article>
    </div>
  </section>
);

export default OfferView;
