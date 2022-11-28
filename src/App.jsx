import { Routes, Route } from 'react-router-dom';
import Success from './pages/Success/Success';
import Hotels from './pages/Hotels/Hotels';
import Rooms from './pages/Rooms/Rooms';
import Home from './pages/Home/Home';
import UserProfile from './pages/UserProfile/UserProfile';
import UserRegistration from './pages/UserRegistration/UserRegistration';
import HotelsRegistration from './pages/HotelsRegistration/HotelsRegistration';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/hotels" element={<Hotels />} />
    <Route path="/hotel/:id" element={<Rooms />} />
<<<<<<< HEAD
    <Route path="/profile" element={<UserProfile />} />
=======
    <Route path="/success" element={<Success />} />
>>>>>>> 78200ed755b8504577308eb60d16447f1147e23c
    <Route path="/register" element={<UserRegistration />} />
    <Route path="/hotels-registration" element={<HotelsRegistration />} />
  </Routes>
);

export default App;
