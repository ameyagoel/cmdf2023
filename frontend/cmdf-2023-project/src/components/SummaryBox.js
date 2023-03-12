import React from "react";
import styled from "styled-components";
import { AddButton } from "./AddButton";
import Landing from "./landing";
import { TotalSavingTextBox } from "./TotalSavingTextBox";
const BorderContainer = styled.div`
    display: flex;
`
const OuterContainer = styled.div`
    align-items: center;
    padding: 5rem;
    padding-top: 3rem;
    padding-bottom: 6rem;
    width: 25rem;
    height: 16rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    border-top-left-radius: ${({ roundTopLeft }) => (roundTopLeft ? '15px' : '0px')};
    border-top-right-radius: ${({ roundTopRight }) => (roundTopRight ? '15px' : '0px')};
    border-bottom-left-radius: ${({ roundBottomLeft }) => (roundBottomLeft ? '15px' : '0px')};
    border-bottom-right-radius: ${({ roundBottomRight }) => (roundBottomRight ? '15px' : '0px')};
`
const Container = styled.div`
    justify-content: center;
    margin: auto;
    
`;

const Heading = styled.h1`
  margin-bottom: 2rem;
  margin-top: 0rem;
  font-size: 2rem;
  line-height: 1.0;
  font-weight: 600;
  color: #CC719E;
  `

const Subtitle = styled.h1`
  max-width: 30rem;
  margin-bottom: 1rem;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.2rem;
  color: #587EBC;
  `
  const itemArrayPink =  [
    {itemName: 'Razor', itemPrice: 3.49},
    {itemName: 'Deodorant', itemPrice: 4.99},
    {itemName: 'Headphones', itemPrice: 49.99},

  ];
  const itemArrayAlt = [
    {itemName: 'Razor', itemPrice: 1.49},
    {itemName: 'Deodorant', itemPrice: 2.99},
    {itemName: 'Headphones', itemPrice: 29.50},


  ];
 

export const SummaryBox = ({totalLeft, totalRight}) => {

    
   
    totalLeft = Number(((itemArrayPink.reduce((a,v) =>  a = a + v.itemPrice , 0 )).toFixed(3)));
    totalRight = Number(((itemArrayAlt.reduce((a,v) =>  a = a + v.itemPrice , 0 )).toFixed(3)));



    return(
        <div>
        <BorderContainer>
             <OuterContainer roundTopLeft={true} roundBottomLeft={true}>
             <Heading>Pink Taxed</Heading>
            <Container>
            {itemArrayPink.map((item => (  
          <Subtitle darkText={true}>  
            {item.itemName} ................................... ${item.itemPrice}  
          </Subtitle>  
        )))}  
     
        {/* <Item itemName={'Razor'} itemPrice={'$1.39'}> </Item> */}
        {/* <Subtitle darkText={true}>Item 1 ................................... 1.29</Subtitle>
        <Subtitle darkText={true}>Item 1 ................................... 1.29</Subtitle>
        <Subtitle darkText={true}>Item 1 ................................... 1.29</Subtitle>
        <Subtitle darkText={true}>Item 1 ................................... 1.29</Subtitle> */}
        
        <Heading>Total: {totalLeft} </Heading>
        </Container>
        </OuterContainer>
        <OuterContainer roundTopRight={true} roundBottomRight={true}>
        <Heading>Alternate Items</Heading>
            <Container>
                {itemArrayAlt.map((item => (  
          <Subtitle darkText={true}>  
            {item.itemName} ................................... ${item.itemPrice}  
          </Subtitle>  
        )))}  <Heading>Total: {totalRight} </Heading>
        </Container>
        </OuterContainer>
        </BorderContainer>
        <TotalSavingTextBox total={Number((totalLeft-totalRight).toFixed(3))}></TotalSavingTextBox>
        </div>

    );
}