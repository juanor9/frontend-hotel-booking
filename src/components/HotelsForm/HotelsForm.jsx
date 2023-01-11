import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createHotel } from '../../features/hotels/hotelsSlice';
import { createImage } from '../../features/uploads/uploadsSlice';
import useForm from '../../hooks/useForm';

const HotelsForm = () => {
  const { uploads } = useSelector((state) => state.upload);
  const { form, handleChange } = useForm({});
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleChangeImage = ({ target }) => {
    const { files } = target;
    const image = files[0];
    setFile(image);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(createImage(file));
      dispatch(createHotel({ ...form, imageProfile: uploads }));
      // eslint-disable-next-line no-console
      console.log('uploads', uploads);
      if (uploads) {
        dispatch(createHotel({ ...form, imageProfile: uploads }));
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleClick = () => {
    document.getElementById('formHotel').reset();
  };

  return (
    <form id="formHotel" className="hotelsForm" onSubmit={handleSubmit}>
      <p className="hotelsForm__properties">Hotel Profile: </p>
      <input type="file" name="imageProfile" accept="image/*" onChange={handleChangeImage} />
      <p className="hotelsForm__properties">Name: </p>
      <input type="text" name="name" onChange={handleChange} />
      <p className="hotelsForm__properties">Country:</p>
      <input type="text" name="country" onChange={handleChange} />
      <p className="hotelsForm__properties">City:</p>
      <input type="text" name="city" onChange={handleChange} />
      <p className="hotelsForm__properties">Address:</p>
      <input type="text" name="address" onChange={handleChange} />
      <p className="hotelsForm__properties">Phone:</p>
      <input type="number" name="phone" onChange={handleChange} />
      <p className="hotelsForm__properties">Email:</p>
      <input type="text" name="email" onChange={handleChange} />
      <p className="hotelsForm__properties">Description:</p>
      <textarea rows="5" type="text" name="about" onChange={handleChange} />
      <p className="hotelsForm__properties">Price Per Night:</p>
      <input type="number" name="pricePerNight" onChange={handleChange} />
      <p className="hotelsForm__properties">Offer Price:</p>
      <input type="number" name="offerPrice" onChange={handleChange} />
      <p className="hotelsForm__properties">Check In:</p>
      <input type="text" name="checkin" onChange={handleChange} />
      <p className="hotelsForm__properties">Check Out:</p>
      <input type="text" name="checkout" onChange={handleChange} />
      <p className="hotelsForm__properties">Feature 1:</p>
      <select name="feature1" onChange={handleChange}>
        <option value="Room Service">Room Service</option>
        <option value="Parking">Parking</option>
        <option value="Free Wifi">Free Wifi</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Pool">Pool</option>
        <option value="Pet Friendly">Pet Friendly</option>
        <option value="Air Conditioning">Air Conditioning</option>
        <option value="Non Smoking Rooms">Non Smoking Rooms</option>
      </select>
      <p className="hotelsForm__properties">Feature 2:</p>
      <select name="feature2" onChange={handleChange}>
        <option value="Room Service">Room Service</option>
        <option value="Parking">Parking</option>
        <option value="Free Wifi">Free Wifi</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Pool">Pool</option>
        <option value="Pet Friendly">Pet Friendly</option>
        <option value="Air Conditioning">Air Conditioning</option>
        <option value="Non Smoking Rooms">Non Smoking Rooms</option>
      </select>
      <div className="hotelsForm__buttonEnv">
        <button className="hotelsForm__button" type="submit" onClick={handleClick}>Create</button>
        <Link to="/admin/hotels-managment"><button className="hotelsForm__button" type="submit" onClick={handleClick}>Hotel List</button></Link>
      </div>
    </form>
  );
};

export default HotelsForm;
