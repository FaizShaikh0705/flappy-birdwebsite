import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Play = () => {
    return (
        <>
            <div className="border border-3 border-primary"></div>
            <br></br>
            <section className='Play-sec'>
            <Container className='Play11'>
                <Row>
                    <Col>
                    <a href="#" download className='btn main-play'>Play Game</a>
                    </Col>
                    <Col><h3>
                    Click the button to play the flappy bird game
                    </h3></Col>
                </Row>
            </Container>
            </section>
        </>

    )
}

export default Play