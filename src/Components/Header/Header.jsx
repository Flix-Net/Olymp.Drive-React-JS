import React from 'react';
import styled from "styled-components";
import styleCSS from "./index.module.css";
import Container from "../Container";
import LogoIMG from "../../Assets/IMG/logo.png";
import { Link } from "react-router-dom";
import LinkLogin from "../../Pages/Login/Login";

const StyledHeader = styled.header`
  background: linear-gradient(180deg, #8CFF45 0%, rgba(221, 248, 20, 0.43) 78.97%, rgba(255, 245, 0, 0) 100%);
  width: 100%;
  height: 220px;
  position: relative;
  top: 0;
`

const StyledHeaderInner = styled.div`
  
  margin: 0 auto; 
  top:50px;
  left: 0;
  position: relative;
  height: 90px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(54, 204, 237, 0.35);
  border-radius: 35px;
  z-index: 1;
`



const StyledIMGLogo = styled.img`
  width: 150px;
  height: auto;
  margin-left: 15px;
  cursor: pointer;
  z-index: 999;
`


const Header = () => {
    return (
            <StyledHeader>
                <Container>
                    <StyledHeaderInner>
                        <Link to={"/"}><StyledIMGLogo src={LogoIMG} alt=""/></Link>

                        <nav>
                            {/*<Link to={"Home/#MapZone"} className={styleCSS.link} >Зоны поездок</Link>*/}
                            {/*<Link to="#BlockCar" className={styleCSS.link} >Машины</Link>*/}
                            <Link to={"/Security"} className={styleCSS.link} >Безопасность</Link>
                            <Link to={"/Questions"} className={styleCSS.link} >Ответы на вопросы</Link>
                            {/*<Link to={"/Download"} className={styleCSS.link} >Скачать</Link>*/}
                            <Link to={"/Login"} target="_blank" className={styleCSS.link} >Войти</Link>
                        </nav>
                    </StyledHeaderInner>
                </Container>
            </StyledHeader>
    );
};

export default Header;