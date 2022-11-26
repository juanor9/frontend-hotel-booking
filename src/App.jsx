import { Routes, Route } from 'react-router-dom';
import Hotels from './pages/Hotels/Hotels';
import Rooms from './pages/Rooms/Rooms';
import Home from './pages/Home/Home';
import UserRegistration from './pages/UserRegistration/UserRegistration';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/hotels" element={<Hotels />} />
    <Route path="/hotel/:id" element={<Rooms />} />
    <Route path="/register" element={<UserRegistration />} />
  </Routes>
);

export default App;
