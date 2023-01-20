import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import ActivateUser from './pages/ActivateUser/ActivateUser';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Hotels from './pages/Hotels/Hotels';
import HotelsFiltered from './pages/HotelsFiltered/HotelsFiltered';
import HotelsManagment from './pages/HotelsManagment/HotelsManagment';
import HotelsRegistration from './pages/HotelsRegistration/HotelsRegistration';
import Rooms from './pages/Rooms/Rooms';
import RoomsRegistration from './pages/RoomsRegistration/RoomsRegistration';
import Success from './pages/Success/Success';
import UserLogin from './pages/UserLogin/UserLogin';
import UserProfile from './pages/UserProfile/UserProfile';
import UserRegistration from './pages/UserRegistration/UserRegistration';
import Bookings from './pages/Bookings/Bookings';
import BookingPayment from './pages/BookingPayment/BookingPayment';

const App = () => {
  useEffect(() => {
    document.title = 'Hotel Booking | By Juan Orjuela, Diana Quinche & Julian Gómez';
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activate/:token" element={<ActivateUser />} />
        <Route path="/admin/hotels-managment" element={<HotelsManagment />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/bookings-payment" element={<BookingPayment />} />
        <Route path="/admin/hotels-registration" element={<HotelsRegistration />} />
        <Route path="/admin/rooms-registration/:id" element={<RoomsRegistration />} />
        <Route path="/hotels-filtered" element={<HotelsFiltered />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:id" element={<Rooms />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/register" element={<UserRegistration />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </>

  );
};

export default App;
