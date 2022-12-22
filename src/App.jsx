import { Routes, Route } from 'react-router-dom';
import Success from './pages/Success/Success';
import Hotels from './pages/Hotels/Hotels';
import Rooms from './pages/Rooms/Rooms';
import Home from './pages/Home/Home';
import UserProfile from './pages/UserProfile/UserProfile';
import UserRegistration from './pages/UserRegistration/UserRegistration';
import HotelsRegistration from './pages/HotelsRegistration/HotelsRegistration';
import HotelsManagment from './pages/HotelsManagment/HotelsManagment';
import Footer from './components/Footer/Footer';
import Bookings from './pages/Bookings/Bookings';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/hotels/:id" element={<Rooms />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/success" element={<Success />} />
      <Route path="/register" element={<UserRegistration />} />
      <Route path="/admin/hotels-registration" element={<HotelsRegistration />} />
      <Route path="/admin/hotels-managment" element={<HotelsManagment />} />
      <Route path="/bookings" element={<Bookings />} />
    </Routes>
    <Footer />
  </>

);

export default App;
