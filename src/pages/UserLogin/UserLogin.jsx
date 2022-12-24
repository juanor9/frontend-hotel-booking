import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SliderNav from '../../components/SliderNav/SliderNav';
import './style.css';
import LoginForm from '../../components/LoginForm/LoginForm';

const UserLogin = () => (
  <div className="user-login">
    <header className="user-login__header">
      <NavigationBar />
      <SliderNav />
    </header>
    <div className="user-login__form-container">
      <LoginForm />
    </div>
  </div>
);

export default UserLogin;
