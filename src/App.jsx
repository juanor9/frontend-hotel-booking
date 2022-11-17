import RegisteredCards from './componets/RegisteredCards/RegisteredCards';
import MasterCard from './componets/RegisteredCards/images/mastercard.png';

const App = () => (
  <div className="App">
    <RegisteredCards cardLogo={MasterCard} cardNumber="**** **** **** 1128" cardCompany="MasterCard" />
  </div>
);

export default App;
