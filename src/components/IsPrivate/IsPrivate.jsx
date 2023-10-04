import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';

function IsPrivate({ children }) {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <></>;
  }

  if (isLoggedIn) {
    return children;
  } else {
    return <></>;
  }
}

export default IsPrivate;
