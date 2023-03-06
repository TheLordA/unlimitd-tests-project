import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import USER_ROLES from 'src/constants/userRoles';
import useAuth from 'src/hooks/useAuth';

const UserRoot = () => {
  const navigate = useNavigate();
  const { isInitialized, user } = useAuth();

  useEffect(() => {
    if (isInitialized) {
      if (user && user.role === USER_ROLES.ADMIN) {
        navigate('/admin');
      } else if (user && user.role === USER_ROLES.USER) {
        navigate('/user');
      }
    }
  }, [isInitialized, user, navigate]);

  return null;
};

export default UserRoot;