import SliderNav from '../../components/SliderNav/SliderNav';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SuccessfulPyment from '../../components/SuccessfulPayment/SuccessfulPayment';
import './styles.css';

const Success = () => (
  <div className="hotel__success">
    <header className="success__navbar">
      <NavigationBar />
      <SliderNav />
    </header>
    <section className="success__successfp">
      <SuccessfulPyment />
    </section>
  </div>
);

export default Success;
