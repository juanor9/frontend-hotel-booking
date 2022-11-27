import './styles.css';
import HotelsForm from '../../components/HotelsForm/HotelsForm';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';
import SliderNav from '../../components/SliderNav/SliderNav';

const HotelsRegistration = () => (
  <div className="hotelsReg">
    <header className="hotelsReg__header">
      <NavigationBar />
      <SliderNav />
    </header>
    <section className="hotelsReg__title">
      <h2>Hotel Registration Form</h2>
    </section>
    <section className="hotelsReg__form">
      <HotelsForm />
    </section>
    <Footer />
  </div>
);

export default HotelsRegistration;
