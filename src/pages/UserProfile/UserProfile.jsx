import './style.css';
import { useState, useEffect } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import ProfileMenu from '../../components/ProfileMenu/ProfileMenu';
import SliderNav from '../../components/SliderNav/SliderNav';
import UserInfo from '../../components/UserInfo/UserInfo';
import UserBookings from '../../components/UserBookings/UserBookings';
import UserPayments from '../../components/UserPayments/UserPayments';

const UserProfile = () => {
  const [navTab, setNavTab] = useState('profile');

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
};

export default UserProfile;
