import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Pro.css'

const Pro = () => {
  return (
    <section className='Pro-sec'>
    <div className="border border-3 border-primary"></div>
    <br></br>
    <div className='pro-head'>
        <h1>
        Pros & Cons 
        </h1>
    </div>
    <Container className='T2'>
        <Row>
            <Col>
            <h2>Pros</h2>
                <br></br>
                <ul>
                    <li>
                        <h3>Simple game</h3>
                    </li>
                    <br></br>
                    <li>
                        <h3>Free with no in-app purchases</h3>
                    </li>
                    <br></br>
                    <li>
                        <h3>Nostalgic</h3>
                    </li>
                </ul>
                <br></br>
                <h2>Cons</h2>
                <br></br>
                <ul>
                    <li>
                        <h3>Breathtaking difficult </h3>
                    </li>
                    <br></br>
                    <li>
                        <h3>Shallow</h3>
                    </li>
                    <br></br>
                    <li>
                        <h3>Addictive</h3>
                    </li>
                    <li>
                        <h3>Terrible graphics</h3>
                    </li>
                </ul>
            </Col>
        </Row>
    </Container>
</section>


    )
}

export default Pro