import React from 'react';
import Container from "../../Components/Container";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import Header from "../../Components/Header/Header";

let StyledTitleQuestions = styled.div`
  font-size: 32px;
  text-align: center;
  margin-bottom: 30px;
`

const Questions = () => {

    let [quest, setQuest] = React.useState([]);

    React.useEffect( ()=>{
        fetch("https://62b008c2e460b79df03b73cb.mockapi.io/Questions")
            .then( (res)=>{
                return res.json();
            } )
            .then( (json)=>{
                setQuest(json);
            } )
    },[] );

    return (
        <div>
            <Header/>
            <Container>
                <StyledTitleQuestions>Ответы на ваши вопросы</StyledTitleQuestions>

                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    {quest.map( (Question) => (
                        <Accordion.Item  eventKey={Question.id}>
                            <Accordion.Header >{Question.question}</Accordion.Header>
                            <Accordion.Body key={Question.id}>
                                {Question.response}
                            </Accordion.Body>
                        </Accordion.Item>
                    ) )}
                </Accordion>
            </Container>
        </div>
    );
};

export default Questions;