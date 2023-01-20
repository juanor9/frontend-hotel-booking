import PropTypes from 'prop-types';
import './styles.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import {
  faBed, faShower, faPersonSwimming as faPool, faTv, faCouch,
} from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal/Modal';
import useForm from '../../hooks/useForm';
import { deleteRoom } from '../../features/rooms/roomsSlice';
import { updateRoom } from '../../services/rooms';

const RoomCardAdmin = ({
  roomType, image, bedType, amenitiesPool, amenitiesShower, amenitiesTV, amenitiesCouch,
  pricePerNight, offerPrice, id,
}) => {
  const { form, handleChange } = useForm({});
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  const handleClickDelete = async () => {
    try {
      dispatch(deleteRoom(id));
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setModal(false);

    try {
      dispatch(updateRoom(form, id));
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
  }, [modal]);

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
        <FontAwesomeIcon className="room-cardAdmin__iconManagment" icon={faPenToSquare} onClick={() => { setModal(true); }} />
        <FontAwesomeIcon className="room-cardAdmin__iconManagment" icon={faTrashCan} onClick={handleClickDelete} />
      </section>
      {
        modal === true ? (
          <Modal modalFunction={setModal}>
            <div className="roomsFormEdit">
              <h4 className="roomsFormEdit__title">Room Edit</h4>
              <form id="formRoom" className="roomsFormEdit" name="formRoom" onSubmit={handleSubmit}>
                <section>
                  <p className="roomsFormEdit__properties">Room Type:</p>
                  <select name="roomType" onChange={handleChange} defaultValue={roomType}>
                    <option value="Standard Room">Standard Room</option>
                    <option value="Deluxe Room">Deluxe Room</option>
                    <option value="Suite Room">Suite Room</option>
                    <option value="Royal Room">Royal Room</option>
                    <option value="Accessible Room">Accessible Room</option>
                  </select>
                  <p className="roomsForm__properties">Bed Type:</p>
                  <select name="bedType" onChange={handleChange} defaultValue={bedType}>
                    <option value="King">King</option>
                    <option value="Queen">Queen</option>
                    <option value="Twin">Twin</option>
                    <option value="Double">Double</option>
                  </select>
                  <p className="roomsFormEdit__properties">Amenities:</p>
                  <div className="roosmForm__propertiesAmenities">
                    <p className="roomsForm__properties">Shower:</p>
                    {
                      amenitiesShower === true ? <input type="checkbox" name="amenitiesShower" value="false" onChange={handleChange} defaultChecked /> : <input type="checkbox" name="amenitiesShower" value="true" onChange={handleChange} />
                    }
                    <p className="roomsForm__properties">TV:</p>
                    {
                      amenitiesTV === true ? <input type="checkbox" name="amenitiesTV" value="false" onChange={handleChange} defaultChecked /> : <input type="checkbox" name="amenitiesTV" value="true" onChange={handleChange} />
                    }
                    <p className="roomsForm__properties">Couch:</p>
                    {
                      amenitiesCouch === true ? <input type="checkbox" name="amenitiesCouch" value="false" onChange={handleChange} defaultChecked /> : <input type="checkbox" name="amenitiesCouch" value="true" onChange={handleChange} />
                    }
                    <p className="roomsForm__properties">Pool View:</p>
                    {
                      amenitiesPool === true ? <input type="checkbox" name="amenitiesPool" value="false" onChange={handleChange} defaultChecked /> : <input type="checkbox" name="amenitiesPool" value="true" onChange={handleChange} />
                    }
                  </div>
                  <p className="roomsFormEdit__properties">Price Per Night:</p>
                  <input type="number" name="pricePerNight" onChange={handleChange} defaultValue={pricePerNight} />
                  <p className="roomsFormEdit__properties">Offer Price:</p>
                  <input type="number" name="offerPrice" onChange={handleChange} defaultValue={offerPrice} />
                </section>
                <div className="roomsFormEdit__buttonEnv">
                  <button className="roomsFormEdit__button" type="submit">Edit</button>
                </div>
              </form>
            </div>
          </Modal>
        ) : null
      }
    </section>
  );
};

RoomCardAdmin.propTypes = {
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
RoomCardAdmin.defaultProps = {
  image: './grey.jpg',
  bedType: '',
  amenitiesPool: false,
  amenitiesShower: false,
  amenitiesTV: false,
  amenitiesCouch: false,
  offerPrice: 0,
};
export default RoomCardAdmin;
