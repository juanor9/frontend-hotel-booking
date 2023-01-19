/* eslint-disable no-unused-vars */
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createRoom } from '../../features/rooms/roomsSlice';
import { createImage } from '../../features/uploads/uploadsSlice';
import useForm from '../../hooks/useForm';
import { updateHotel } from '../../features/hotels/hotelsSlice';

const RoomsForm = ({ hotelId }) => {
  const { uploads } = useSelector((state) => state.upload);
  const { rooms } = useSelector((state) => state.rooms);

  const { form, handleChange } = useForm({});
  const [file, setFile] = useState();
  const dispatch = useDispatch();

  const handleChangeImage = ({ target }) => {
    const { files } = target;
    const image = files[0];
    setFile(image);
  };
  useEffect(() => {
    if (file) {
      const imageButton = document.getElementById('roomsForm__img-button');
      imageButton.classList.remove('roomsForm__button--disable');
      imageButton.classList.add('roomsForm__button');
    }
  }, [file]);

  const handleSubmitimage = async (event) => {
    event.preventDefault();

    if (file) {
      try {
        dispatch(createImage(file));
        // dispatch(updateHotel({ rooms: rooms._id }, hotelId));

        // eslint-disable-next-line no-console
      } catch (error) {
        throw new Error(error);
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (uploads) {
        dispatch(createRoom({ ...form, image: uploads, hotel: hotelId }));
      }
      // console.log(rooms);

      // eslint-disable-next-line no-restricted-globals
      // location.reload();
    } catch (error) {
      throw new Error(error);
    }
  };
  useEffect(() => {
    if ('_id' in rooms) {
      console.log(rooms._id);
      // console.log(hotelId);
      dispatch(updateHotel({ rooms: rooms._id }, hotelId));
    }
  }, [rooms]);

  const handleClick = () => {
    document.getElementById('formRoom').reset();
  };

  return (
    <>
      <div>
        <form action="" onSubmit={handleSubmitimage}>
          <p className="roomsForm__properties">Room Image: </p>
          <input type="file" name="image" accept="image/*" onChange={handleChangeImage} />
          <button id="roomsForm__img-button" className="roomsForm__button--disable" type="submit" onClick={handleClick}>Upload</button>
        </form>
        {uploads
          ? (
            <figure className="formHotel__img-preview">
              <img src={uploads} alt="" />
            </figure>
          )
          : null}
      </div>
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
    </>
  );
};
RoomsForm.propTypes = {
  hotelId: PropTypes.string.isRequired,

};
export default RoomsForm;
