import './styles.css';
import PropTypes from 'prop-types';
import { updateHotel } from '../../services/hotels';
import useForm from '../../hooks/useForm';

const HotelsFormEdit = ({
  hotelImg, name, place, text, price, finalPrice, feature1, feature2, id,
}) => {
  const { form, handleChange } = useForm({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateHotel(form);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <form id={id} className="hotelsForm" onSubmit={handleSubmit}>
      <p className="hotelsForm__properties">Image: </p>
      <input type="file" name="hotelImg" onChange={handleChange} defaultValue={hotelImg} />
      <p className="hotelsForm__properties">Name: </p>
      <input type="text" name={name} onChange={handleChange} />
      <p className="hotelsForm__properties">City:</p>
      <input type="text" name="place" onChange={handleChange} defaultValue={place} />
      <p className="hotelsForm__properties">Description:</p>
      <textarea rows="5" type="text" name="text" onChange={handleChange} defaultValue={text} />
      <p className="hotelsForm__properties">Price:</p>
      <input type="number" name="price" onChange={handleChange} defaultValue={price} />
      <p className="hotelsForm__properties">Offer Price:</p>
      <input type="number" name="finalPrice" onChange={handleChange} defaultValue={finalPrice} />
      <p className="hotelsForm__properties">Feature 1:</p>
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
      <p className="hotelsForm__properties">Feature 2:</p>
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
      <div className="hotelsForm__buttonEnv">
        <button className="hotelsForm__button" type="submit">Edit</button>
      </div>
    </form>
  );
};

HotelsFormEdit.propTypes = {
  hotelImg: PropTypes.isRequired,
  name: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  finalPrice: PropTypes.number.isRequired,
  feature1: PropTypes.string.isRequired,
  feature2: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default HotelsFormEdit;
