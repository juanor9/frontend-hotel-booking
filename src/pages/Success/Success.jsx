import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SuccessfulPyment from '../../components/SuccessfulPayment/SuccessfulPayment';
import Footer from '../../components/Footer/Footer';
import './styles.css';

const Success = () => (
  <div className="hotel__success">
    <header className="success__navbar">
      <NavigationBar />
    </header>
    <section className="success__successfp">
      <SuccessfulPyment />
    </section>
    <footer className="success__footer">
      <Footer />
    </footer>
  </div>
);

export default Success;
