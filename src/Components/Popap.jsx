import React from 'react';
import styled from "styled-components";

let StyledPopapBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

let StyledPopapInfo = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  background-color: black;
  color: #1FFFBC;
`

const PopapInfo = () => {
    return (
        <StyledPopapBlock>
            <StyledPopapInfo>
                <div>Hello World!</div>
                <div>I'm programmer!</div>
                <div>My sarary more 10 000$ in month!</div>
                <div>X</div>
            </StyledPopapInfo>
        </StyledPopapBlock>
    );
};

export default PopapInfo;