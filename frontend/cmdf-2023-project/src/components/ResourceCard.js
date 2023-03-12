import React from "react";
import styled from "styled-components";

const OuterContainer = styled.div`
    text-align: center;
    align-items:left;
    border-radius: 10px;
    border: 3px solid #F6C0D3;
    padding: 5rem;
    padding-top: 1rem;
    padding-left: 2rem;
    padding-right: 7rem;
    width: 10em;
    height: 20rem;
    margin: 1rem;
    background: linear-gradient(#fff, #F6C0D3);
`
const Container = styled.div`
    padding-top: 2rem;
    align-items:left;
    text-align: left;
    width: 15rem;
    
`;

const Heading = styled.h1`
  margin-bottom: 1.2rem;
  font-size: 2.7rem;
  line-height: 1.1;
  font-weight: 600;
  max-width: 80rem;
  color: ${({ lightText }) => (lightText ? '#CC719E' : '#F6C0D3')};
  
  @media screen and (max-width: 480px){
    font-size 32px;
  }
  `

const Subtitle = styled.h1`
  max-width: 50rem;
  font-weight: 400;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  line-height:1.35rem;
  color: #fff;
  `

const StyledButton = styled.button`
  border: none;
  background-color: ${({ bgColor }) => (bgColor ? '#CC719E' : '#fff')};
  font-size: 25px;
  color: #F6C0D3;
  border-radius: 20px;
  width: 4em;
  height: 2em;
  &:hover {
    background-color: #CC719E ;
    color: #fff;
  }

`;


export const ResourceCard = ({title, description, link}) => {
    return(
        <OuterContainer>
            <Container>
        <Heading lightText={true}>{title}</Heading>
        <Subtitle darkText={"darkText"}>{description}</Subtitle>
        
        </Container>
        <StyledButton onClick={()=> window.open(link, "_blank")}>
        GO
    </StyledButton>
        </OuterContainer>
    );

}