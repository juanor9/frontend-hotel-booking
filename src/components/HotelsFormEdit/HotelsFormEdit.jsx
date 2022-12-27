import './styles.css';
import PropTypes from 'prop-types';
import { updateHotel } from '../../services/hotels';
import useForm from '../../hooks/useForm';

const HotelsFormEdit = ({
  imageProfile, name, about, pricePerNight, feature1, feature2, id,
}) => {
  const { form, handleChange } = useForm({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateHotel(form, id);
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div className="hotelsFormEdit">
      <h4 className="hotelsFormEdit__title">Hotel Edit</h4>
      <form id={id} className="hotelsFormEdit__form" onSubmit={handleSubmit}>
        <p className="hotelsFormEdit__properties">Image: </p>
        <input type="file" name="imageProfile" onChange={handleChange} defaultValue={imageProfile} />
        <p className="hotelsFormEdit__properties">Name: </p>
        <input type="text" name="name" onChange={handleChange} defaultValue={name} />
        { /*  <p className="hotelsFormEdit__properties">City:</p>
        <input type="text" name="place" onChange={handleChange} defaultValue="Medellin" /> */ }
        <p className="hotelsFormEdit__properties">Description:</p>
        <textarea rows="5" type="text" name="about" onChange={handleChange} defaultValue={about} />
        <p className="hotelsFormEdit__properties">Price:</p>
        <input type="number" name="pricePerNight" onChange={handleChange} defaultValue={pricePerNight} />
        { /* <p className="hotelsForm__properties">Offer Price:</p>
        <input type="number" name="finalPrice" onChange={handleChange} defaultValue={200} /> */ }
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

  );
};

HotelsFormEdit.propTypes = {
  imageProfile: PropTypes.isRequired,
  name: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  pricePerNight: PropTypes.number.isRequired,
  feature1: PropTypes.string.isRequired,
  feature2: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default HotelsFormEdit;
