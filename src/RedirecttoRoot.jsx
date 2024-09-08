import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const RedirectToRoot = () => {
  const history = useHistory();

  useEffect(() => {
    if (window.location.pathname === '/project_circuit_corner/') {
      history.push('/');
    }
  }, [history]);

  return null;
};

export default RedirectToRoot;
