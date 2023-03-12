import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import "./summary.css"


import bg from './../assets/bg2.png'
import peach2 from './../assets/dog2.png'


import ScrollBar from './scrollBar'
import { Product } from './Product'
import { AltProduct } from './altProduct'
import { InputBar } from './InputBar'
import { AddButton } from './AddButton'
import { SummaryBox } from './SummaryBox'
import { TotalSavingTextBox } from './TotalSavingTextBox'

const Summary = () => {
  return (
    <div id='2' className='boxSummary' style={{ minHeight: '100vh', marginTop: '0rem' }}>

      <Container className='summary' style={{ margin: 'auto', alignContent: 'center' }}>
        <h1 className='summaryText'> Your Summary</h1>
        <Col style={{alignItems:'center'}}>
          <SummaryBox ></SummaryBox>
        </Col>
        <img src={peach2} className='peach2' />



      </Container>




    </div>
  )
}

export default Summary
