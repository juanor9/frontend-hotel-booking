import './styles.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHotels } from '../../features/hotels/hotelsSlice';
import OfferCard from '../OfferCard/OfferCard';

const OfferView = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotels());
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [window.innerWidth]);

  const { hotels } = useSelector((state) => state.hotels);
  const hotelsToRender = hotels.slice(0, 5);
  const renderOne = hotels.slice(0, 1);
  return (
    <section className="offerview__card">
      <div className="offerview__title">
        <h2>top offerts</h2>
      </div>
      <div className="offerview__component">
        <article>
          {
            width > 800
              ? (
                <div className="card__descktopHome">{
                  hotelsToRender.map((hotel) => (
                    <OfferCard
                      key={hotel._id}
                      title={hotel.name}
                      text={hotel.country}
                      image={hotel.imageProfile}
                    />
                  ))
                }
                </div>
              ) : (
                <div>{
                  renderOne.map((hotel) => (
                    <OfferCard
                      key={hotel._id}
                      title={hotel.name}
                      text={hotel.country}
                      image={hotel.imageProfile}
                    />
                  ))
                }
                </div>
              )
          }
        </article>
      </div>
    </section>
  );
};

export default OfferView;
