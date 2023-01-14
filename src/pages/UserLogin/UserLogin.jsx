import './style.css';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SliderNav from '../../components/SliderNav/SliderNav';

const UserLogin = () => (
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
          <button type="button">Reset your password</button>

        </p>
      </div>
    </div>
  </div>
);

export default UserLogin;
