import BookingHistory from './componets/BookingHistory/BookingHistory';
import HotelMiami from './componets/BookingHistory/images/hotelMiami.jpg';

const App = () => (
  <div className="App">
    <BookingHistory hotelImg={HotelMiami} name="The W South" checkIn="25/11/2022" checkOut="27/11/2022" price={2300} />
  </div>
);

export default App;
