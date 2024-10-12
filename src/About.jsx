import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navigationbar from "./Navigationbar";
import { Container,Row,Col } from "react-bootstrap";
import Image1 from './Image1.jpg';

function About()
{
    return(
        <>
        <Navigationbar/>
                {/* <ul>
                    <li><Link to="/aboutpage1">Aboutpage1</Link></li>
                    <li><Link to="/aboutpage2">Aboutpage2</Link></li>
                </ul>
                <Outlet/> */}
                <Container>
                    <Row>
                        <Col><img src={Image1} class="img-fluid" alt="..." /></Col>
                        <Col><h1>About Us</h1>
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis animi aut consequuntur magnam facilis nam soluta natus, asperiores amet, deserunt non voluptatibus excepturi eius assumenda sed odit possimus vitae repudiandae?</p>
                        </Col>
                    </Row>
                </Container>
        </>
    )
}

export default About;