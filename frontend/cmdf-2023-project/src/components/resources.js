import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import "./resources.css"


import bg from './../assets/bg2.png'
import peach2 from './../assets/dog1.png'
import bottom from './../assets/bottom.png'


import ScrollBar from './scrollBar'
import { Product } from './Product'
import { AltProduct } from './altProduct'
import { InputBar } from './InputBar'
import { AddButton } from './AddButton'
import { SummaryBox } from './SummaryBox'
import { TotalSavingTextBox } from './TotalSavingTextBox'
import { ResourceCard } from './ResourceCard'

const Resources = () => {
  return (
    <div id='3' className='boxResources' style={{ minHeight: '100vh', marginTop: '0rem' }}>

      <Container className='resources' style={{ margin: 'auto', alignContent: 'center' }}>
        <h1 className='resourcesText'> General Resources</h1>
        <Row style={{marginBottom: '2rem', marginLeft:'2rem'}}>
        <ResourceCard title={'What is Pink Tax?'} description={'Basic information on what is pink tax and how it affects you'} link={"https://reviewlution.ca/resources/pink-tax-canada/#:~:text=What%20Is%20the%20Pink%20Tax,products%20men%20get%20for%20less."}></ResourceCard>
          <ResourceCard title={'Pink Tax FAQ'} description={'Commonly asked questions about pink tax'} link={"http://pink.tax/pink-tax-faq"}></ResourceCard>
          <ResourceCard title={'Pink Tax and Period Poverty '} description={'Information on how pink tax exacerbates poverty'} link={"https://www.hola.com/us/lifestyle/20221013338155/how-the-pink-tax-and-period-poverty-affect-our-communities/"}></ResourceCard>
        </Row>

      </Container>
      <img src={bottom} className='bottom' />
      <img src={peach2} className='peach3' />



      


    </div>
  )
}

export default Resources
