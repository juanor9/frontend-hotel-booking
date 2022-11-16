import UserInfo from './componets/UserInfo/UserInfo';

const App = () => (
  <div className="App">
    <UserInfo name="Mark Enderess" birthday="25/12/1990" gender="Female" address="549 Sulphur Springs Road" city="Downers Grove, IL" zip={60515} email="mark.enderess@mail.com" phone="+91 123 - 456 - 7890" password="************" />
  </div>
);

export default App;
