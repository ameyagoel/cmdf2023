import React, {useState} from "react";
import styled from "styled-components";

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  width: 40em;
`

const StyledButton = styled.button`
  border-color: #CC719E;
  background-color: #CC719E;
  font-size: 32px;
  color: white;
  border-radius: 30px;
`;

const Wrapper = styled.section`
    padding: 4em;
    background: black;
`

export const InputBar = () => {
    // get amzn url from here
    const [url, setUrl] = useState("");

    const handleClick = () => {
        return(
            // this is where we would send the amzn url to the backend
            console.log(url)
        )
    }
    
    return(
        <div>
            <Wrapper>
            <Input
        placeholder='Enter a link'
        onChange={(e) => {setUrl(e.target.value)}}
            />
        <StyledButton onClick={handleClick}>
            Go
        </StyledButton>
            </Wrapper>
        </div>
    );

}

