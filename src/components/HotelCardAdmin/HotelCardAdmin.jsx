import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal/Modal';
import useForm from '../../hooks/useForm';
import { updateHotel } from '../../services/hotels';
import { deleteHotel } from '../../features/hotels/hotelsSlice';
import MapPoint from '../../assets/mapPoint.png';

const HotelCardAdmin = ({
  imageProfile, name, about, city, pricePerNight, offerPrice, feature1, feature2, id,
}) => {
  const { form, handleChange } = useForm({});
  const [modal, setModal] = useState(false);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setModal(false);
    // eslint-disable-next-line no-restricted-globals
    location.reload();

    try {
      dispatch(updateHotel(form, id));
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
  }, [modal]);

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
        <FontAwesomeIcon className="cardHotelAdmin__icon" icon={faPenToSquare} onClick={() => { setModal(true); }} />
        <FontAwesomeIcon className="cardHotelAdmin__icon" icon={faTrashCan} onClick={handleClickDelete} />
      </section>
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
