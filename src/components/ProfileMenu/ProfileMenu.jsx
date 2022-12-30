import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import defaultProfilePic from '../../assets/perfilImage.jpg';

const ProfileMenu = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="profile-menu">
      <section className="profile-menu__figures">
        {user.profilePic
          ? (
            <img
              className="profile-menu__pic"
              alt="profile"
              src={user.profilePic}
            />
          )
          : (
            <img
              className="profile-menu__pic"
              alt="profile"
              src={defaultProfilePic}
            />
          )}

        <div className="profile-menu__edit-container">
          <FontAwesomeIcon
            icon={faPenToSquare}
            key="edit"
            size="lg"
          />
        </div>
      </section>
      {user.name
        ? <h2 className="profile-menu__name">{user.name}</h2>
        : null}
      {user.email
        ? <p className="profile-menu__phone">{user.email}</p>
        : null}
      {/* <p className="profile-menu__phone">{phone}</p> ADD TO USER MODEL */}
      <section className="profile-menu__bar">
        <p className="profile-menu__barOptions">Profile</p>
        <p className="profile-menu__barOptions">Bookings</p>
        <p className="profile-menu__barOptions">Cards & Payments</p>
      </section>
    </div>
  );
};

export default ProfileMenu;
