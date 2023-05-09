import React from 'react'
import img3 from '../../assets/CQS5.gif'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css'

const About = () => {
  return (
   <>
   <section className='about-sec'>
   <div className="border border-3 border-primary"></div>

   <Container className='header11'>
      <Row>
        <Col>
        <h1 className='main-head'>
        ABOUT THE  
        </h1>
        <h2 className='main-h1'>PROJECT</h2>
        <p>
        Flappy Bird is a popular mobile game, whose goal is to let birds pass more columns by clicking the screen to fly for some height. It’s an easy game to play because the only two actions for players are to let the bird fly or do nothing (let the bird drop by itself).
        </p>
        <br></br>
        <p>
        Flappy Bird is an arcade game where you control a likable bird that has to fly through many obstacles all made up of pipes. Flappy Bird is one of the games that can be created using Python, and when coded correctly the game can be an almost perfect version of Flappy Bird
        </p>
        </Col>
        <Col>
        <img src={img3} alt='main_img' className='about-gif'/>
        </Col>
      </Row>
    </Container>
    </section>
   </>
  )
}

export default About