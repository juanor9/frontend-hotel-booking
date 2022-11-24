import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SuccessfulPyment from '../../components/SuccessfulPayment/SuccessfulPayment';
import Footer from '../../components/Footer/Footer';
import './styles.css';

const Success = () => (
  <div className="card__hotel__success">
    <header className="card__success__navbar">
      <NavigationBar />
    </header>
    <section className="card__succes__successfp">
      <SuccessfulPyment />
    </section>
    <footer className="card__success__footer">
      <Footer />
    </footer>
  </div>
);

export default Success;
