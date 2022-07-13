import React from 'react';
import styles from "./UserPanel.module.css";
import Container from "../../Components/Container";
import Button from "../../Components/Button";
import userPNG from "../../Assets/IMG/user.png";
import numberCarPNG from "../../Assets/IMG/number.png";
import closePNG from "../../Assets/IMG/CloseCar.png";
import openPNG from "../../Assets/IMG/OpenCar.png";
import btn1PNG from "../../Assets/IMG/btn1.png";
import btn2PNG from "../../Assets/IMG/btn2.png";
import btnReportPNG from "../../Assets/IMG/btnReport.png";
import carPNG from "../../Assets/IMG/audi.png";
import Footer from "../../Components/Footer";
import Modal from "../../Components/Modal/Modal";
import {useNavigate} from "react-router-dom";
import HeaderAcc from "../../Components/Header/HeaderAcc";

const UserPanel = () => {

    let [activeModal1,setActiveModal1] = React.useState(false);
    let [visibleMap, setVisibleMap] = React.useState(false);
    let [message, setMessage] = React.useState('');
    let [responseAdmin, setResponseAdmin] = React.useState('');
    let [arrMessage, setArrMessage] = React.useState([]);
    const navigate = useNavigate();

    function addArrMessage(msg)
    {
        let newArrMessage = [...arrMessage, msg];
        setArrMessage(newArrMessage);
        setMessage('');
    }

    function responseAdminChat()
    {
        setTimeout(()=>{
            setResponseAdmin('Печатает')
        },1000);

        setTimeout( ()=>{setResponseAdmin('Печатает.') }, 1600);
        setTimeout( ()=>{setResponseAdmin('Печатает..') }, 2200);
        setTimeout( ()=>{setResponseAdmin('Печатает...') }, 2800);
        setTimeout( ()=>{setResponseAdmin('Печатает.') }, 3400);
        setTimeout( ()=>{setResponseAdmin('Печатает..') }, 4000);
        setTimeout( ()=>{setResponseAdmin('Печатает...') }, 4600);
        setTimeout( ()=>{setResponseAdmin('Здравствуйте, мы уже работаем над вашей проблемой!') }, 6000);

    }

    return (
        <div>
            <HeaderAcc/>
            <Container>
                <div className={styles.block_1}>
                    <div className={styles.block__Cash_Btns_Location}>
                        <div className={styles.disp_panel_profile}>
                            <div className={styles.disp_panel_profile__icon}><img src={userPNG} alt=""/></div>
                            <div className={styles.disp_panel_profile__id}>User</div>
                            <div className={styles.disp_panel_profile__btnEnd}><Button width={"140px"} height={"45px"} bgColor={"Red"} onClick={()=>navigate("/")}>Выйти</Button></div>
                        </div>
                        <div className={styles.block__Cash_Btns_Location__1}>
                            <div className={styles.block__cash}>Ваш счет: 10 000 сом</div>
                            <Button bgColor={"greenyellow"} >Пополнить</Button>
                            <Button onClick={()=> setTimeout(()=>{setVisibleMap(!visibleMap)},2000)} bgColor={"Orange"}  id="user__track_car">Отслеживание</Button>
                        </div>
                        <div className={styles.block__Cash_Btns_Location__2}>
                            <div className={visibleMap ? styles.block__Location_MapVis : styles.block__Location_MapHide}><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6423.4213441365055!2d74.60898206481349!3d42.873620742254005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1653205294684!5m2!1sru!2skg" ></iframe></div>
                        </div>
                    </div>
                </div>
                {/*<!-- ---------------------------------Block 1------------------------------------- -->*/}

                {/*<!-- ---------------------------------Block 2------------------------------------- -->*/}
                <div className={styles.block_2} id="block_2">
                    <div className={styles.block__data_number_btns}>
                        <div className={styles.text_info}></div>
                        <div className={styles.inWay}>В пути:</div>
                        <div className={styles.expectation}>Ожидание:</div>
                        <div className={styles.number}><img src={numberCarPNG} alt=""/></div>
                        <a href="/UserAccount#block_2"><img id="OpenCar" className={styles.btnCar} src={openPNG} alt=""/></a>
                        <a href="/UserAccount#block_2"><img id="CloseCar" className={styles.btnCar} src={closePNG} alt=""/></a>
                    </div>
                    <div className={styles.block__img_btns}>
                            <img className={styles.block__img_btns__img} src={carPNG} alt=""/>
                            <a href="#"><img className={styles.btnCar} src={btn1PNG} alt=""/></a>
                            <a onClick={()=>setActiveModal1(true)} href="#Block2" id="user__btn_report"><img className={styles.btnCar} src={btnReportPNG} alt=""/></a>
                            <a href="#"><img className={styles.btnCar} src={btn2PNG} alt=""/></a>
                    </div>
                </div>
                {/*<!-- ---------------------------------Block 2------------------------------------- -->*/}
            </Container>


            {/*<!-- ---------------------------------Support------------------------------------- -->*/}

            {activeModal1 && <Modal width={"1200px"} height={"620px"} active={activeModal1} setActive={setActiveModal1}>

                <div className={styles.block__chat}>
                    <strong>Опишите свою проблему</strong>
                    <div className={styles.block__chat__body}>
                        {arrMessage.length !== 0 ? arrMessage.map((msg)=>(<div className={styles.block__chat__body__message} id={styles.message1}>{msg}</div>)) : <></>}
                        {responseAdmin === '' ? <></> : <div className={styles.block__chat__body__message} id={styles.message2}>{responseAdmin}</div>}
                    </div>
                    <div className={styles.block__chat__response_admin}>
                        <input value={message} onChange={(event)=>setMessage(event.target.value)} className={styles.block__chat__responce_Input} type="text" placeholder="Введите сообщение"/>
                        <Button height={"45px"} bgColor={"White"} onClick={()=> {
                            addArrMessage(message);
                            responseAdminChat();
                            console.log(responseAdmin);
                        }} className={styles.response_Btn}>Ответить</Button>
                    </div>
                </div>

            </Modal>}
            <Footer/>
        </div>
    );
};

export default UserPanel;