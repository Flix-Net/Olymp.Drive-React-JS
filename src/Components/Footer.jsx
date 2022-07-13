import React from 'react';
import styled, {keyframes} from "styled-components";
import Container from "./Container";

let StyledFooterBlock = styled.footer`
  margin-top: auto;
  height: 100px;
  background-color: black;
  color: white;
  text-align: center;
  box-shadow: 0px -21px 47px -17px rgba(15, 255, 0, 0.6) inset;
`

let StyledSignWrap1 = styled.div`
  background: #00000000;
  text-align: center;
`

let neonAnim = keyframes`
  from {
    text-shadow: 0 0 6px rgb(12, 244, 0), 0 0 15px rgba(14, 255, 1, 0.564), 0 0 12px rgba(191, 226, 255, 0.92), 0 0 21px rgba(255, 0, 0, 0.92), 0 0 38px rgba(255, 0, 0, 0.78), 0 0 60px rgba(255, 0, 0, 0.92);
  }
  to {
    text-shadow: 0 0 6px rgb(12, 244, 0), 0 0 15px rgba(12, 244, 0, 0.501), 0 0 12px rgba(191, 226, 255, 0.84), 0 0 22px rgba(191, 226, 255, 0.84), 0 0 24px rgba(191, 226, 255, 0.88), 0 0 510px rgb(248, 209, 209);
  }
`

let StyledSignWord = styled.span`
  font-size: 20px;
  font-weight: bold;
  line-height: 100px;
  color: rgb(255, 255, 255);
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  animation: ${neonAnim} .5s ease-in-out infinite alternate;
`




const Footer = () => {
    return (
        <StyledFooterBlock>
            <Container>
                <StyledSignWrap1>
                    <StyledSignWord>Разработчик  </StyledSignWord>
                    <StyledSignWord>Stroykov Corp. </StyledSignWord>
                    <StyledSignWord> | 2019 - 2022</StyledSignWord>
                </StyledSignWrap1>
            </Container>
        </StyledFooterBlock>
    );
};

export default Footer;