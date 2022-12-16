import './styles.css';

const TravellerInfo = () => (
  <div className="traveller-info__cont">
    <h2>Traveller Information</h2>
    <div className="traveller-info__name">
      <div className="traveller-info__input">
        <p>First Name</p>
        <input className="traveller-info__space" type="text" placeholder="First Name" required />
      </div>
      <div className="traveller-info__input derecho">
        <p>Last Name</p>
        <input className="traveller-info__space" type="text" placeholder="Last Name" required />
      </div>
    </div>
    <div className="traveller-info__input">
      <p>Email Address</p>
      <input className="traveller-info__fact" type="email" placeholder="Enter Email" required />
    </div>
    <div className="traveller-info__input">
      <p>Contact Info</p>
      <input className="traveller-info__fact" type="tel" placeholder="Contact info" required />
    </div>
    <div className="traveller-info__input">
      <p>Special Request</p>
      <textarea className="traveller-info__fact traveller-info__area" placeholder="e.g.. early check-in, airport transfer" />
    </div>
    <div className="traveller-info__input">
      <p>Have A Coupon Code</p>
      <div className="traveller-info__name">
        <input className="traveller-info__fact" type="text" placeholder="Promo Code" />
        <button className="traveller-info__btn-promo" type="button">
          APLAY
        </button>
      </div>
    </div>
    <div className="traveller-info__btn-cont">
      <button className="traveller-info__btn" type="button">
        PLAY NOW
      </button>
    </div>

  </div>
);

export default TravellerInfo;
