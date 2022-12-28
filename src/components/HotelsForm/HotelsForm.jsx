import './styles.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { createHotel } from '../../features/hotels/hotelsSlice';
import { createImage } from '../../features/uploads/uploadsSlice';
import useForm from '../../hooks/useForm';

const HotelsForm = () => {
  const { form, handleChange } = useForm({});
  const dispatch = useDispatch();

  const [file, setFile] = useState(null);

  const handleChangeImage = ({ target }) => {
    const { files } = target;
    const image = files[0];
    setFile(image);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(createHotel(form));
      dispatch(createImage(file));
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
      <input type="file" name="file" accept="image/*" onChange={handleChangeImage} />
      <p className="hotelsForm__properties">Name: </p>
      <input type="text" name="name" onChange={handleChange} />
      {/* <p className="hotelsForm__properties">City:</p>
      <input type="text" name="city" onChange={handleChange} /> */}
      <p className="hotelsForm__properties">Description:</p>
      <textarea rows="5" type="text" name="about" onChange={handleChange} />
      <p className="hotelsForm__properties">Price:</p>
      <input type="number" name="pricePerNight" onChange={handleChange} />
      {/* <p className="hotelsForm__properties">Offer Price:</p>
      <input type="number" name="finalPrice" onChange={handleChange} /> */}
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
      </div>
    </form>
  );
};

export default HotelsForm;
