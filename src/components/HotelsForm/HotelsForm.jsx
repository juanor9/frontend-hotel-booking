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
      <p className="hotelsForm__properties">Facilities: </p>
      <section className="hotelsForm__facilities">
        <div className="hotelsForm__facilitiesDiv">
          <input name="facilities" type="checkbox" value="Restaurant" onChange={handleChange} />
          <p className="hotelsForm__facilitiesValues">Restaurant</p>
          <input name="facilities" type="checkbox" value="Bar" onChange={handleChange} />
          <p className="hotelsForm__facilitiesValues">Bar</p>
          <input name="facilities" type="checkbox" value="Meeting Room" onChange={handleChange} />
          <p className="hotelsForm__facilitiesValues">Meeting Room</p>
          <input name="facilities" type="checkbox" value="Gym" onChange={handleChange} />
          <p className="hotelsForm__facilitiesValues">Gym</p>
          <input name="facilities" type="checkbox" value="Spa" onChange={handleChange} />
          <p className="hotelsForm__facilitiesValues">Spa</p>
        </div>
        <div className="hotelsForm__facilitiesDiv">
          <input name="facilities" type="checkbox" value="Golf Camp" onChange={handleChange} />
          <p className="hotelsForm__facilitiesValues">Golf Camp</p>
          <input name="facilities" type="checkbox" value="Tennis Court" onChange={handleChange} />
          <p className="hotelsForm__facilitiesValues">Tennis Court</p>
          <input name="facilities" type="checkbox" value="Ski Area" onChange={handleChange} />
          <p className="hotelsForm__facilitiesValues">Ski Area</p>
          <input name="facilities" type="checkbox" value="Luggage Storage" onChange={handleChange} />
          <p className="hotelsForm__facilitiesValues">Luggage Storage</p>
          <input name="facilities" type="checkbox" value="Airport Shuttle" onChange={handleChange} />
          <p className="hotelsForm__facilitiesValues">Airport Shuttle</p>
        </div>
      </section>
      <p className="hotelsForm__properties">Room Type:</p>
      <select name="roomType" onChange={handleChange}>
        <option value="Standard Room">Standard Room</option>
        <option value="Deluxe Room">Deluxe Room</option>
        <option value="Suite Room">Suite Room</option>
        <option value="Royal Room">Royal Room</option>
        <option value="Accessible Room">Accessible Room</option>
      </select>
      <p className="hotelsForm__properties">Price Room Per Night:</p>
      <input type="number" name="roomPrice" onChange={handleChange} />
      <div className="hotelsForm__buttonEnv">
        <button className="hotelsForm__button" type="submit" onClick={handleClick}>Create</button>
      </div>
    </form>
  );
};

export default HotelsForm;
