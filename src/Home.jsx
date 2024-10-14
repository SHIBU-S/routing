
// import React from "react";
// import Navigationbar from "./Navigationbar";
// import { Container,Row,Col } from "react-bootstrap";
// import Img1 from './carousel-1.jpg'

// function Navbars() {
//   return (
//     <>
//       <Navigationbar/>
//       <Container >
//           <Row>
//               <Col  className="position-relative">
//                 <img src={Img1} class="img-fluid"  />
//                 <div className="position-absolute top-50">
//                   <Row className="d-flex justify-content-start">
//                       <Col lg={8}>
//                       <h1 className="title">Find The Perfect Job That You Deserved</h1>
//                       <p>Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
//                       </Col>

//                       <Col>
//                       </Col>
//                   </Row>
//                 </div>
//               </Col> 
//           </Row>
//       </Container>
//     </>
//   );
// }

// export default Navbars;


import React from "react";
import Navigationbar from "./Navigationbar";
import { Container, Row, Col } from "react-bootstrap";
import JobCategory from "./JobCategory";
import Help from "./Help";

function Navbars() {
  return (
    <>
      <Navigationbar />
      <Container>
        <Row className="body align-items-center text-start">
          <Col lg={6} md={11} className="position-relative">
              <Row >
                  <Col lg={12}><h1 className="homepagetitle text-white">Find The Best Startup Job That Fit You</h1></Col>
                  <Col lg={12}><p className="text-white">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p></Col>
              </Row>
          </Col>
          <Col lg={6}>
          
          </Col>
        </Row>
      </Container>
      <JobCategory/>
      <Help/>
    </>
  );
}

export default Navbars;
