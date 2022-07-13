import React from 'react';
import styled from "styled-components";
import plane_upIMG from "../Assets/IMG/PLANE-UP.png";

const StyledScrollUp = styled.img`
  z-index: 999;
  position: fixed;
  transform: translate(-50%,-50%);
  top: 80%;
  left: 6%;
  width: 70px;
  height: auto;
  cursor: pointer;
  opacity: 0.4;
  transition: .3s;  
  &:hover{
    width:100px;
    height: auto;
    transition: 0.3s;
    opacity: 1;
  }
`

const ScrollUp = () => {

    function scrollUp()
    {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    return <StyledScrollUp onClick={scrollUp} src={plane_upIMG} alt=""/>
};

export default ScrollUp;