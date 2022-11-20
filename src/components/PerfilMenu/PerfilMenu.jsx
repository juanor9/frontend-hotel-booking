import PropTypes from 'prop-types';
import './styles.css';
import IconEdit from '../../assets/iconEdit.png';

const PerfilMenu = ({
  name, phone, email, imagePerfil,
}) => (
  <div className="card">
    <section className="card__figures">
      <img className="card__imgPerfil" alt="perfilImage" src={imagePerfil} />
      <img className="card__iconEdit" alt="editIcon" src={IconEdit} />
    </section>
    <h2 className="card__name">{name}</h2>
    <p className="card__phone">{phone}</p>
    <p className="card__email">{email}</p>
    <section className="card__bar">
      <p className="card__barOptions">Profile</p>
      <p className="card__barOptions">Bookings</p>
      <p className="card__barOptions">Cards & Payments</p>
    </section>
  </div>
);

PerfilMenu.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  imagePerfil: PropTypes.isRequired,
};

export default PerfilMenu;
