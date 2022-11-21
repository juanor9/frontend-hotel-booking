import './style.css';
import PropTypes from 'prop-types';

const HotelContact = (props) => {
  const {
    address,
    phone,
    email,
    socialMedia,
    checkin,
    checkout,
  } = props;
  return (
    <section id="hotel-contact" className="hotel-contact">
      <h3 className="hotel-contact__header">Contact Info</h3>
      <div className="hotel-contact__contact-details">
        <p className="hotel-contact__address">{address}</p>
        <p className="hotel-contact__phone">{phone}</p>
        <p className="hotel-contact__email">{email}</p>
        <ul className="hotel-contact__social-media">
          <li className="hotel-contact__social-media-item">{socialMedia}</li>
        </ul>
        <hr className="hotel-contact__divider" />
        <p className="hotel-contact__checkin">{checkin}</p>
        <p className="hotel-contact__checkout">{checkout}</p>
      </div>

    </section>
  );
};
HotelContact.propTypes = {
  address: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  socialMedia: PropTypes.arrayOf(PropTypes.string),
  checkin: PropTypes.string,
  checkout: PropTypes.string,
};
HotelContact.defaultProps = {
  address: 'No address available',
  phone: 'No phone number available',
  email: 'No e-mail available',
  socialMedia: [''],
  checkin: 'No check-in hour available',
  checkout: 'No check-out hour available',
};
export default HotelContact;
