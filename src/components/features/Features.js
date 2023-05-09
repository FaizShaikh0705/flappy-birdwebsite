import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Features.css'

const Features = () => {
    return (
        <>
            <section className='features-sec'>
                <div className="border border-3 border-primary"></div>
                <br></br>
                <div className='F1'>
                    <h1>
                        FEATURES
                    </h1>
                </div>

                <Container className='T2'>
                    <Row>
                        <Col>
                            <br></br>
                            <ul>
                                <li>
                                    <h3>Flappy Bird is an arcade-style game in which the player controls the bird Faby, which moves persistently to the right</h3>
                                </li>
                                <br></br>
                                <li>
                                    <h3>Each time the bird passes through the pipes, the score gets incremented by one. The game ends when the bird collides with the pipes or falls down due to gravity</h3>
                                </li>
                                <br></br>
                                <li>
                                    <h3>The player is tasked with navigating Faby through pairs of pipes with equally sized gaps at random heights.</h3>
                                </li>
                                <br></br>
                                <li>
                                    <h3>During the game over screen, the player is awarded a bronze medal if they reached ten or more points, a silver medal from twenty points, a gold medal from thirty points, and a platinum medal from forty points</h3>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    )
}

export default Features