import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateUser } from '../../services/users';
import { getUserById } from '../../features/users/usersSlice';
import Modal from '../Modal/Modal';
import useForm from '../../hooks/useForm';

const UserInfo = () => {
  const { _id } = JSON.parse(localStorage.getItem('user'));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserById(_id));
  }, []);
  const {
    name,
    email,
    gender,
    address,
    phone,
    birthday,
    city,
    zipCode,
    password,
  } = useSelector((state) => state.user.userData);
  let birthdayStr = '';
  if (birthday) {
    const isoBirthday = new Date(birthday);
    birthdayStr = isoBirthday.toISOString().substring(0, 10);
  }
  const [modal, setModal] = useState(false);
  const { form, handleChange } = useForm({});

  const handleClick = async (event) => {
    document.getElementById('user-edit-form').reset();
    setModal(false);
    event.preventDefault();
    const reqUser = { _id, formdata: { ...form } };
    try {
      dispatch(updateUser(reqUser));
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(updateUser(_id, form));
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
  }, [modal]);

  return (
    <div className="user-info">
      <section className="user-info__title">
        <h2>Profile</h2>
        <button
          className="user-info__title-button"
          type="submit"
          onClick={() => {
            setModal(true);
          }}
        >Edit
        </button>
      </section>
      <section className="user-info__info">
        <b className="user-info__info-requested-form">Name</b>
        {name
          ? <p className="user-info__info-user-data">{name}</p>
          : <br />}
        <b className="user-info__info-requested-form">Birthday</b>
        {birthday
          ? <p className="user-info__info-user-data">{birthdayStr}</p>
          : <br />}
        <b className="user-info__info-requested-form">Gender</b>
        {gender
          ? <p className="user-info__info-user-data">{gender}</p>
          : <br />}
        <b className="user-info__info-requested-form">Street Address</b>
        {address
          ? <p className="user-info__info-user-data">{address}</p>
          : <br />}
        <b className="user-info__info-requested-form">City/State</b>
        {city
          ? <p className="user-info__info-user-data">{city}</p>
          : <br />}
        <b className="user-info__info-requested-form">Zip</b>
        {zipCode
          ? <p className="user-info__info-user-data">{zipCode}</p>
          : <br />}
      </section>

      <section className="user-info__login">
        <h2 className="user-info__login-title">Login Details</h2>
        <b className="user-info__login-info-requested">Email Address</b>
        {email
          ? <p className="user-info__info-user-data">{email}</p>
          : <br />}
        <button type="submit" className="user-info__login-edit-button">Edit</button>
        <b className="user-info__login-info-requested">Phone No</b>
        {phone
          ? <p className="user-info__info-user-data">{phone}</p>
          : <br />}
        <button type="submit" className="user-info__login-edit-button">Edit</button>
        <b className="user-info__login-info-requested">Password</b>
        {password
          ? <p className="user-info__info-user-data">******</p>
          : <br />}
        <button type="submit" className="user-info__login-edit-button">Edit</button>
      </section>
      {modal === true ? (
        <Modal
          modalFunction={setModal}
        >
          <form
            onSubmit={handleSubmit}
            action=""
            className="user-info__edit-form"
            id="user-edit-form"
          >
            <label htmlFor="name" className="user-info__form-label">
              Name
              <input
                className=""
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                defaultValue={name}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="birthday" className="user-info__form-label">
              Birthday
              <input
                className=""
                type="date"
                name="birthday"
                id="birthday"
                placeholder="Enter your birthday"
                defaultValue={birthdayStr}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="gender" className="user-info__form-label">
              Gender
              <select
                name="gender"
                id="gender"
                onChange={handleChange}
              >
                <option value="">--- select your gender ---</option>
                <option value="female">female</option>
                <option value="masculine">masculine</option>
                <option value="other">other</option>
              </select>
            </label>
            <label htmlFor="address" className="user-info__form-label">
              Street Address
              <input
                className=""
                type="text"
                name="address"
                id="address"
                placeholder="Enter your adress"
                defaultValue={address}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="city" className="user-info__form-label">
              City/State
              <input
                className=""
                type="text"
                name="city"
                id="city"
                placeholder="Enter your city or state"
                defaultValue={city}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="zipCode" className="user-info__form-label">
              Zip
              <input
                className=""
                type="number"
                name="zipCode"
                id="zipCode"
                placeholder="Enter your zip code"
                defaultValue={zipCode}
                onChange={handleChange}
              />
            </label>
            <button
              type="submit"
              className="user-info__submit-button"
              onClick={handleClick}
            >Save
            </button>
          </form>
        </Modal>
      ) : null}
    </div>
  );
};

export default UserInfo;
