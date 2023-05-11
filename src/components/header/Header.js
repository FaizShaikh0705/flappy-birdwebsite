import React from 'react'
import img2 from '../../assets/header1.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Game from '../../assets/logo1.jpg'
import Pdf from '../../assets/flappy.pdf'
import './Header.css'

const Header = () => {
  return (
    <>
   {/* <div>
   <img src={img2} alt='main_img' className='main-img'/>
   </div> */}
   <Container className='header11'>
      <Row>
        <Col><img src={img2} alt='main_img' className='main-img'/></Col>
        <Col>
        <h1 className='main-head'>
            Flappy Bird Game 
        </h1>
        <h2 className='main-h1'>Using React.js</h2>
        <a href={Pdf} download className='btn main-h2'>Downoad Pdf</a>
        <a href="https://faizshaikh0705.github.io/javascript-flapy-bird/" download className='btn main-h2'>Play Game</a>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Header