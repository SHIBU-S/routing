import { Container,Row,Col } from "react-bootstrap";
import Navigationbar from "./Navigationbar";
import { TbSlash } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";


function Contact()
{
    return(
        <>
         <Navigationbar/>
                <Container>
                    <Row className=" aboutpage align-items-center p-3">
                        <Col className="text-start">
                            <h1>Contact</h1>
                            <a href="">HOME<TbSlash /></a>
                            <a href="">PAGES<TbSlash /></a>
                            <a href="">CONTACT</a>
                        </Col>
                        <Col></Col>
                    </Row>


                    <Row className="mt-5">
                        <h1>Contact For Any Query</h1>
                        <Row>
                            <Col sm={12} md={4}>
                            <div className="border p-lg-4 p-md-3 contactbox mt-4"><p> 123 Street, New York, USA</p></div>
                            </Col>
                            <Col sm={12} md={4}>
                                <div className="border p-4 contactbox mt-4"><p>info@example.com</p></div>
                            </Col>
                            <Col sm={12} md={4}>
                                <div className="border p-4 contactbox mt-4"><p>+012 345 6789</p></div>
                            </Col>
                        </Row>
                    </Row>
                </Container>
        </>
    )
}

export default Contact;