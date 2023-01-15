import './style.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationPin,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

const HotelContact = (props) => {
  const {
    address, phone, email, socialMedia, checkin, checkout,
  } = props;
  return (
    <section id="hotel-contact" className="hotel-contact">
      <h3 className="hotel-contact__header">Contact Info</h3>
      <div className="hotel-contact__contact-details">
        <p className="hotel-contact__address">
          {' '}
          <FontAwesomeIcon icon={faLocationPin} key="location" />&nbsp;
          {address}
        </p>
        <p className="hotel-contact__phone">
          <FontAwesomeIcon icon={faPhone} key="phone" />&nbsp; {phone}
        </p>
        <p className="hotel-contact__email">
          <FontAwesomeIcon icon={faEnvelope} key="email" /> {email}
        </p>
        <ul className="hotel-contact__social-media">
          {socialMedia.facebook ? (
            <li>
              <a
                href={socialMedia.facebook}
                className="hotel-contact__social-media-link"
              >
                <FontAwesomeIcon icon={faFacebookF} key="Facebook link" />
              </a>
            </li>
          ) : null}
        </ul>
        <hr className="hotel-contact__divider" />
        <p className="hotel-contact__checkin">Check-in: {checkin}</p>
        <p className="hotel-contact__checkout">Check-out: {checkout}</p>
      </div>
    </section>
  );
};
HotelContact.propTypes = {
  address: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  socialMedia: PropTypes.shape({
    facebook: PropTypes.string,
  }),
  checkin: PropTypes.string,
  checkout: PropTypes.string,
};
HotelContact.defaultProps = {
  address: 'No address available',
  phone: 'No phone number available',
  email: 'No e-mail available',
  socialMedia: {},
  checkin: 'No check-in hour available',
  checkout: 'No check-out hour available',
};
export default HotelContact;
