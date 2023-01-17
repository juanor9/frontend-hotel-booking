import './styles.css';

const AdminBookings = () => {
  const { email } = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="user-info">
      <section className="user-info__title">
        <h2>Bookings</h2>
        <p>{email}</p>
      </section>
    </div>
  );
};

export default AdminBookings;
