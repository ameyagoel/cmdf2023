import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-color: ${({ borderColor }) => (borderColor ? '#CC719E' : '#fff')};
  background-color: ${({ bgColor }) => (bgColor ? '#CC719E' : '#fff')};
  font-size: 25px;
  color: ${({ textColor }) => (textColor ? '#CC719E' : '#fff')};
  border-radius: 20px;
  width: 10em;
  height: 3em;
  align-items: center;
`;

export const AddButton = ({text, textColor, borderColor, bgColor}) => {
    return (
        <StyledButton bgColor={bgColor} textColor={textColor} borderColor={borderColor}>
            {text}
        </StyledButton>

    );
}