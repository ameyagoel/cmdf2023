import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import "./landing.css"
import { Item } from './items'


import bg from './../assets/bg1.png'
import peach1 from './../assets/dog1.png'
import peach2 from './../assets/dog2.png'



import ScrollBar from './scrollBar'
import { Product } from './Product'
import { AltProduct } from './altProduct'
import { InputBar } from './InputBar'
import { AddButton } from './AddButton'

const Landing = () => {

    return (
        <div id='1' className='boxLanding' style={{ minHeight: '100vh', marginTop: '0rem' }}>

            <Container className='product' style={{ margin: 'auto' }}>

                <Row style={{ alignItems: 'center', marginBottom: '1rem' }}>
                    <Col sm={4.5}>
                        <h1 className='justpeachy'> justpeachy</h1>
                    </Col>
                    <Col>
                        <InputBar></InputBar>
                    </Col>
                </Row>
                <Row>
                <Col >
                    <Row style={{ alignItems: 'center' }}>
                        <Col  sm={8} style={{ marginTop: 'auto', marginRight: '3rem' }}>
                            <Product></Product>
                        </Col>

                    </Row>
                    <Row style={{ alignItems: 'center' }}>
                        <Col sm={8}style={{ marginRight: 'auto' }}>
                            <AltProduct></AltProduct>
                        </Col>
                        <Col sm={4} className='img'>
                        <img src={peach1} className='peach1' />
                        <img src={peach2} className='peach2hover' />
                    {/* <Row>
                        <AddButton className='button1' bgColor={false} textColor={true} borderColor={true} text={'Add Item'}></AddButton>
                    </Row> */}
                </Col>
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
