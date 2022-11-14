import './styles.css';
import PerfilImage from './images/perfilImage.jpg';
import EditIcon from './images/iconEdit.png';

const PerfilMenu = () => (
  <div className="card">
    <section className="card__figures">
      <img className="card__imgPerfil" alt="perfilImage" src={PerfilImage} />
      <img className="card__iconEdit" alt="editIcon" src={EditIcon} />
    </section>
    <h2 className="card__name">Mark Enderess</h2>
    <p className="card__phone">+91 123 - 456 - 7890</p>
    <p className="card__email">mark.enderess@mail.com</p>
    <section className="card__bar">
      <p className="card__barOptions">Profile</p>
      <p className="card__barOptions">Bookings</p>
      <p className="card__barOptions">Cards & Payments</p>
    </section>
  </div>
);

export default PerfilMenu;
