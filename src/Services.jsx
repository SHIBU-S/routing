// import { useEffect } from "react";
// import { useNavigate,useLocation } from "react-router-dom";
// import { Login } from './Login';
// // import Login from "./Login";


// const PrivateRoute = ({ children }) => {
//     const navigate = useNavigate();
//     const location = useLocation();
  
//     useEffect(() => {
//       if (!fakeAuth.isAuthenticated) {
//         navigate('/login', {
//           state: { from: location },
//           replace: true,
//         });
//       }
//     }, [navigate, location]);
  
//     return fakeAuth.isAuthenticated ? children : null;
//   };

// export default PrivateRoute;


function Services()
{
    return(
        <>
            <h2>This is Service Page</h2>
        </>
    )
}

export default Services;