import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Object.css'

const Obj = () => {
    return (
        <>
         <div className="border border-3 border-primary"></div>
            <Container className='obj-section'>
                <Row>
                    <Col>
                        <h1 className='main-obj'>
                        SCOPE & OBJECTIVES
                        </h1>
                        <br></br>
                        {/* <h2 className='main-h1'>Using React.js</h2> */}
                        <ul>
                            <li>
                                <h3>
                                    The aim of the  game  is  to  successfully  pass  the  “bird”  through  these “obstacles” simply by pushing the button
                                </h3>
                            </li>
                            <br></br>
                            <li>
                                <h3>
                                    Access to the latest approaches, methods, and theories.Discovering research topics based on the existing research
                                </h3>
                            </li>
                            <br></br>
                            <li>
                                <h3>
                                    Gaining an understanding of the fundamentals and state-of-the art of the area.z
                                </h3>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Obj