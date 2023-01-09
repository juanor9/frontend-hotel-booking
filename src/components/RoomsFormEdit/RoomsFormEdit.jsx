import './styles.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateRoom } from '../../services/rooms';
import useForm from '../../hooks/useForm';

const RoomsFormEdit = ({
  roomType, image, bedType, amenitiesPool, amenitiesShower, amenitiesTV, amenitiesCouch,
  pricePerNight, offerPrice, id,
}) => {
  const dispatch = useDispatch();
  const { form, handleChange } = useForm({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(updateRoom(form, id));
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div className="roomsFormEdit">
      <h4 className="roomsFormEdit__title">Room Edit</h4>
      <form id="formRoom" className="roomsFormEdit" name="formRoom" onSubmit={handleSubmit}>
        <section>
          <p className="roomsFormEdit__properties">Room Type:</p>
          <select name="roomType" onChange={handleChange} defaultValue={roomType}>
            <option value="Standard Room">Standard Room</option>
            <option value="Deluxe Room">Deluxe Room</option>
            <option value="Suite Room">Suite Room</option>
            <option value="Royal Room">Royal Room</option>
            <option value="Accessible Room">Accessible Room</option>
          </select>
          <p className="roomsFormEdit__properties">Room Image: </p>
          <input type="file" name="image" accept="image/*" onChange={handleChange} defaultValue={image} />
          <p className="roomsForm__properties">Bed Type:</p>
          <select name="bedType" onChange={handleChange} defaultValue={bedType}>
            <option value="King">King</option>
            <option value="Queen">Queen</option>
            <option value="Twin">Twin</option>
            <option value="Double">Double</option>
          </select>
          <p className="roomsFormEdit__properties">Amenities:</p>
          <div className="roosmForm__propertiesAmenities">
            <p className="roomsForm__properties">Shower:</p>
            <input type="checkbox" name="amenitiesShower" value="true" onChange={handleChange} defaultValue={amenitiesShower} />
            <p className="roomsForm__properties">TV:</p>
            <input type="checkbox" name="amenitiesTV" value="true" onChange={handleChange} defaultValue={amenitiesTV} />
            <p className="roomsForm__properties">Couch:</p>
            <input type="checkbox" name="amenitiesCouch" value="true" onChange={handleChange} defaultValue={amenitiesCouch} />
            <p className="roomsForm__properties">Pool View:</p>
            <input type="checkbox" name="amenitiesPool" value="true" onChange={handleChange} defaultValue={amenitiesPool} />
          </div>
          <p className="roomsFormEdit__properties">Price Per Night:</p>
          <input type="number" name="pricePerNight" onChange={handleChange} defaultValue={pricePerNight} />
          <p className="roomsFormEdit__properties">Offer Price:</p>
          <input type="number" name="offerPrice" onChange={handleChange} defaultValue={offerPrice} />
        </section>
        <div className="roomsFormEdit__buttonEnv">
          <button className="roomsFormEdit__button" type="submit">Edit</button>
        </div>
      </form>
    </div>

  );
};

RoomsFormEdit.propTypes = {
  roomType: PropTypes.string.isRequired,
  image: PropTypes.string,
  bedType: PropTypes.string,
  amenitiesPool: PropTypes.bool,
  amenitiesShower: PropTypes.bool,
  amenitiesTV: PropTypes.bool,
  amenitiesCouch: PropTypes.bool,
  pricePerNight: PropTypes.number.isRequired,
  offerPrice: PropTypes.number,
  id: PropTypes.string.isRequired,
};
RoomsFormEdit.defaultProps = {
  image: './grey.jpg',
  bedType: '',
  amenitiesPool: false,
  amenitiesShower: false,
  amenitiesTV: false,
  amenitiesCouch: false,
  offerPrice: 0,
};

export default RoomsFormEdit;
