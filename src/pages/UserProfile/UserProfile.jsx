import './style.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import ProfileMenu from '../../components/ProfileMenu/ProfileMenu';
import SliderNav from '../../components/SliderNav/SliderNav';
import UserInfo from '../../components/UserInfo/UserInfo';
import UserBookings from '../../components/UserBookings/UserBookings';
import UserPayments from '../../components/UserPayments/UserPayments';
import AdminMenu from '../../components/AdminMenu/AdminMenu';
import AdminHotels from '../../components/AdminHotels/AdminHotels';
import AdminBookings from '../../components/AdminBookings/AdminBookings';

const UserProfile = () => {
  const [navTab, setNavTab] = useState('profile');
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
  }, [navTab]);

  useEffect(() => {
    if (user) { setUserRole(user.role); }
  }, [userRole, user]);

  let profile;

  if (userRole === '' || undefined) {
    profile = (navigate('/register'));
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
          {navTab === 'profile'
            ? (
              <div className="profile__user-info">
                <UserInfo />
              </div>
            )
            : null}
          {navTab === 'hotels'
            ? (
              <div className="profile__user-info">
                <AdminHotels />
              </div>
            )
            : null}
          {navTab === 'adminBookings'
            ? (
              <div className="profile__user-info">
                <AdminBookings />
              </div>
            )
            : null}
        </div>
      </div>
    );
  }

  return profile;
};

export default UserProfile;
