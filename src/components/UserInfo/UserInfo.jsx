/* eslint-disable no-unused-vars */
import './styles.css';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import useForm from '../../hooks/useForm';

const UserInfo = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const [modal, setModal] = useState(false);

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
        {user.name
          ? <p className="user-info__info-user-data">{user.name}</p>
          : <br />}
        <b className="user-info__info-requested-form">Birthday</b>
        {user.birthday
          ? <p className="user-info__info-user-data">{user.birthday}</p>
          : <br />}
        <b className="user-info__info-requested-form">Gender</b>
        {user.gender
          ? <p className="user-info__info-user-data">{user.gender}</p>
          : <br />}
        <b className="user-info__info-requested-form">Street Address</b>
        {user.address
          ? <p className="user-info__info-user-data">{user.address}</p>
          : <br />}
        <b className="user-info__info-requested-form">City/State</b>
        {user.city
          ? <p className="user-info__info-user-data">{user.city}</p>
          : <br />}
        <b className="user-info__info-requested-form">Zip</b>
        {user.zipCode
          ? <p className="user-info__info-user-data">{user.zipCode}</p>
          : <br />}
      </section>
      <h2 className="user-info__login-title">Login Details</h2>
      <section className="user-info__login">
        <b className="user-info__login-info-requested">Email Address</b>
        {user.email
          ? <p className="user-info__info-user-data">{user.email}</p>
          : <br />}
        <button type="submit" className="user-info__login-edit-button">Edit</button>
        <b className="user-info__login-info-requested">Phone No</b>
        {user.phone
          ? <p className="user-info__info-user-data">{user.phone}</p>
          : <br />}
        <button type="submit" className="user-info__login-edit-button">Edit</button>
        <b className="user-info__login-info-requested">Password</b>
        {user.password
          ? <p className="user-info__info-user-data">******</p>
          : <br />}
        <button type="submit" className="user-info__login-edit-button">Edit</button>
      </section>
      {modal === true ? (
        <Modal
          modalFunction={setModal}
        >
          <form action="" className="user-info__edit-form">
            <label htmlFor="name" className="user-info__form-label">
              Name
              <input
                className=""
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                defaultValue={user.name}
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
                defaultValue={user.birthday}
              />
            </label>
            <label htmlFor="gender" className="user-info__form-label">
              Gender
              <select name="gender" id="gender">
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
                defaultValue={user.address}
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
                defaultValue={user.city}
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
                defaultValue={user.city}
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
                defaultValue={user.zipCode}
              />
            </label>
            <button type="submit">Save</button>
          </form>
        </Modal>
      ) : null}c
    </div>
  );
};

export default UserInfo;
