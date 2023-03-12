import React from "react";
import styled from "styled-components";

const OuterContainer = styled.div`
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    width: 30em;
    height: 4em;
    background-color: #e0adc6;
    position: relative;
    padding-top: 1em; 
`
const Heading = styled.h1`
  font-size: 24px;
  text-align: center;
  line-height: 1.1;
  font-weight: 600;
  color: #CC719E;
  `


export const TotalSavingTextBox = ({total}) => {
    return(
        <OuterContainer>
        <Heading>Total Saved: {total} </Heading>        
        </OuterContainer>

    );


}