/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../hooks/useForm';
import { createUser } from '../../services/users';
import './style.css';
import Modal from '../Modal/Modal';

const RegisterForm = () => {
  const { users } = useSelector((state) => state.users);
  const [modal, setModal] = useState(false);
  const { form, handleChange } = useForm({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(createUser(form));
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleClick = () => {
    document.getElementById('register-form__form').reset();
  };
  useEffect(() => {
    if (users.length !== 0) setModal(true);
  }, [users]);
  const message = 'User has been correctly created. Please check your email to confirm your registration';
  return (
    <section id="register-form" className="register-form">
      <h2 className="register-form__header">Sign up</h2>
      <article id="social-media-sign-up" className="register-form__section">
        <p>Sign Up With</p>
        <ul className="register-form__social-media-list">
          <li className="register-form__list-item">
            <button
              type="button"
              className="register-form__social-media-button register-form__facebook"
            >
              Facebook
            </button>
          </li>
          <li className="register-form__list-item">
            <button
              type="button"
              className="register-form__social-media-button register-form__google"
            >
              Google
            </button>
          </li>
        </ul>
      </article>
      <div className="register-form__divider">
        <span className="register-form__divider-line" />
        <p>Or</p>
        <span className="register-form__divider-line" />
      </div>
      <article id="sign-up-form" className="register-form__section">
        <form action="" onSubmit={handleSubmit} id="register-form__form">
          <label htmlFor="name" className="register-form__input-group">
            Full Name
            <input
              className="register-form__input"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              onChange={handleChange}
            />
          </label>

          <label htmlFor="email" className="register-form__input-group">
            Email Address
            <input
              className="register-form__input"
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
              onChange={handleChange}
            />
          </label>

          <label htmlFor="password" className="register-form__input-group">
            Password
            <input
              className="register-form__input"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </label>

          <button
            type="submit"
            className="register-form__create-button"
            onClick={handleClick}
          >
            Create account
          </button>
        </form>
      </article>
      <div className="register-form__divider">
        <span className="register-form__divider-line" />
        <p>Or</p>
        <span className="register-form__divider-line" />
      </div>
      <article id="login" className="register-form__section">
        <button
          type="button"
          className="register-form__login-button"
          onClick={() => navigate('/login')}
        >
          Login
        </button>
      </article>
      {modal === true ? (
        <Modal
          modalFunction={setModal}
          message={message}
        />
      ) : null}
    </section>
  );
};

export default RegisterForm;
