import React from "react";
import styled from "styled-components";

// need props for:
// Item Name 
// Price 
// Pink Tax 

const Container = styled.div`
  align-items: center;
  padding: 3em;

`;

const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#CC719E' : '#F6C0D3')};
  
  @media screen and (max-width: 480px){
    font-size 32px;
  }
  `

const Subtitle = styled.h1`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 25px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#CC719E' : '#fff')};
  `
const Text = styled.p`
  max-width: 200px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: '#CC719E';
  `
const PinkBox = styled.div`
  background-color: pink;
  width: 300px;
  height: 300px;
`;

const OuterContainer = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid #CC719E;
    border-radius: 10px;
    padding: 5em;
    grid-template-columns: 1fr 1fr;
    width: 45em;
    height: 20em;
    margin: auto;

`

// const Text = styled.div`
//     color

// `<PinkBox />

export const Product = ({itemName, price, moneySaved}) => {
    return (
        <div>
            <OuterContainer>
            <Container>
            <Heading lightText="lightText">Pink Tax Found!</Heading>
            <Subtitle darkText={"darkText"}>Product Details </Subtitle>
            <Text>Item Name: {itemName}</Text>
            <Text>Price: {price} </Text>
            <Text>Item Name: {moneySaved}</Text>
            </Container>
            <PinkBox />
            </OuterContainer>
        </div>
    )
}