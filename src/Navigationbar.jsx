import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function Navigationbar()
{
    return(
        <>
            <h1>Home Page</h1>
            <Container>
                <Row>
                    <Col>
                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>

  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
        <ul className="d-flex">
          <li className="me-5"><Link to="/Navbar">HOME</Link></li>
          <li><Link to="/About">ABOUT</Link></li>
        </ul>
    </div>
  </div>
</nav>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Navigationbar;
