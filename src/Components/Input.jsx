import React from 'react';
import styled from "styled-components";
import {InputContext} from "../Pages/AdminPanel/AdminPanel";

let StyledInput = styled.input`
  width: ${props => props.width || "170px"};
  background-color: ${props => props.bgColor || "white" };
  height: 40px;
  margin: 10px;
  outline: none;
  border: 1px solid grey;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: 18px;
  color: black;
`

const Input = (props) => {
    return (
        <StyledInput {...props} value={props.IDcar} onChange={(event)=>{
            props.setIDcar(event.target.value);
            }} placeholder="Введите ID машины" type={"number"}>

        </StyledInput>
    );
};

export default Input;