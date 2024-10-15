
// import './App.css';
// import {  Routes, Route } from 'react-router-dom';
// import Navbars from './Home';
// import Navigationbar from './Navigationbar';
// import About from './About';
// import Login from './Login';
// import JobCategory from './JobCategory';
// import Help from './Help';
// import Contact from './Contact';

// import PrivateRoute from './PrivateRoute';
// import Services from './Services';


// function App() {
//   return (
//     <div className="App">
//         <Routes>
//           {/* <Route path="/" element={<Navbars />} /> */}
//           {/* <Route path='/Home' element={<Navbars/>} /> */}
//           {/* <Route path="/about" element={<About />} ></Route> */}
//           {/* <Route path="/contact" element={<Contact/>}></Route> */}

//           <Route path="/" element={<Login />} />
//           <Route path="/Navigationbar" element={<Navigationbar />} />
//           <Route element={<JobCategory/>}></Route>
//           <Route element={<Help/>}></Route>
//           <Route path="/Login" element={<Login />}></Route>

          
//           <Route path="/Home" element={ <PrivateRoute>  <Navbars /> </PrivateRoute> } />
//           <Route path="/About" element={ <PrivateRoute>  <About /> </PrivateRoute> } />
//           <Route path="/services" element={ <PrivateRoute>  <Services /> </PrivateRoute> } />
//           <Route path="/contact" element={ <PrivateRoute>  <Contact /> </PrivateRoute> } />
//         </Routes>
//       </div>
//   );
// }

// export default App;


import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbars from './Home';
import Navigationbar from './Navigationbar';
import About from './About';
import Login from './Login';
import JobCategory from './JobCategory';
import Help from './Help';
import Contact from './Contact';
import PrivateRoute from './PrivateRoute';
import Services from './Services';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbars />} />
        <Route path="/Home" element={<Navbars />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        
          <Route path="/Login" element={<Login />} />
        
          <Route path="/services" element={<PrivateRoute> <Services /> </PrivateRoute>} />
        
        <Route path="/Navigationbar" element={<Navigationbar />} />
        <Route path="/JobCategory" element={<JobCategory />} />
        <Route path="/Help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
