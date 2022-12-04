import PropTypes from 'prop-types';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenToSquare,
} from '@fortawesome/free-regular-svg-icons';
import defaultProfilePic from '../../assets/perfilImage.jpg';

const ProfileMenu = ({
  name, phone, email, profileImage,
}) => (
  <div className="profile-menu">
    <section className="profile-menu__figures">
      <img
        className="profile-menu__pic"
        alt="profile"
        src={profileImage}
      />
      <div className="profile-menu__edit-container">
        <FontAwesomeIcon
          icon={faPenToSquare}
          key="edit"
          size="lg"
        />
      </div>
    </section>
    <h2 className="profile-menu__name">{name}</h2>
    <p className="profile-menu__phone">{phone}</p>
    <p className="profile-menu__email">{email}</p>
    <section className="profile-menu__bar">
      <p className="profile-menu__barOptions">Profile</p>
      <p className="profile-menu__barOptions">Bookings</p>
      <p className="profile-menu__barOptions">Cards & Payments</p>
    </section>
  </div>
);

ProfileMenu.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string,
  email: PropTypes.string,
  profileImage: PropTypes.string,
};
ProfileMenu.defaultProps = {
  phone: 'No phone number registered',
  email: 'No email registered',
  profileImage: defaultProfilePic,
};

export default ProfileMenu;
