// import React from "react";
// import { Container,Row,Col } from "react-bootstrap";
// import { Link, Outlet } from "react-router-dom";

// function Navigationbar()
// {
//     return(
//         <>
//             <Container className="bg-primary">
//                 <Row className="border">
//                     <Col>
//                     <nav class="navbar navbar-expand-lg bg-info">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//   </div>

//   <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//     <div class="navbar-nav">
//         <ul className="d-flex">
//           <li className="me-5 nav"><Link to="/Navbar">HOME</Link></li>
//           <li className="me-5 nav"><Link to="/About">ABOUT</Link></li>
//           <li className="me-5 nav"><Link to="/services">SERVICES</Link></li>
//           <li className="me-5 nav"><Link to="/contact">CONTACT</Link></li>
//         </ul>
//     </div>
//   </div>
// </nav>
//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     )
// }

// export default Navigationbar;


import { Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigationbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/"><h1 className='titlename text-primary'>Job Entry</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <ul className="d-lg-flex ms-auto d-sm-block ">
            <li className="me-5 nav"><Link to="/Home" className='navlist'>HOME</Link></li>
            <li className="me-5 nav"><Link to="/About" className='navlist'>ABOUT</Link></li>
            <li className="me-5 nav"><Link to="/services" className='navlist'>SERVICES</Link></li>
            <li className="me-5 nav"><Link to="/contact" className='navlist'>CONTACT</Link></li>
         </ul>
         <div className='bg-primary px-5 py-3 border border-dark'><a className='btn'>Post A Job</a></div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     );
}

export default Navigationbar;


