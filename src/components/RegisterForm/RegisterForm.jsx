/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './style.css';

const RegisterForm = () => {
  // const [username, setUsername] = useState('');

  const [form, setForm] = useState({});

  const handleChangeForm = ({ target }) => {
    const { name, value } = target;

    setForm({
      ...form, [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      form,
    };

    console.log(form);
  };
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
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="name" className="register-form__input-group">
            Full Name
            <input
              className="register-form__input"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              onChange={handleChangeForm}
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
            />
          </label>

          <button
            type="submit"
            className="register-form__create-button"
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
        <button type="button" className="register-form__login-button">
          Login
        </button>
      </article>
    </section>
  );
};

export default RegisterForm;
