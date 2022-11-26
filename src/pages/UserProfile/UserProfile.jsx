import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';
import ProfileMenu from '../../components/ProfileMenu/ProfileMenu';
import UserInfo from '../../components/UserInfo/UserInfo';

const UserProfile = () => (
  <div className="hotel-details">
    <NavigationBar />
    <div className="hotel-details__container">
      <ProfileMenu />
      <UserInfo />
    </div>
    <Footer />
  </div>
);

export default UserProfile;
