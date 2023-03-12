import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import "./landing.css"


import bg from './../assets/bg1.png'
import peach1 from './../assets/dog1.png'


import ScrollBar from './scrollBar'
import { Product } from './Product'
import { AltProduct } from './altProduct'
import { InputBar } from './InputBar'
import { AddButton } from './AddButton'

const Landing = () => {
  return (
    <div id='1' className='boxLanding' style={{minHeight:'100vh', marginTop:'0rem'}}>
       
      <Container className='product' style={{margin:'auto'}}>
        
        <Row style={{alignItems:'center'}}>
            <Col sm={4.5}>
                <h1 className='justpeachy'> justpeachy</h1>
            </Col>
            <Col> 
                <InputBar></InputBar>
            </Col>
        </Row>
         <Row style={{alignItems:'center'}}>
            <Col style={{marginTop:'auto'}}>
                <Product></Product>
            </Col>
            <Col>
            <img src={peach1} alt={"peach1"} className='peach1' />
          
            </Col>
        </Row>
        <Row style={{alignItems:'center'}}>
            <Col>
                <AltProduct></AltProduct>
            </Col>
            <Col >
                <Row> 
                <AddButton className='button1' bgColor={false} textColor={true} borderColor={true} text={'Add Original'}></AddButton>
                </Row>
                <Row  > 
                <AddButton className='button2' bgColor={true} textColor={false} borderColor={false} text={'Add Alt'}></AddButton>
                </Row>

            </Col>

        </Row>
        
        
        
      </Container>
      

      <Container > 
        
        <ScrollBar />
      </Container>
      
    </div>
  )
}

export default Landing
