import React from "react";
import styled from "styled-components";
import { useState } from 'react';
import next from './../assets/next.png';
import prev from './../assets/prev.png';


// need props for:
// Item Name 
// Price 
// Pink Tax 

const Container = styled.div`

`;

const Heading = styled.h1`
  min-width: 15rem;
  margin-right: 3rem;

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
  margin-right:4rem;
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
  margin-left: 9rem;

  background-size:contain;
  background-image: url(https://m.media-amazon.com/images/I/81L-Nl7NxJL._AC_SL1500_.jpg);
  min-width: 18rem;
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
    min-width: 40rem;
    max-height: 3.5rem;
    margin-top: 2rem;
    box-shadow: 5px 5px 8px rgb(0 0 0 / 0.2);


`

// const Text = styled.div`
//     color

// `<PinkBox />






export const AltProduct = ({itemName, price, moneySaved}) => {
  

  const [index, setIndex] = useState(0); 
  const length = 3;

  const prevSlide = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const nextSlide = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

itemName = 'OGX Extra Strength Refreshing Scalp + Tea Tree Mint Shampoo';
price = 9.16;
moneySaved = 16.99 - 9.16;


  return (
    <div>
      <OuterContainer>
        <Container>
          <Subtitle>Alternate Item </Subtitle>
            <Text>Item Name: {itemName}</Text>
            <Text>Price: {price} </Text>
            <Text>Money Saved: {moneySaved}</Text>
        </Container>
        <PinkBox />
      </OuterContainer>
    </div>
  )
}



