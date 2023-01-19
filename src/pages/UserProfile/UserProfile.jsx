import './style.css';
<<<<<<< HEAD
import { useState, useEffect } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import ProfileMenu from '../../components/ProfileMenu/ProfileMenu';
import SliderNav from '../../components/SliderNav/SliderNav';
import UserInfo from '../../components/UserInfo/UserInfo';
import UserBookings from '../../components/UserBookings/UserBookings';
=======
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AdminBookings from '../../components/AdminBookings/AdminBookings';
import AdminHotels from '../../components/AdminHotels/AdminHotels';
import AdminMenu from '../../components/AdminMenu/AdminMenu';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import ProfileMenu from '../../components/ProfileMenu/ProfileMenu';
import SliderNav from '../../components/SliderNav/SliderNav';
import UserBookings from '../../components/UserBookings/UserBookings';
import UserInfo from '../../components/UserInfo/UserInfo';
>>>>>>> 53913353ff560239ebb3532b03145dfbe2803ed9
import UserPayments from '../../components/UserPayments/UserPayments';

const UserProfile = () => {
  const [navTab, setNavTab] = useState('profile');
<<<<<<< HEAD

  useEffect(() => {
  }, [navTab]);

  return (
    <div className="profile">
      <div className="profile__header">
        <NavigationBar />
        <SliderNav />
      </div>
      <div className="profile__container">
        <div className="profile__profile-menu">
          <ProfileMenu navTab={navTab} setNavTab={setNavTab} />
        </div>
        {navTab === 'profile'
          ? (
            <div className="profile__user-info">
              <UserInfo />
            </div>
          )
          : null}
        {navTab === 'bookings'
          ? (
            <div className="profile__user-info">
              <UserBookings />
            </div>
          )
          : null}
        {navTab === 'payments'
          ? (
            <div className="profile__user-info">
              <UserPayments />
            </div>
          )
          : null}
      </div>
    </div>
  );
=======
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {}, [navTab]);

  useEffect(() => {
    if (user) {
      setUserRole(user.role);
    }
  }, [userRole, user]);

  let profile;

  if (userRole === '' || undefined) {
    profile = navigate('/register');
  }

  if (userRole === 'USER') {
    profile = (
      <div className="profile">
        <div className="profile__header">
          <NavigationBar />
          <SliderNav />
        </div>
        <div className="profile__container">
          <div className="profile__profile-menu">
            <ProfileMenu navTab={navTab} setNavTab={setNavTab} />
          </div>
          {navTab === 'profile' ? (
            <div className="profile__user-info">
              <UserInfo />
            </div>
          ) : null}
          {navTab === 'bookings' ? (
            <div className="profile__user-info">
              <UserBookings />
            </div>
          ) : null}
          {navTab === 'payments' ? (
            <div className="profile__user-info">
              <UserPayments />
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  if (userRole === 'ADMIN') {
    profile = (
      <div className="profile">
        <div className="profile__header">
          <NavigationBar />
          <SliderNav />
        </div>
        <div className="profile__container">
          <div className="profile__profile-menu">
            <AdminMenu navTab={navTab} setNavTab={setNavTab} />
          </div>
          {navTab === 'profile' ? (
            <div className="profile__user-info">
              <UserInfo />
            </div>
          ) : null}
          {navTab === 'hotels' ? (
            <div className="profile__user-info">
              <AdminHotels />
            </div>
          ) : null}
          {navTab === 'adminBookings' ? (
            <div className="profile__user-info">
              <AdminBookings />
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  return profile;
>>>>>>> 53913353ff560239ebb3532b03145dfbe2803ed9
};

export default UserProfile;
