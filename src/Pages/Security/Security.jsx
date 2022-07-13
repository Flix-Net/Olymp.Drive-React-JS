import React from 'react';
import styled from "styled-components";
import ItemSecurity from "../../Components/ItemSecurity";
import Container from "../../Components/Container";
import SecurityPNG from "../../Assets/IMG/security.png";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";

let StyledBlockSecurityContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 60px;
`

let StyledBlockSecurityIMG = styled.img`
  width: 35px;
  height: auto;
  display: block;
  margin: 20px auto 0;
`

let StyledBlockSecurityTitle = styled.div`
  text-align: center;
  font-size: 36px;
  font-family: 'Exo 2',sans-serif;
  margin: 30px auto;
`

let StyledBlockSecurityDesc = styled.div`
  text-align: center;
  font-size: 22px;
  font-family: 'Exo 2',sans-serif;
  margin: 30px auto;
`

const Security = () => {

    let [item, setItem] = React.useState([]);

    React.useEffect( ()=>{
        fetch("https://62b008c2e460b79df03b73cb.mockapi.io/Security-Items")
            .then( (res)=>{
                return res.json();
            } )
            .then( (json) =>{
                setItem(json);
            })
    },[] )

    return (
        <>
            <Header/>
            <Container>
                <StyledBlockSecurityIMG src={SecurityPNG} alt=""/>
                <StyledBlockSecurityTitle>Не о чем переживать</StyledBlockSecurityTitle>
                <StyledBlockSecurityDesc>На время поездки в машине Драйва вы прикрыты со всех сторон:</StyledBlockSecurityDesc>

                <StyledBlockSecurityContent>
                    {item.map( (Item) => (
                        <ItemSecurity key={Item.id} {...Item} />
                    ) )}
                </StyledBlockSecurityContent>
            </Container>
            <Footer/>
        </>
    );
};

export default Security;