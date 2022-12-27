import PropTypes from 'prop-types';
import { useState } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { Modal } from 'react-bootstrap';
import MapPoint from '../../assets/mapPoint.png';
import { deleteHotel } from '../../services/hotels';
import HotelsFormEdit from '../HotelsFormEdit/HotelsFormEdit';

const HotelCardAdmin = ({
  imageProfile, name, about, pricePerNight, feature1, feature2, id,
}) => {
  const [show, setShow] = useState(false);
  const handleClickDelete = async () => {
    try {
      await deleteHotel(id);
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
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <section className="cardHotelAdmin">
      <img className="cardHotelAdmin__figure" alt="hotel" src={`../${imageProfile}`} />
      <section className="cardHotelAdmin__title">
        <h3 className="cardHotelAdmin__name">{name}</h3>
        <p className="cardHotelAdmin__place"><img alt="map point" src={MapPoint} />Medellin</p>
      </section>
      <p className="cardHotelAdmin__description">{about}</p>
      <section className="cardHotelAdmin__bottom">
        <div className="cardHotelAdmin__prices">
          <p className="cardHotelAdmin__priceBefore"><del>${pricePerNight}</del></p>
          <p className="cardHotelAdmin__priceAfter">${200}</p>
        </div>
        <div className="cardHotelAdmin__features">
          <div className="cardHotelAdmin__detail">{feature1}</div>
          <div className="cardHotelAdmin__detail">{feature2}</div>
        </div>
      </section>
      <section className="cardHotelAdmin__managment">
        <FontAwesomeIcon className="cardHotelAdmin__icon" icon={faPenToSquare} onClick={handleShow} />
        <FontAwesomeIcon className="cardHotelAdmin__icon" icon={faTrashCan} onClick={handleClickDelete} />
      </section>
      <Modal show={show} onHide={handleClose} className="cardHotelAdmin__modal">
        <Modal.Body>
          <HotelsFormEdit
            name={name}
            imageProfile={imageProfile}
            about={about}
            pricePerNight={pricePerNight}
            feature1={feature1}
            feature2={feature2}
            id={id}
          />
        </Modal.Body>
      </Modal>
    </section>
  );
};

HotelCardAdmin.propTypes = {
  imageProfile: PropTypes.isRequired,
  name: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  pricePerNight: PropTypes.number.isRequired,
  feature1: PropTypes.string.isRequired,
  feature2: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default HotelCardAdmin;
