import React from "react";
import styled from "styled-components";

const BorderContainer = styled.div`
    display: flex;
`
const OuterContainer = styled.div`
    text-align: center;
    align-items: center;
    padding: 5em;
    width: 20em;
    height: 20em;
    background-color: #e0adc6;
    border-top-left-radius: ${({ roundTopLeft }) => (roundTopLeft ? '10px' : '0px')};
    border-top-right-radius: ${({ roundTopRight }) => (roundTopRight ? '10px' : '0px')};
    border-bottom-left-radius: ${({ roundBottomLeft }) => (roundBottomLeft ? '10px' : '0px')};
    border-bottom-right-radius: ${({ roundBottomRight }) => (roundBottomRight ? '10px' : '0px')};
`
const Container = styled.div`
    justify-content: center;
    margin: auto;
    text-align: left;
    
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
  color: #fff;
  `

export const SummaryBox = () => {

    return(
        <BorderContainer>
             <OuterContainer roundTopLeft={true} roundBottomLeft={true}>
            <Container>
                <Heading>Pink Tax</Heading>
        <Subtitle darkText={true}>Item 1                      1.29</Subtitle>
        <Subtitle darkText={true}>Item 1                      1.29</Subtitle>
        <Subtitle darkText={true}>Item 1                      1.29</Subtitle>
        <Subtitle darkText={true}>Item 1                      1.29</Subtitle>
        
        </Container>
        </OuterContainer>
        <OuterContainer roundTopRight={true} roundBottomRight={true}>
            <Container>
            <Heading>Alternate Items</Heading>
        <Subtitle darkText={true}>Item 1                      1.29</Subtitle>
        <Subtitle darkText={true}>Item 1                      1.29</Subtitle>
        <Subtitle darkText={true}>Item 1                      1.29</Subtitle>
        <Subtitle darkText={true}>Item 1                      1.29</Subtitle>
        
        </Container>
        </OuterContainer>
        </BorderContainer>

    );
}