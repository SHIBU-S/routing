import { Container,Row,Col } from "react-bootstrap";
import about1 from './about-1.jpg';
import about2 from './about-2.jpg';
import about3 from './about-3.jpg';
import about4 from './about-4.jpg';
import { FcCheckmark } from "react-icons/fc";

function Help()
{
    return(
        <>
            <Container>
                <Row className="mt-5 text-start align-items-center d-flex">
                    <Col  className="helpjob ">
                        <Row className="position-relative">
                            <Col lg={6} className=""><img src={about1} className="img-fluid w-100" alt="..."/></Col>
                            <Col lg={6} className=" text-start about2"><img src={about2} className="img-fluid w-75" alt="..."/></Col>
                            <Col lg={6} className="text-end"><img src={about3} className="img-fluid w-75" alt="..."/></Col>
                            <Col lg={6}><img src={about4} className="img-fluid w-100" alt="..."/></Col>
                        </Row>
                    </Col>

                    <Col >
                        <h1 className="Helptitle mt-5 pt-5">We Help To Get The Best Job And Find A Talent</h1>
                        <p className="mt-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <p><FcCheckmark /> Tempor erat elitr rebum at clita</p>
                        <p><FcCheckmark /> Aliqu diam amet diam et eos</p>
                        <p><FcCheckmark /> Clita duo justo magna dolore erat amet</p>
                        <button className="button px-5 py-3 text-white mt-4">Read More</button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Help;

