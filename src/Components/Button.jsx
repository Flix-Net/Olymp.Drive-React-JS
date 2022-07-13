import React from 'react';
import styled from  "styled-components";

let StyledButton = styled.button`
  box-shadow: 0 6px 4px rgba(0, 0, 0, 0.3);
  transition: .3s;
  width: ${props => props.width || "170px"};
  height: ${props => props.height || "60px"};
  border: none;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
  text-transform: uppercase;
  font-family: "Exo 2", sans-serif;
  font-weight: 600;
  font-size: 14px;
  margin: ${props => props.margin || "10px"};
  background-color: ${props => props.bgColor || "transparent"};
  color: ${props => props.color || "black"};
  &:hover{
    box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.3);
    transition: .3s;
    background-color: black;
    color: white;
  }
`

const Button = (props) => {
    return (
        <StyledButton {...props}/>
    );
};

export default Button;