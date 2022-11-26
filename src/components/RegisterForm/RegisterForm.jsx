import useForm from '../../hooks/useForm';
import createUser from '../../services/users';
import './style.css';

const RegisterForm = () => {
  const { form, handleChange } = useForm({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await createUser(form);
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleClick = () => {
    document.getElementById('register-form__form').reset();
  };
  return (
    <section id="register-form" className="register-form">
      <h2 className="register-form__header">Sign up</h2>
      <article
        id="social-media-sign-up"
        className="register-form__section"
      >
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
        <form
          action=""
          onSubmit={handleSubmit}
          id="register-form__form"
        >
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
        >
          Login
        </button>
      </article>
    </section>
  );
};

export default RegisterForm;
