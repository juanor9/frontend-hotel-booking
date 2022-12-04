import PropTypes from 'prop-types';
import './styles.css';

const UserInfo = ({
  name, birthday, gender, address, city, zip, email, phone, password,
}) => (
  <div className="user-info">
    <section className="user-info__title">
      <h2>Profile</h2>
      <button className="user-info__title-button" type="submit">Edit</button>
    </section>
    <section className="user-info__info">
      <div className="user-info__info-requested">
        <h4 className="user-info__info-requested-form">Name</h4>
        <h4 className="user-info__info-requested-form">Birthday</h4>
        <h4 className="user-info__info-requested-form">Gender</h4>
        <h4 className="user-info__info-requested-form">Street Address</h4>
        <h4 className="user-info__info-requested-form">City/State</h4>
        <h4 className="user-info__info-requested-form">Zip</h4>
      </div>
      <div className="user-info__info-user">
        <p className="user-info__info-user-data">{name}</p>
        <p className="user-info__info-user-data">{birthday}</p>
        <p className="user-info__info-user-data">{gender}</p>
        <p className="user-info__info-user-data">{address}</p>
        <p className="user-info__info-user-data">{city}</p>
        <p className="user-info__info-user-data">{zip}</p>
      </div>
    </section>
    <h2 className="user-info__login-title">Login Details</h2>
    <section className="user-info__login">
      <div className="user-info__login-info">
        <h4 className="user-info__login-info-requested">Email Address</h4>
        <h4 className="user-info__login-info-requested">Phone No</h4>
        <h4 className="user-info__login-info-requested">Password</h4>
      </div>
      <div className="user-info__login-user">
        <p className="user-info__login-user-data">{email}</p>
        <p className="user-info__login-user-data">{phone}</p>
        <p className="user-info__login-user-data">{password}</p>
      </div>
      <div className="user-info__login-edit">
        <button type="submit" className="user-info__login-edit-button">Edit</button>
        <button type="submit" className="user-info__login-edit-button">Edit</button>
        <button type="submit" className="user-info__login-edit-button">Edit</button>
      </div>
    </section>
  </div>
);

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zip: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default UserInfo;
