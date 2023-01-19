import { Link } from 'react-router-dom';
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
                <div className="offerview__component">{
                  hotelsToRender.map((hotel) => (
                    <Link key={hotel._id} className="offer-component__link" to={`/hotels/${hotel._id}`}>
                      <OfferCard
                        title={hotel.name}
                        text={hotel.country}
                        image={hotel.imageProfile}
                      />
                    </Link>
                  ))
                }
                </div>
              ) : (
                <div>{
                  renderOne.map((hotel) => (
                    <Link key={hotel._id} className="offer-component__link" to={`/hotels/${hotel._id}`}>
                      <OfferCard
                        title={hotel.name}
                        text={hotel.country}
                        image={hotel.imageProfile}
                      />
                    </Link>
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
