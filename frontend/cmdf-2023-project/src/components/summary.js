import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import "./summary.css"


import bg from './../assets/bg2.png'
import peach1 from './../assets/dog1.png'


import ScrollBar from './scrollBar'
import { Product } from './Product'
import { AltProduct } from './altProduct'
import { InputBar } from './InputBar'
import { AddButton } from './AddButton'
import { SummaryBox } from './SummaryBox'
import { TotalSavingTextBox } from './TotalSavingTextBox'

const Summary = () => {
  return (
    <div id='1' className='boxSummary' style={{ minHeight: '100vh', marginTop: '0rem' }}>

      <Container className='summary' style={{ margin: 'auto', alignContent: 'center' }}>
        <h1 className='summaryText'> Your Summary</h1>
        <Col style={{alignItems:'center'}}>
          <SummaryBox ></SummaryBox>
          <TotalSavingTextBox ></TotalSavingTextBox>
        </Col>




      </Container>




    </div>
  )
}

export default Summary
