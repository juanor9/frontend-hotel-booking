import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SliderNav from '../../components/SliderNav/SliderNav';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import './style.css';

const UserRegistration = () => (
  <div className="user-registration">
    <header className="user-registration__header">
      <NavigationBar />
      <SliderNav />
    </header>
    <div className="user-registration__form-container">
      <RegisterForm />
    </div>
  </div>
);

export default UserRegistration;
