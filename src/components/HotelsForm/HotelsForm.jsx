import './styles.css';
import { Link } from 'react-router-dom';
import { createHotel } from '../../services/hotels';
import useForm from '../../hooks/useForm';

const HotelsForm = () => {
  const { form, handleChange } = useForm({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await createHotel(form);
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleClick = () => {
    document.getElementById('formHotel').reset();
  };

  return (
    <form id="formHotel" className="hotelsForm" onSubmit={handleSubmit}>
      <p className="hotelsForm__properties">Image: </p>
      <input type="file" name="image" onChange={handleChange} />
      <p className="hotelsForm__properties">Name: </p>
      <input type="text" name="name" onChange={handleChange} />
      <p className="hotelsForm__properties">City:</p>
      <input type="text" name="city" onChange={handleChange} />
      <p className="hotelsForm__properties">Description:</p>
      <textarea rows="5" type="text" name="description" onChange={handleChange} />
      <p className="hotelsForm__properties">Price:</p>
      <input type="number" name="price" onChange={handleChange} />
      <p className="hotelsForm__properties">Offer Price:</p>
      <input type="number" name="offerPrice" onChange={handleChange} />
      <p className="hotelsForm__properties">Feature 1:</p>
      <select name="feature1" onChange={handleChange}>
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
      <select name="feature2" onChange={handleChange}>
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
        <button className="hotelsForm__button" type="submit" onClick={handleClick}>Create</button>
        <Link to="/hotels-managment"><button className="hotelsForm__button" type="submit">List Hotels</button></Link>
      </div>
    </form>
  );
};

export default HotelsForm;
