/* eslint-disable no-unused-vars */
import './styles.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import useForm from '../../hooks/useForm';
import { resetPasswordUpdate } from '../../services/auth';

const PasswordReset = ({ token }) => {
  const { form, handleChange } = useForm({});
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      form.token = token;
      delete form.passwordConfirm;
      dispatch(resetPasswordUpdate(form));
      navigate('/');
    } catch (error) {
      throw new Error(error);
    }
  };
  useEffect(() => {
    const { newPassword, passwordConfirm } = form;
    const passwordConfirmInput = document.getElementById('passwordConfirm');
    const formButton = document.getElementById('new-password__button');
    if (passwordConfirm !== undefined) {
      if (newPassword !== passwordConfirm) {
        passwordConfirmInput.className = '';
        passwordConfirmInput.classList.add('new-password-form__input--dont-match');
        setMessage('Passwords do not match.');
        formButton.classList.add('register-form__create-button--disable');
      } else {
        passwordConfirmInput.className = '';
        passwordConfirmInput.classList.add('new-password-form__input--match');
        setMessage('');
        formButton.classList.remove('register-form__create-button--disable');
      }
    }
  }, [form]);
  return (
    <form
      onSubmit={handleSubmit}
      id="new-password-form"
      className="new-password-form"
    >
      <label
        htmlFor="new-password"
        className="new-password-form__label"
      >
        New Password
        <input
          className="new-password-form__input"
          type="password"
          name="newPassword"
          id="newPassword"
          placeholder="Enter your new password"
          onChange={handleChange}
        />
      </label>
      <label
        htmlFor="password-confirm"
        className="new-password-form__label"
      >
        Confirm Password
        <input
          className="new-password-form__input"
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
          placeholder="Confirm your password"
          onChange={handleChange}
        />
      </label>
      <p className="new-password__message">{message}</p>
      <button
        id="new-password__button"
        type="submit"
        className="register-form__create-button register-form__create-button--disable"
        // onClick={handleClick}
      >
        Send
      </button>
    </form>
  );
};
PasswordReset.propTypes = {
  token: PropTypes.string.isRequired,
};
export default PasswordReset;
