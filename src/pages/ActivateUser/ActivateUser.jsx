import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { validateUserMailToken } from '../../services/auth';
import './style.css';

const ActivateUser = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const validateUserMail = async () => {
      try {
        const data = await validateUserMailToken(token);
        localStorage.setItem('token', data.token);
        navigate('/');
      } catch (error) {
        // eslint-disable-next-line
        throw new Error(error);
      }
    };
    validateUserMail();
  }, [token]);
  return (
    <div className="activate-user">
      <h1>Activate User</h1>
      <p>{token}</p>
    </div>
  );
};

export default ActivateUser;
