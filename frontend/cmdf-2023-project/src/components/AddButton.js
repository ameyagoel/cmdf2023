import React from "react";
import { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-color: ${({ borderColor }) => (borderColor ? '#CC719E' : '#fff')};
  background-color: ${({ bgColor }) => (bgColor ? '#F6C0D3' : '#fff')};
  font-size: 1.6rem;
  color: ${({ textColor }) => (textColor ? '#CC719E' : '#fff')};
  border-radius: 1rem;
  margin: .5rem;
  width: 10em;
  height: 3em;
  align-items: center;
  &:hover {
    background-color: #CC719E;
    color: #fff;
  }
`;



export const AddButton = ({text, textColor, borderColor, bgColor}) => {
    const [itemList, setInputList] = useState([]);

  

    return (
        <StyledButton  bgColor={bgColor} textColor={textColor} borderColor={borderColor}>
            {text}
        </StyledButton>


    );
}