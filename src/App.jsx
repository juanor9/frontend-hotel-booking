import { Routes, Route } from 'react-router-dom';
import ActivateUser from './pages/ActivateUser/ActivateUser';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Hotels from './pages/Hotels/Hotels';
import HotelsManagment from './pages/HotelsManagment/HotelsManagment';
import HotelsRegistration from './pages/HotelsRegistration/HotelsRegistration';
import Rooms from './pages/Rooms/Rooms';
import Success from './pages/Success/Success';
import UserLogin from './pages/UserLogin/UserLogin';
import UserProfile from './pages/UserProfile/UserProfile';
import UserRegistration from './pages/UserRegistration/UserRegistration';
import RoomsRegistration from './pages/RoomsRegistration/RoomsRegistration';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/hotels/:id" element={<Rooms />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/success" element={<Success />} />
      <Route path="/register" element={<UserRegistration />} />
      <Route path="/activate/:token" element={<ActivateUser />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/admin/hotels-registration" element={<HotelsRegistration />} />
      <Route path="/admin/hotels-managment" element={<HotelsManagment />} />
      <Route path="/admin/rooms-registration/:id" element={<RoomsRegistration />} />
    </Routes>
    <Footer />
  </>

);

export default App;
