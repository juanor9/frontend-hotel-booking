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
        console.log(data);
        localStorage.setItem('token', data.token);
        navigate('/');
      } catch (error) {
        console.log(error.message);
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
