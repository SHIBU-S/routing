// import { useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { FakeAuth } from './FakeAuth';

// const PrivateRoute = ({ children }) => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     if (!FakeAuth.isAuthenticated) {
//       navigate("/Login", {
//         state: { from: location },
//         replace: true,
//       });
//     }
//   }, [navigate, location]);

//   return FakeAuth.isAuthenticated ? children : null;
// };

// export default PrivateRoute;



import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FakeAuth } from './FakeAuth';

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!FakeAuth.isAuthenticated) {
      navigate("/Login", {
        state: { from: location },
        replace: true,
      });
    }
  }, [navigate, location]);

  return FakeAuth.isAuthenticated ? children : null;
};

export default PrivateRoute;
