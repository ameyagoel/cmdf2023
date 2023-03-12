import React from "react";
import styled from "styled-components";

const OuterContainer = styled.div`
    text-align: center;
    align-items: center;
    border-radius: 10px;
    padding: 5em;
    width: 20em;
    height: 20em;
    background-color: #e0adc6;
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

const StyledButton = styled.button`
  border-color: ${({ borderColor }) => (borderColor ? '#CC719E' : '#fff')};
  background-color: ${({ bgColor }) => (bgColor ? '#CC719E' : '#fff')};
  font-size: 25px;
  color: #CC719E;
  border-radius: 20px;
  width: 3em;
  height: 2em;
  align-items: center;
`;
export const ResourceCard = ({title, description}) => {
    return(
        <OuterContainer>
            <Container>
        <Heading lightText={true}>{title}</Heading>
        <Subtitle darkText={"darkText"}>{description}</Subtitle>
        
        </Container>
        <StyledButton>
        Go
    </StyledButton>
        </OuterContainer>
    );

}