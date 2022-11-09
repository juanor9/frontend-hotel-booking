import React from "react";
import "./style.css";

function RegisterForm() {
  return (
    <section id="register-form" className="register-form">
      <h2 className="register-form__header">Sign up</h2>
      <article id="social-media-sign-up" className="register-form__section">
        <p>Sign Up With</p>
        <ul className="register-form__social-media-list">
          <li className="register-form__list-item">
            <button className="register-form__social-media-button">
              Facebook
            </button>
          </li>
          <li className="register-form__list-item">
            <button className="register-form__social-media-button">
              Google
            </button>
          </li>
        </ul>
      </article>
      <div className="register-form__divider">
        <span className="register-form__divider-line"></span>
        <p>Or</p>
        <span className="register-form__divider-line"></span>
      </div>
      <article id="sign-up-form" className="register-form__section">
        <form action="">
          <div className="register-form__input-group">
            <label htmlFor="name">Full Name</label>
            <input
              className="register-form__input"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="register-form__input-group">
            <label htmlFor="email">Email Address</label>
            <input
              className="register-form__input"
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
            />
          </div>
          <div className="register-form__input-group">
            <label htmlFor="password">Password</label>
            <input
              className="register-form__input"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="register-form__create-button">
            Create account
          </button>
        </form>
      </article>
      <div className="register-form__divider">
        <span className="register-form__divider-line"></span>
        <p>Or</p>
        <span className="register-form__divider-line"></span>
      </div>
      <article id="login" className="register-form__section">
        <button className="register-form__login-button">Login</button>
      </article>
    </section>
  );
}

export default RegisterForm;
