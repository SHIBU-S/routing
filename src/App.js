
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import Navbars from './Home';
import Navigationbar from './Navigationbar';
import About from './About';
import Login from './Login';
import Aboutpage1 from './Aboutpage1';
import Aboutpage2 from './Aboutpage2';
import JobCategory from './JobCategory';
import Help from './Help';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/Home' element={<Navbars/>} />
          <Route path="/Navigationbar" element={<Navigationbar />} />
          <Route path="/about" element={<About />} >
             <Route path="/aboutpage1" element={<Aboutpage1 />} />
             <Route path="/aboutpage2" element={<Aboutpage2 />} />
          </Route>
          <Route element={<JobCategory/>}></Route>
          <Route element={<Help/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </div>
  );
}

export default App;







