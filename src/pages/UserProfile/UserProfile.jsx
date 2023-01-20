import './style.css';
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

const UserProfile = () => {
  const [navTab, setNavTab] = useState('profile');
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
};

export default UserProfile;
