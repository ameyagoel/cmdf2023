import React, {useState} from "react";
import styled from "styled-components";

const Input = styled.input`
  font-size: 1.2rem;
  padding: .8rem;
  
  margin-top: 6rem;
  border-color: #CC719E;
  border-radius: 3rem;
  width: 28rem;
`

const StyledButton = styled.button`
  border: none;
  width: 6rem;
  background-color: #CC719E;
  font-size: 1.5rem;
  font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
  padding: .8rem;
  color: white;
  border-radius: 3rem;  
  margin-left: 1rem;
  &:hover {
    background-color: #F7C5D6;
    color: #fff;
  }
`;

const Wrapper = styled.section`
    padding: 0em;
    
    background-color: transparent
`

export const InputBar = () => {
    // get amzn url from here
    const [url, setUrl] = useState("");

    async function handleClick() {
            // this is where we would send the amzn url to the backend
    //   await fetch(`http://localhost:3005/api/keyword`)
    //   .then((res) => res.json())
    //   .then((data) => console.log(data)) // Sets variable data to fetched JSON data
    //   .catch((err) => console.log(err));
      
      await fetch(`http://localhost:3005/api/search`)
      .then((res) => res.json())
      .then((data) => console.log(data)) // Sets variable data to fetched JSON data
      .catch((err) => console.log(err));  
  
    }
    
    return(
        <div>
            <Wrapper>
            <Input
        placeholder='Enter a link'
        onChange={(e) => {setUrl(e.target.value)}}
            />
        <StyledButton onClick={handleClick}>
            GO
        </StyledButton>
            </Wrapper>
        </div>
    );

}

