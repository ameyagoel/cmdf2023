import React from "react";
import styled from "styled-components";

const BorderContainer = styled.div`
    display: flex;
`
const OuterContainer = styled.div`
    align-items: center;
    padding: 5em;
    width: 25em;
    height: 20em;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    background-color: #e0adc6;
    border-top-left-radius: ${({ roundTopLeft }) => (roundTopLeft ? '10px' : '0px')};
    border-top-right-radius: ${({ roundTopRight }) => (roundTopRight ? '10px' : '0px')};
    border-bottom-left-radius: ${({ roundBottomLeft }) => (roundBottomLeft ? '10px' : '0px')};
    border-bottom-right-radius: ${({ roundBottomRight }) => (roundBottomRight ? '10px' : '0px')};
`
const Container = styled.div`
    justify-content: center;
    margin: auto;
    
`;

const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 32px;
  line-height: 1.0;
  font-weight: 600;
  color: #CC719E;
  `

const Subtitle = styled.h1`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 25px;
  line-height: 24px;
  color: #CC719E;
  `

export const SummaryBox = ({totalLeft, totalRight}) => {

    return(
        <BorderContainer>
             <OuterContainer roundTopLeft={true} roundBottomLeft={true}>
             <Heading>Pink Taxed</Heading>
            <Container>
        <Subtitle darkText={true}>Item 1 ................................... 1.29</Subtitle>
        <Subtitle darkText={true}>Item 1 ................................... 1.29</Subtitle>
        <Subtitle darkText={true}>Item 1 ................................... 1.29</Subtitle>
        <Subtitle darkText={true}>Item 1 ................................... 1.29</Subtitle>
        <Heading>Total: {totalLeft} </Heading>
        </Container>
        </OuterContainer>
        <OuterContainer roundTopRight={true} roundBottomRight={true}>
        <Heading>Alternate Items</Heading>
            <Container>
        <Subtitle darkText={true}>Item 1 ................................... 1.29</Subtitle>
        <Subtitle darkText={true}>Item 1 ................................... 1.29</Subtitle>
        <Subtitle darkText={true}>Item 1 ................................... 1.29</Subtitle>
        <Subtitle darkText={true}>Item 1 ................................... 1.29</Subtitle>
        <Heading>Total: {totalRight} </Heading>
        </Container>
        </OuterContainer>
        </BorderContainer>

    );
}