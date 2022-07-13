import React from 'react';
import styled from "styled-components";

const StyledItemCar = styled.a`
  display: flex;
  justify-content: center;
  align-items:center;
  flex-wrap: wrap;
  cursor: pointer;
  flex-direction: column;
  width: 210px;
  height: 210px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 5px 5px 12px 3px rgba(4, 136, 238, 0.2);
  color: black;
  transition: 0.5s;
  margin-top: 30px;
  margin-right: 37.5px;
  
  &:nth-child(5n+0){
    margin-right: 0;
  }

  &:hover{
    box-shadow: 5px 8px 11px 10px rgba(4, 136, 238, 0.27);
    color: blue;
  }
`

const StyledImageCar = styled.img`
    width: 180px;
    height: auto;
    max-height: 130px;
`

const StyledNameCar = styled.h4`
    text-align: center;
    margin-top: 20px;
    font-size: 20px;
    font-weight: 600;
`

const ItemCar = (props) => {
    return (
        <StyledItemCar href="/RentCar">
            <StyledImageCar src={props.image} alt=""/>
            <StyledNameCar className="name__car">{props.model}</StyledNameCar>
        </StyledItemCar>
    );
};

export default ItemCar;