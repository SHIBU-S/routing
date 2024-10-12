
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
import Img1 from './carousel-1.jpg';

function Navbars() {
  return (
    <>
      <Navigationbar />
      <Container>
        <Row>
          <Col className="position-relative">
            <img src={Img1} className="img-fluid" alt="Scenic view" />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center border">
              <Row className="d-flex justify-content-start text-start p-5">
                <Col lg={9}>
                  <h1 className="title">Find The Perfect Job That You Deserve</h1>
                  <p>Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                  <a className="btn btn-primary px-5 py-3 me-3">Search A Job</a>
                  <a className="btn btn-primary px-5 py-3">Find A Talent</a>
                </Col>
                <Col lg={3}>
                  
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Navbars;
