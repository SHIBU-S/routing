import { Container,Row,Col } from "react-bootstrap";


function JobCategory()
{
    return(
        <>
            <Container className="mt-5">
                <Row>
                    <Col><h1>Explore By Category</h1></Col>
                </Row>

                <Row className="text-start mt-4 d-flex">
                    <Col sm={12} md={6} lg={3} className=" p-3">
                        <div className="border px-3 py-3 shadow">
                            <h6>Marketing</h6>
                            <p>123 Vacancy</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3} className=" p-3 ">
                        <div className="border px-3 py-3 shadow">
                            <h6>Customer Service</h6>
                            <p>123 Vacancy</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3} className=" p-3">
                        <div className="border px-3 py-3 shadow">
                            <h6>Human Resource</h6>
                            <p>123 Vacancy</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3} className=" p-3 ">
                        <div className="border px-3 py-3 shadow">
                            <h6>Project Management</h6>
                            <p>123 Vacancy</p>
                        </div>
                    </Col>
                </Row>

                <Row className="text-start mt-4 d-flex">
                    <Col sm={12} md={6} lg={3} className=" p-3 ">
                        <div className="border px-3 py-3 shadow">
                            <h6>Business Development</h6>
                            <p>123 Vacancy</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3} className=" p-3 ">
                        <div className="border px-3 py-3 shadow">
                            <h6>Sales & Communicatio</h6>
                            <p>123 Vacancy</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3} className=" p-3">
                        <div className="border px-3 py-3 shadow">
                            <h6>Teaching & Education</h6>
                            <p>123 Vacancy</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3} className=" p-3">
                        <div className="border px-3 py-3 shadow">
                            <h6>Design & Creative</h6>
                            <p>123 Vacancy</p>
                        </div>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default JobCategory;