import HotelContact from '../../components/HotelContact/HotelContact';
import hotels from '../../assets/hotel.json';

const hotel = hotels.hotels[0];

const Home = () => (
  <div>
    Home
    <HotelContact
      address={hotel.address}
      phone={hotel.contact.phone}
      email={hotel.contact.email}
      socialMedia={hotel.socialMedia}
      checkin={hotel.checkin}
      checkout={hotel.checkout}
    />
  </div>
);

export default Home;
