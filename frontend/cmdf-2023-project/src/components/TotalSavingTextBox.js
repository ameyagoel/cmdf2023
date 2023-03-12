import React from "react";
import styled from "styled-components";

const OuterContainer = styled.div`
    text-align: center;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin: auto;
    margin-top: 2rem;
    width: 24em;
    height: 3.5em;
    background-color: #fff;
    padding-top: 1em; 
`
const Heading = styled.h1`
  font-size: 24px;
  text-align: center;
  line-height: 1.1;
  font-weight: 600;
  padding-top: .5rem;
  margin: auto;
  color: #CC719E;
  `


export const TotalSavingTextBox = ({total}) => {
    return(
        <OuterContainer>
        <Heading>Total Saved: {total}$</Heading>        
        </OuterContainer>

    );


}