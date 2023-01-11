import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { createRoom } from '../../features/rooms/roomsSlice';
import { createImage } from '../../features/uploads/uploadsSlice';
import useForm from '../../hooks/useForm';

const RoomsForm = () => {
  const { uploads } = useSelector((state) => state.upload);
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
      dispatch(createImage(file));
      dispatch(createRoom({ ...form, image: uploads }));
      if (uploads) {
        dispatch(createRoom({ ...form, image: uploads }));
      }
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleClick = () => {
    document.getElementById('formRoom').reset();
  };

  return (
    <form id="formRoom" className="roomsForm" name="formRoom" onSubmit={handleSubmit}>
      <section>
        <p className="roomsForm__properties">Room Type:</p>
        <select name="roomType" onChange={handleChange}>
          <option value="Standard Room">Standard Room</option>
          <option value="Deluxe Room">Deluxe Room</option>
          <option value="Suite Room">Suite Room</option>
          <option value="Royal Room">Royal Room</option>
          <option value="Accessible Room">Accessible Room</option>
        </select>
        <p className="roomsForm__properties">Room Image: </p>
        <input type="file" name="image" accept="image/*" onChange={handleChangeImage} />
        <p className="roomsForm__properties">Bed Type:</p>
        <select name="bedType" onChange={handleChange}>
          <option value="King">King</option>
          <option value="Queen">Queen</option>
          <option value="Twin">Twin</option>
          <option value="Double">Double</option>
        </select>
        <p className="roomsForm__properties">Amenities:</p>
        <div className="roosmForm__propertiesAmenities">
          <p className="roomsForm__properties">Shower:</p>
          <input type="checkbox" name="amenitiesShower" value="true" onChange={handleChange} />
          <p className="roomsForm__properties">TV:</p>
          <input type="checkbox" name="amenitiesTV" value="true" onChange={handleChange} />
          <p className="roomsForm__properties">Couch:</p>
          <input type="checkbox" name="amenitiesCouch" value="true" onChange={handleChange} />
          <p className="roomsForm__properties">Pool View:</p>
          <input type="checkbox" name="amenitiesPool" value="true" onChange={handleChange} />
        </div>
        <p className="roomsForm__properties">Price Per Night:</p>
        <input type="number" name="pricePerNight" onChange={handleChange} />
        <p className="roomsForm__properties">Offer Price:</p>
        <input type="number" name="offerPrice" onChange={handleChange} />
      </section>
      <div className="roomsForm__buttonEnv">
        <button className="roomsForm__button" type="submit" onClick={handleClick}>Create</button>
      </div>
    </form>
  );
};

export default RoomsForm;
