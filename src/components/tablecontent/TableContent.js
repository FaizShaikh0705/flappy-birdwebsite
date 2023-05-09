import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './TableContent.css'

const TableContent = () => {
  return (
    <>
    <section>
    <div className='T1'>
        <h1>
        TABLE OF CONTENTS
        </h1>
    </div>
    <div className="border border-3 border-primary"></div>
    
    <Container className='T2'>
      <Row>
        <Col xs lg="3">
         <h2>About the Project</h2>
         <h5>Introduction to FLAPPY BIRD</h5>
        </Col>
        <Col md="auto"><h1  className='T3'>01</h1></Col>

        <Col xs lg="3">
        </Col>
        
        <Col md="auto"><h1  className='T3'></h1></Col>
        <Col md="auto"><h1  className='T3'>04</h1></Col>
        <Col xs lg="4">
         <h2>Features of the game</h2>
         <h5>How is it played</h5>
        </Col>
      </Row>
      </Container>
      <Container className='T2'>
      <Row>
        <Col xs lg="3">
         <h2>Problem Statement</h2>
         <h5>Issue addressed to the game</h5>
        </Col>
        <Col md="auto"><h1  className='T3'>02</h1></Col>

        <Col xs lg="3">
        </Col>
        
        <Col md="auto"><h1  className='T3'></h1></Col>
        <Col md="auto"><h1  className='T4'>05</h1></Col>
        <Col xs lg="3">
         <h2>Features of the game</h2>
         <h5>How is it played</h5>
        </Col>
      </Row>
      </Container>


      <Container className='T2'>
      <Row>
        <Col xs lg="3">
         <h2>Scope & objectives</h2>
         <h5>Project goals</h5>
        </Col>
        <Col md="auto"><h1  className='T3'>03</h1></Col>

        <Col xs lg="3">
        </Col>
        
        <Col md="auto"><h1  className='T3'></h1></Col>
        <Col md="auto"><h1  className='T4'>06</h1></Col>
        <Col xs lg="3">
         <h2>Our Team</h2>
         <h5>Group memebers</h5>
        </Col>
      </Row>
      </Container>
      
      </section>
    </>
  )
}

export default TableContent