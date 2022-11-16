import HotelCard from './componets/HotelCard/HotelCard';
import HotelImg from './componets/HotelCard/images/hotelMiami.jpg';

const App = () => (
  <div className="App">
    <HotelCard hotelImg={HotelImg} name="The W South" place="Miami" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo distinctio, deserunt similique magnam ipsa commodi ea." reviews={26412} price={1300} finalPrice={1245} feature1="Swimming" feature2="Parking" />
  </div>
);

export default App;
