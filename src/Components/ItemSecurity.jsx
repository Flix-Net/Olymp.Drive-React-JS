import React from 'react';
import styled from "styled-components";



let StyledBlockSecurityItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 330px;
  height: 200px;
  margin-bottom: 50px;
`

let StyledBlockSecurityContentIMG = styled.img`
  width: 40px;
  height: auto;
  //margin: 7px auto;
`

let StyledBlockSecurityContentTitle = styled.div`
  font-size: 22px;
  margin: 7px 0;
  font-family: 'Exo 2',sans-serif;
  &::selection{
    background-color: #1FFFBC;
  }
`

let StyledBlockSecurityContentDesc = styled.div`
  margin: 7px auto;
  font-size: 16px;
  opacity: 0.7;
  font-family: 'Exo 2',sans-serif;
  &::selection{
    background-color: #1FFFBC;
  }
`


const ItemSecurity = ({image, title, body}) => {
    return(
            <StyledBlockSecurityItem>
                <StyledBlockSecurityContentIMG src={image} alt=""/>
                <StyledBlockSecurityContentTitle>{title}</StyledBlockSecurityContentTitle>
                <StyledBlockSecurityContentDesc>{body}</StyledBlockSecurityContentDesc>
            </StyledBlockSecurityItem>
    );
};

export default ItemSecurity;