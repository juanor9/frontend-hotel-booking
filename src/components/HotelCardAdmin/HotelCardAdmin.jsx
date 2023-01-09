import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-bootstrap';
import { deleteHotel } from '../../features/hotels/hotelsSlice';
import MapPoint from '../../assets/mapPoint.png';
import HotelsFormEdit from '../HotelsFormEdit/HotelsFormEdit';

const HotelCardAdmin = ({
  imageProfile, name, about, city, pricePerNight, offerPrice, feature1, feature2, id,
}) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClickDelete = async () => {
    try {
      dispatch(deleteHotel(id));
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleShow = async () => {
    try {
      await setShow(true);
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleClose = async () => {
    try {
      await setShow(false);
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <section className="cardHotelAdmin">
      <img className="cardHotelAdmin__figure" alt="hotel" src={imageProfile} />
      <section className="cardHotelAdmin__title">
        <h3 className="cardHotelAdmin__name">{name}</h3>
        <p className="cardHotelAdmin__place"><img alt="map point" src={MapPoint} />{city}</p>
      </section>
      <p className="cardHotelAdmin__description">{about}</p>
      <section className="cardHotelAdmin__bottom">
        <div className="cardHotelAdmin__prices">
          { offerPrice ? <><p className="cardHotelAdmin__priceBefore"><del>${pricePerNight}</del></p><p className="cardHotelAdmin__priceAfter">{offerPrice}</p></> : <p className="cardHotelAdmin__priceBefore">${pricePerNight}</p> }
        </div>
        <div className="cardHotelAdmin__features">
          <div className="cardHotelAdmin__detail">{feature1}</div>
          <div className="cardHotelAdmin__detail">{feature2}</div>
        </div>
      </section>
      <section className="cardHotelAdmin__managment">
        <Link to={`/admin/rooms-registration/${id}`}><FontAwesomeIcon className="cardHotelAdmin__icon" icon={faBed} /></Link>
        <FontAwesomeIcon className="cardHotelAdmin__icon" icon={faPenToSquare} onClick={handleShow} />
        <FontAwesomeIcon className="cardHotelAdmin__icon" icon={faTrashCan} onClick={handleClickDelete} />
      </section>
      <Modal show={show} onHide={handleClose} className="cardHotelAdmin__modal">
        <Modal.Body>
          <HotelsFormEdit
            name={name}
            imageProfile={imageProfile}
            about={about}
            city={city}
            pricePerNight={pricePerNight}
            offerPrice={offerPrice}
            feature1={feature1}
            feature2={feature2}
            id={id}
          />
          <div className="hotelsFormEdit__buttonEnv">
            <button className="hotelsFormEdit__button" type="submit" onClick={handleClose}>Confirm & Close</button>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
};

HotelCardAdmin.propTypes = {
  imageProfile: PropTypes.isRequired,
  name: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  pricePerNight: PropTypes.number.isRequired,
  offerPrice: PropTypes.number,
  feature1: PropTypes.string.isRequired,
  feature2: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

HotelCardAdmin.defaultProps = {
  offerPrice: 0,
};

export default HotelCardAdmin;
