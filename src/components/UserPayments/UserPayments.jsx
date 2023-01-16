import './styles.css';

const UserPayments = () => {
  const { email } = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="user-info">
      <h2>Cards & Payments</h2>
      <section className="user-info__title">
        <h3>Cards</h3>
        <p>{email}</p>
      </section>
      <section className="user-info__title">
        <h3>Payments</h3>
        <p>{email}</p>
      </section>
    </div>
  );
};

export default UserPayments;
