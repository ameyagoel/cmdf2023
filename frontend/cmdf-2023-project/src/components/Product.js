import React from "react";
import styled from "styled-components";

// need props for:
// Item Name 
// Price 
// Pink Tax 

const Container = styled.div`

`;

const Heading = styled.h1`
  min-width: 15rem;
  margin-right: 1rem;

  font-size: 2rem;
  line-height: 1.1rem;
  font-weight: 700;
  font-style: italic;
  color: ${({ lightText }) => (lightText ? '#CC719E' : '#F6C0D3')};
  
  @media screen and (max-width: 480px){
    font-size 32px;
  }
  `

const Subtitle = styled.h1`
  max-width: 440px;
  font-size: 1.6rem;
  line-height: 1rem;
  color: #0F3591;
  `
const Text = styled.p`
  min-width: 4rem;
  font-size: 1rem;
  line-height: 1rem;
  color: #0F3591;
  `
const PinkBox = styled.div`
  margin-left: 1rem;
  background-color: pink;
  min-width: 11rem;
  min-height: 11rem;
  border-radius: 10px;
`;

const OuterContainer = styled.div`
    display: flex;
    background-color: #fff;
    align-items: center;
    border: 2px solid #CC719E;
    border-radius: 10px;
    padding: 5rem;
    padding-right: 1rem;
    padding-left: 2rem;
    grid-template-columns: 1fr 1fr;
    max-width: 30rem;
    max-height: 3.5rem;
    box-shadow: 5px 5px 8px rgb(0 0 0 / 0.2);


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
            <Subtitle>Product Details </Subtitle>
            <Text>Item Name: {itemName}</Text>
            <Text>Price: {price} </Text>
            <Text>Pink Tax: {moneySaved}</Text>
            </Container>
            <PinkBox />
            </OuterContainer>
        </div>
    )
}