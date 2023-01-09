import PropTypes from 'prop-types';
import './styles.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import {
  faBed, faShower, faPersonSwimming as faPool, faTv, faCouch,
} from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-bootstrap';
import { deleteRoom } from '../../features/rooms/roomsSlice';
import RoomsFormEdit from '../RoomsFormEdit/RoomsFormEdit';

const RoomCard = ({
  roomType, image, bedType, amenitiesPool, amenitiesShower, amenitiesTV, amenitiesCouch,
  pricePerNight, offerPrice, id,
}) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClickDelete = async () => {
    try {
      dispatch(deleteRoom(id));
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
    <section id="room-cardAdmin" className="room-cardAdmin">
      <h3 className="room-cardAdmin__header">{roomType}</h3>
      <div className="room-cardAdmin__info">
        <article className="room-cardAdmin__img">
          <picture className="room-cardAdmin__pic">
            <img src={image} alt="" />
          </picture>
        </article>
        <article className="room-cardAdmin__amenities">
          <h4>Amenities</h4>
          <ul className="room-cardAdmin__info-list">
            {bedType ? (
              <li className="room-cardAdmin__list-item">
                <FontAwesomeIcon icon={faBed} key={`${roomType} bed`} /> {' '}
                <span className="room-cardAdmin__list-icon">{bedType}</span>
              </li>
            ) : null}
            {amenitiesPool === true ? (
              <li className="room-cardAdmin__list-item">
                <FontAwesomeIcon icon={faPool} key={`${roomType} pool view`} />
                <span className="room-cardAdmin__list-icon">Pool view</span>
              </li>
            ) : null}
            {amenitiesShower === true ? (
              <li className="room-cardAdmin__list-item">
                <FontAwesomeIcon icon={faShower} key={`${roomType} shower`} />
                <span className="room-cardAdmin__list-icon">Shower</span>
              </li>
            ) : null}
            {amenitiesTV === true ? (
              <li className="room-cardAdmin__list-item">
                <FontAwesomeIcon icon={faTv} key={`${roomType} tv`} />
                <span className="room-cardAdmin__list-icon">LCD TV</span>
              </li>
            ) : null}
            {amenitiesCouch === true ? (
              <li className="room-cardAdmin__list-item">
                <FontAwesomeIcon icon={faCouch} key={`${roomType} couch`} />
                <span className="room-cardAdmin__list-icon">Couch</span>
              </li>
            ) : null}
          </ul>
        </article>
      </div>
      <hr className="room-cardAdmin__price-divider" />
      <article className="room-cardAdmin__price">
        { offerPrice ? <div className="room-cardAdmin__doblePrice"><p className="room-cardAdmin__old-price"><del>${pricePerNight}</del></p><p className="room-cardAdmin__current-price">{offerPrice}</p></div> : <p className="room-cardAdmin__current-price">${pricePerNight}</p> }
        <p className="room-cardAdmin__pricing">per night</p>
      </article>
      <section className="room-cardAdmin__managment">
        <FontAwesomeIcon className="room-cardAdmin__iconManagment" icon={faPenToSquare} onClick={handleShow} />
        <FontAwesomeIcon className="room-cardAdmin__iconManagment" icon={faTrashCan} onClick={handleClickDelete} />
      </section>
      <Modal show={show} onHide={handleClose} className="cardHotelAdmin__modal">
        <Modal.Body>
          <RoomsFormEdit
            roomType={roomType}
            image={image}
            bedType={bedType}
            amenitiesCouch={amenitiesCouch}
            amenitiesPool={amenitiesPool}
            amenitiesShower={amenitiesShower}
            amenitiesTV={amenitiesTV}
            pricePerNight={pricePerNight}
            offerPrice={offerPrice}
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

RoomCard.propTypes = {
  roomType: PropTypes.string.isRequired,
  image: PropTypes.string,
  bedType: PropTypes.string,
  amenitiesPool: PropTypes.bool,
  amenitiesShower: PropTypes.bool,
  amenitiesTV: PropTypes.bool,
  amenitiesCouch: PropTypes.bool,
  pricePerNight: PropTypes.number.isRequired,
  offerPrice: PropTypes.number,
  id: PropTypes.string.isRequired,
};
RoomCard.defaultProps = {
  image: './grey.jpg',
  bedType: '',
  amenitiesPool: false,
  amenitiesShower: false,
  amenitiesTV: false,
  amenitiesCouch: false,
  offerPrice: 0,
};
export default RoomCard;
