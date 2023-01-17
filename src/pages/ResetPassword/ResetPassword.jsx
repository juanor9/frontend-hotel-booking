/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import PasswordReset from '../../components/PasswordReset/PasswordReset';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

const ResetPassword = () => {
  const { token } = useParams();

  useEffect(() => {
  }, [token]);
  return (
    <div className="password-reset">
      <header className="password-reset__header">
        <NavigationBar />
      </header>
      <section className="password-reset__form-container">
        <h2>Reset Password</h2>
        <PasswordReset token={token} />
      </section>
    </div>
  );
};

export default ResetPassword;
