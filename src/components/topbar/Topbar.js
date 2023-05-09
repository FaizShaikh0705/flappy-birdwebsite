import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Img1 from '../../assets/logo1.jpg'
import Navbar from 'react-bootstrap/Navbar';
import './Topbar.css'

const Topbar = () => {
  return (
    <>
    <Navbar className='N1' variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Img1}
              width="35"
              height="35"
              className="d-inline-block align-top Nimg"
            />{' '}
            Flappy-Bird
          </Navbar.Brand>
        </Container>
      </Navbar>
  </>
  )
}

export default Topbar