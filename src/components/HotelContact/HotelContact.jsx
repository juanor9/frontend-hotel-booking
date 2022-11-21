import './style.css';

const HotelContact = () => (
  <section id="hotel-contact" className="hotel-contact">
    <h3 className="hotel-contact__header">Contact Info</h3>
    <div className="hotel-contact__contact-details">
      <p className="hotel-contact__address">Address</p>
      <p className="hotel-contact__phone">Phone number</p>
      <p className="hotel-contact__email">E-mail</p>
      <ul className="hotel-contact__social-media">
        <li className="hotel-contact__social-media-item">Social Media</li>
      </ul>
      <hr className="hotel-contact__divider" />
      <p className="hotel-contact__checkin">Check-in</p>
      <p className="hotel-contact__checkout">Check-in</p>
    </div>

  </section>
);
export default HotelContact;
