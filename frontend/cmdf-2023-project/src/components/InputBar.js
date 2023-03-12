import React, {useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Input = styled.input`
  font-size: 1.2rem;
  padding: .8rem;
  background-color: transparent;
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

    const handleClick = () => {

        // <Link
        //     to={{
        //         pathname: "/summary",
        //         state: [{itemName: 'Headphones', itemPrice: 49.99}]
        //     }}
        // ></Link>
        return (
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
            GO
        </StyledButton>
            </Wrapper>
        </div>
    );

}

