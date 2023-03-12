import React from 'react'
import "./scrollBar.css"
import scroll1 from './../assets/scroll1.png'
import scroll2 from './../assets/scroll2.png'
import scroll3 from './../assets/scroll3.png'
import { Container, Row, Col } from 'react-grid-system'

const ScrollBar = () => {
  return (
    <Container style={{ marginTop:'auto', backgroundColor:'blue'}}>
      <Col  >
      <Row > 
        <a className='scroll1' href="#1"> </a>
      </Row>
      <Row>
      <a className='scroll2' href="#2"> </a>
      </Row>
      <Row>
      <a className='scroll3' href="#3"> </a>
      </Row>
    
      </Col>
    </Container>
  )
}

export default ScrollBar