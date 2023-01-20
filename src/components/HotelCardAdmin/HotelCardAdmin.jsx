import './styles.css';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MapPoint from '../../assets/mapPoint.png';
import Modal from '../Modal/Modal';
import { deleteHotel, updateHotel } from '../../features/hotels/hotelsSlice';
import useForm from '../../hooks/useForm';

const HotelCardAdmin = ({
  imageProfile, name, about, city, pricePerNight, offerPrice, feature1, feature2, id,
}) => {
  const { form, handleChange } = useForm({});
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  const handleClickDelete = async () => {
    try {
      dispatch(deleteHotel(id));
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setModal(false);

    try {
      dispatch(updateHotel({ ...form, _id: id }));
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
  }, [modal]);

  return (
    <article className="cardHotelAdmin">
      <div>
        <img className="cardHotelAdmin__figure" alt="hotel" src={imageProfile} />
        <div className="cardHotelAdmin__title">
          <h3 className="cardHotelAdmin__name">{name}</h3>
          <p className="cardHotelAdmin__place"><img alt="map point" src={MapPoint} />{city}</p>
        </div>
        <p className="cardHotelAdmin__description">{about}</p>
      </div>
      <div className="cardHotelAdmin__bottom">
        <div className="cardHotelAdmin__prices">
          { offerPrice ? <><p className="cardHotelAdmin__priceBefore"><del>${pricePerNight}</del></p><p className="cardHotelAdmin__priceAfter">{offerPrice}</p></> : <p className="cardHotelAdmin__priceBefore">${pricePerNight}</p> }
        </div>
        <div className="cardHotelAdmin__features">
          <div className="cardHotelAdmin__detail">{feature1}</div>
          <div className="cardHotelAdmin__detail">{feature2}</div>
        </div>
        <div className="cardHotelAdmin__managment">
          <button
            type="button"
            onClick={() => { setModal(true); }}
            className="cardHotelAdmin__managment-button"
          >
            <FontAwesomeIcon icon={faPenToSquare} />
            Edit hotel
          </button>

          <Link
            to={`/admin/rooms-registration/${id}`}
            className="cardHotelAdmin__managment-button"
          >
            <FontAwesomeIcon icon={faBed} />
            Edit rooms
          </Link>
          <button
            type="button"
            onClick={handleClickDelete}
            className="cardHotelAdmin__managment-button cardHotelAdmin__managment-button--delete"
          >
            <FontAwesomeIcon icon={faTrashCan} />
            Delete hotel
          </button>

        </div>
      </div>

      {
        modal === true ? (
          <Modal modalFunction={setModal}>
            <div className="hotelsFormEdit">
              <h4 className="hotelsFormEdit__title">Hotel Edit</h4>
              <form className="hotelsFormEdit__form" onSubmit={handleSubmit}>
                <p className="hotelsFormEdit__properties">Name: </p>
                <input type="text" name="name" onChange={handleChange} defaultValue={name} />
                <p className="hotelsFormEdit__properties">City:</p>
                <input type="text" name="city" onChange={handleChange} defaultValue={city} />
                <p className="hotelsFormEdit__properties">Description:</p>
                <textarea rows="5" type="text" name="about" onChange={handleChange} defaultValue={about} />
                <p className="hotelsFormEdit__properties">Price:</p>
                <input type="number" name="pricePerNight" onChange={handleChange} defaultValue={pricePerNight} />
                <p className="hotelsForm__properties">Offer Price:</p>
                <input type="number" name="offerPrice" onChange={handleChange} defaultValue={offerPrice} />
                <p className="hotelsFormEdit__properties">Feature 1:</p>
                <select name="feature1" onChange={handleChange} defaultValue={feature1}>
                  <option value="Parking">Parking</option>
                  <option value="Free Wifi">Free Wifi</option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Pool">Pool</option>
                  <option value="Spa">Spa</option>
                  <option value="Pet Friendly">Pet Friendly</option>
                  <option value="Bar">Bar</option>
                  <option value="Airport Shuttle">Airport Shuttle</option>
                  <option value="Room Service">Room Service</option>
                  <option value="Air Conditioning">Air Conditioning</option>
                </select>
                <p className="hotelsFormEdit__properties">Feature 2:</p>
                <select name="feature2" onChange={handleChange} defaultValue={feature2}>
                  <option value="Parking">Parking</option>
                  <option value="Free Wifi">Free Wifi</option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Pool">Pool</option>
                  <option value="Spa">Spa</option>
                  <option value="Pet Friendly">Pet Friendly</option>
                  <option value="Bar">Bar</option>
                  <option value="Airport Shuttle">Airport Shuttle</option>
                  <option value="Room Service">Room Service</option>
                  <option value="Air Conditioning">Air Conditioning</option>
                </select>
                <div className="hotelsFormEdit__buttonEnv">
                  <button className="hotelsFormEdit__button" type="submit">Edit</button>
                </div>
              </form>
            </div>
          </Modal>
        ) : null
      }
    </article>
  );
};

HotelCardAdmin.propTypes = {
  imageProfile: PropTypes.string.isRequired,
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
