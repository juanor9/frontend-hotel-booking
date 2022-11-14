import './styles.css';

const UserInfo = () => (
  <div className="card">
    <section className="card__title">
      <h2>Profile</h2>
      <button className="card__titleButton" type="submit">Edit</button>
    </section>
    <section className="card__info">
      <div className="card__infoRequested">
        <h4 className="card__infoRequestedForm">Name</h4>
        <h4 className="card__infoRequestedForm">Birthday</h4>
        <h4 className="card__infoRequestedForm">Gender</h4>
        <h4 className="card__infoRequestedForm">Street Address</h4>
        <h4 className="card__infoRequestedForm">City/State</h4>
        <h4 className="card__infoRequestedForm">Zip</h4>
      </div>
      <div className="card__infoUser">
        <p className="card__infoUserData">Mark Enderess</p>
        <p className="card__infoUserData">25/12/1990</p>
        <p className="card__infoUserData">Female</p>
        <p className="card__infoUserData">549 Sulphur Springs Road</p>
        <p className="card__infoUserData">Downers Grove, IL</p>
        <p className="card__infoUserData">60515</p>
      </div>
    </section>
    <h2 className="card__loginTitle">Login Details</h2>
    <section className="card__login">
      <div className="card__loginInfo">
        <h4 className="card__loginInfoRequested">Email Address</h4>
        <h4 className="card__loginInfoRequested">Phone No</h4>
        <h4 className="card__loginInfoRequested">Password</h4>
      </div>
      <div className="card__loginUser">
        <p className="card__loginUserData">mark.enderess@mail.com</p>
        <p className="card__loginUserData">+91 123 - 456 - 7890</p>
        <p className="card__loginUserData">************</p>
      </div>
      <div className="card__loginEdit">
        <button type="submit" className="card__loginEditButton">Edit</button>
        <button type="submit" className="card__loginEditButton">Edit</button>
        <button type="submit" className="card__loginEditButton">Edit</button>
      </div>
    </section>
  </div>
);

export default UserInfo;
