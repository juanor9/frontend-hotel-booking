/* eslint-disable no-unused-vars */
import './styles.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { createImage } from '../../features/uploads/uploadsSlice';
import { createHotel } from '../../features/hotels/hotelsSlice';
import useForm from '../../hooks/useForm';

const HotelsForm = () => {
  const { uploads } = useSelector((state) => state.upload);
  const { uploadsMultiple } = useSelector((state) => state.uploadsMultiple);
  const { form, handleChange } = useForm({});
  const [file, setFile] = useState([]);
  const dispatch = useDispatch();

  const handleChangeImage = ({ target }) => {
    const { files } = target;
    const image = files[0];
    setFile(image);
  };
  useEffect(() => {
    if (file) {
      const imageButton = document.getElementById('formHotel__img-button');
      imageButton.classList.remove('hotelsForm__button--disable');
      imageButton.classList.add('hotelsForm__button');
    }
  }, [file]);

  useEffect(() => {}, [uploads]);

  const handleChangeImages = ({ target }) => {
    const { files } = target;
    const images = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < files.length; i++) {
      images.push(files[i]);
    }
    setFile(images);
  };

  const handleUploadImage = async () => {
    try {
      dispatch(createImage(file));
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (uploads) {
        dispatch(createHotel({ ...form, imageProfile: uploads, images: uploadsMultiple }));
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleSubmitimage = async (event) => {
    event.preventDefault();

    if (file) {
      try {
        dispatch(createImage(file));
      } catch (error) {
        throw new Error(error);
      }
    }
  };

  const handleClick = () => {
    document.getElementById('formHotel').reset();
  };

  return (
    <>
      <div className="formHotel__img-container">
        <form
          id="formHotel"
          className="formHotel__img-form"
          onSubmit={handleSubmitimage}
        >
          <p className="hotelsForm__properties">Hotel Profile Image: </p>
          <input
            type="file"
            name="imageProfile"
            accept="image/*"
            onChange={handleChangeImage}
          />
          <button
            id="formHotel__img-button"
            className="hotelsForm__button--disable"
            type="submit"
            onClick={handleClick}
          >
            Upload Image
          </button>
        </form>
        {uploads ? (
          <figure className="formHotel__img-preview">
            <img src={uploads} alt="" />
          </figure>
        ) : null}
      </div>

      <form id="formHotel" className="hotelsForm" onSubmit={handleSubmit}>
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
          <button
            className="hotelsForm__button"
            type="submit"
            onClick={handleClick}
          >
            Create
          </button>
          <Link to="/profile">
            <button
              className="hotelsForm__button"
              type="submit"
              onClick={handleClick}
            >
              Back
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default HotelsForm;
