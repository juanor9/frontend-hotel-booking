import logo from './logo.svg';
import './App.css';
import HotelRooms from './componets/hotel-rooms/index';

const App = () => (
  <div className="App">
    <HotelRooms />
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default App;
