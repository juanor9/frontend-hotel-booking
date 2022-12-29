/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import useForm from '../../hooks/useForm';
import { login } from '../../services/auth';
import './style.css';

const LoginForm = () => {
  const { user } = useSelector((state) => state.user);
  const { form, handleChange } = useForm({});
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(login(form));
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleClick = () => {
    document.getElementById('login-form__form').reset();
  };
  return (
    <section id="login-form" className="login-form">
      <h2 className="login-form__header">Login</h2>
      <article id="sign-up-form" className="login-form__section">
        <form action="" onSubmit={handleSubmit} id="login-form__form">
          <label htmlFor="email" className="login-form__input-group">
            Email Address
            <input
              className="login-form__input"
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
              onChange={handleChange}
            />
          </label>

          <label htmlFor="password" className="login-form__input-group">
            Password
            <input
              className="login-form__input"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </label>

          <button
            type="submit"
            className="login-form__create-button"
            onClick={handleClick}
          >
            Login
          </button>
        </form>
      </article>
    </section>
  );
};

export default LoginForm;
