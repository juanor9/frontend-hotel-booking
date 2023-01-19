import PropTypes from 'prop-types';
import './styles.css';

const HotelsMenu = ({ setNavTab }) => {
  const handleClickRooms = () => {
    setNavTab('rooms');
  };

  const handleClickAbout = () => {
    setNavTab('about');
  };

  const handleClickLocation = () => {
    setNavTab('location');
  };

  return (
    <nav className="hotelsMenu__bar">
      <button type="button" className="hotelsMenu__options" onClick={handleClickRooms}>Rooms</button>
      <button type="button" className="hotelsMenu__options" onClick={handleClickAbout}>About</button>
      <button type="button" className="hotelsMenu__options" onClick={handleClickLocation}>Location</button>
    </nav>
  );
};

HotelsMenu.propTypes = {
  setNavTab: PropTypes.func.isRequired,
};

export default HotelsMenu;
