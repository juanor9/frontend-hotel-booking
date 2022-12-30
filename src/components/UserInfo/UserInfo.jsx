import './styles.css';

const UserInfo = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
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
          {user.name
            ? <p className="user-info__info-user-data">{user.name}</p>
            : null}
          {user.birthday
            ? <p className="user-info__info-user-data">{user.birthday}</p>
            : null}
          {user.gender
            ? <p className="user-info__info-user-data">{user.gender}</p>
            : null}
          {user.address
            ? <p className="user-info__info-user-data">{user.address}</p>
            : null}
          {user.city
            ? <p className="user-info__info-user-data">{user.city}</p>
            : null}
          {user.zipCode
            ? <p className="user-info__info-user-data">{user.zipCode}</p>
            : null}
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
          {user.email
            ? <p className="user-info__info-user-data">{user.email}</p>
            : null}
          {/* <p className="user-info__login-user-data">{phone}</p> ADD IT TO USER.MODEL */}

          {/* <p className="user-info__login-user-data">{password}</p>
           ADD IT TO PROFILE */}
        </div>
        <div className="user-info__login-edit">
          <button type="submit" className="user-info__login-edit-button">Edit</button>
          <button type="submit" className="user-info__login-edit-button">Edit</button>
          <button type="submit" className="user-info__login-edit-button">Edit</button>
        </div>
      </section>
    </div>
  );
};

export default UserInfo;
