import NavigationBar from '../../components/NavigationBar/NavigationBar';
import ProfileMenu from '../../components/ProfileMenu/ProfileMenu';
import UserInfo from '../../components/UserInfo/UserInfo';
import SliderNav from '../../components/SliderNav/SliderNav';
import './style.css';

const UserProfile = () => (
  <div className="profile">
    <div className="profile__header">
      <NavigationBar />
      <SliderNav />
    </div>
    <div className="profile__container">
      <div className="profile__profile-menu">
        <ProfileMenu />
      </div>
      <div className="profile__user-info">
        <UserInfo />
      </div>
    </div>
  </div>
);

export default UserProfile;
