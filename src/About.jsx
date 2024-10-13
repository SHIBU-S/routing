import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navigationbar from "./Navigationbar";
import { Container,Row,Col } from "react-bootstrap";
import Image1 from './Image1.jpg';
import { TbSlash } from "react-icons/tb";
import Help from "./Help";

function About()
{
    return(
        <>
        <Navigationbar/>
                <Container>
                    <Row className=" aboutpage align-items-center p-3">
                        <Col className="text-start">
                            <h1>About Us</h1>
                            <a href="">HOME<TbSlash /></a>
                            <a href="">PAGES<TbSlash /></a>
                            <a href="">CONTACT</a>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
        <Help/>
        </>
    )
}

export default About;