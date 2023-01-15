/* eslint-disable no-unused-vars */
import './style.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { resetPassword } from '../../services/auth';
import LoginForm from '../../components/LoginForm/LoginForm';
import Modal from '../../components/Modal/Modal';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SliderNav from '../../components/SliderNav/SliderNav';
import useForm from '../../hooks/useForm';

const UserLogin = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const handleRecoverClick = () => {
    setModal(true);
  };

  const { form, handleChange } = useForm({});
  const handleClick = () => {
    document.getElementById('reset-password-form').reset();
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(resetPassword(form.email));
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <div className="user-login">
      <header className="user-login__header">
        <NavigationBar />
        <SliderNav />
      </header>
      <div className="user-login__form-container">
        <LoginForm />
        <div className="user-login__other">
          <p>Are you a new user?
            <Link to="/register">
              Please register
            </Link>
          </p>
          <p>Did you lost your password?
            <button
              type="button"
              onClick={handleRecoverClick}
            >Reset your password
            </button>
          </p>
        </div>
      </div>
      {modal === true ? (
        <Modal modalFunction={setModal}>
          <div>
            <p>To reset your password please provide us with your email.</p>
            <form onSubmit={handleSubmit} id="reset-password-form">
              <label
                htmlFor="email"
                className="register-form__input-group"
              >
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
              <button
                type="submit"
                className="register-form__create-button"
                onClick={handleClick}
              >
                Send
              </button>
            </form>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default UserLogin;
