import React from 'react';
import Container from "../../Components/Container";
import styles from "./adminPanel.module.css";
import photoDispatcher from "../../Assets/IMG/dispatcher.png";
import Button from "../../Components/Button";
import {useNavigate} from "react-router-dom";
import Input from "../../Components/Input";
import Modal from "../../Components/Modal/Modal";
import photoDoc from "../../Assets/IMG/photo_doc.jpg";
import photoDriveDoc from "../../Assets/IMG/photo_driveDoc.jpg";
import photoDamageFront from "../../Assets/IMG/Photo_Damage/front.PNG";
import photoDamageBack from "../../Assets/IMG/Photo_Damage/back.PNG";
import photoDamageInner from "../../Assets/IMG/Photo_Damage/inner.PNG";
import Slider from "../../Components/Slider/Slider";
import Footer from "../../Components/Footer";
import HeaderAcc from "../../Components/Header/HeaderAcc";

const AdminPanel = () => {
    let [countDoc, setCountDoc] = React.useState(3); // кол-во требуемых для проверки заявок
    let [IDcar1, setIDcar1] = React.useState('');    // содержимое первого Input
    let [IDcar2, setIDcar2] = React.useState('');    // содержимое второго Input
    const navigate = useNavigate();
    let [codeModal, setCodeModal] = React.useState(0);
    let [activeModal0, setActiveModal0] = React.useState(false); // модальное окно "Ошибки ввода ID машины"
    let [activeModal1, setActiveModal1] = React.useState(false); // модальное окно "Проверки документов"
    let [activeModal2, setActiveModal2] = React.useState(false);  // модальное окно "Отследить"
    let [activeModal3, setActiveModal3] = React.useState(false);  // модальное окно "Завершить"
    let [activeModal4, setActiveModal4] = React.useState(false);  // модальное окно "Поддержка"
    let [message, setMessage] = React.useState(''); // отрывок из чата
    let [arrMessage, setArrMessage] = React.useState([]); // массив сообщений из чата
    let arrPicture = [photoDamageFront,photoDamageBack,photoDamageInner];

    const endSession = ()=>{
        alert("Вы вышли из профиля!");
        navigate("/");
    }

    function checkEmpty(data)
    {
        if (data === '')
            setActiveModal0(true);
        else return 1;
    }

    const callServicePersonal = ()=>{
        if (checkEmpty(IDcar1))
        {
            setCodeModal(1);
            setActiveModal0(true);
        }
    }

    function openCar()
    {
        if (checkEmpty(IDcar2))
        {
            setCodeModal(2);
            setActiveModal0(true);
        }
    }

    function closeCar()
    {
        if (checkEmpty(IDcar2))
        {
            setCodeModal(3);
            setActiveModal0(true);
        }
    }

    function CheckCountDoc(count)
    {
        if(count ===0)
        {
            alert("Заявок больше нет.");
        }
        else
        {
            setCountDoc(countDoc - 1);
            setActiveModal1(true);
        }
    }

    function addMessage()
    {
        let newArrMessage = [...arrMessage, message];
        setArrMessage(newArrMessage);
    }

    return (
        <>
            <HeaderAcc/>

            <Container>
                <div className={styles.disp_panel}>
                    <div className={styles.disp_panel_profile}>
                        <div className={styles.disp_panel_profile__icon}>
                            <img src={photoDispatcher} alt=""/>
                            <div className={styles.disp_panel_profile__id}>id #98376</div>
                            <Button  onClick={endSession} color={"white"} width={"140px"} height={"40px"} bgColor={"Red"}>Завершить смену</Button>
                        </div>
                    </div>
                    <div className={styles.disp_panel_buttons}>

                        <div className={styles.disp_panel_buttons__group_One}>

                            <Button bgColor={"rgb(0, 179, 255)"} onClick={()=>CheckCountDoc(countDoc)}>Проверка документов</Button>

                            <div className={styles.checkDoc__indicator}>{countDoc}</div>
                            <div className={styles.group__ServicePersonnelAndinputIDCar}>
                                <Button bgColor={"orange"} onClick={callServicePersonal} >Вызвать обслуж. персонал</Button>
                                <br/>

                                <Input IDcar={IDcar1} setIDcar={setIDcar1} />

                            </div>
                        </div>

                        <div className={styles.disp_panel_buttons__group_Two}>
                            <Button onClick={openCar}>Открыть</Button>
                            <Button onClick={()=>setActiveModal2(true)}>Отследить</Button>
                            <Button onClick={()=>setActiveModal4(true)} >Поддержка</Button>
                            <Button onClick={closeCar}>Закрыть</Button>
                            <Button onClick={()=>setActiveModal3(true)} >Завершить</Button>
                            <Button >Помощь при ДТП</Button>

                            <Input IDcar={IDcar2} setIDcar={setIDcar2} width={"550px"}/>
                            <Button onClick={()=> {
                                setIDcar1('');
                                setIDcar2('');
                                setCodeModal(0);}}
                                    bgColor={"silver"} height={"45px"} >Сбросить</Button>
                        </div>
                    </div>
                </div>

                <table className={styles.tableUsers}>
                    <thead>
                        <tr className={styles.tableUsers__mainRow}>
                            <th>Номер</th>
                            <th>ФИО</th>
                            <th>Автомобиль</th>
                            <th>Расстояние</th>
                            <th>Время</th>
                            <th>Счёт</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Стройков Игорь</td>
                            <td>Subaru Forester</td>
                            <td>19.4 км</td>
                            <td>23 ч. 32 м.</td>
                            <td>1330 сом</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Орлов Сергей</td>
                            <td>Toyota Camry</td>
                            <td>34.8 км</td>
                            <td>2 д. 4 ч.</td>
                            <td>3960 сом</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Фурсова Елизавета</td>
                            <td>Nissan Almera</td>
                            <td>216.81 км</td>
                            <td>5 д. 16 ч.</td>
                            <td>6824 сом</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Шпак Ангелина</td>
                            <td>Mitsubishi Colt</td>
                            <td>128.8 км</td>
                            <td>6 д. 15 ч.</td>
                            <td>9293,5 сом</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Бондина Анастасия</td>
                            <td>Audi A4</td>
                            <td>76 км</td>
                            <td>4 ч. 32 м.</td>
                            <td>1414 сом</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Иванова София</td>
                            <td>Mercedes Benz GL650</td>
                            <td>986 км</td>
                            <td>23 д. 4 ч.</td>
                            <td>31 379 сом</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Перфильева Милена</td>
                            <td>Nissan Leaf</td>
                            <td>311 км</td>
                            <td>9 д. 16 ч.</td>
                            <td>12 166,5 сом</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Химич Елена</td>
                            <td>Mercedes Benz G500</td>
                            <td>394 км</td>
                            <td>15 д. 8 ч.</td>
                            <td>20 091 сом</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Пискунова Валерия</td>
                            <td>Hyundai Elantra</td>
                            <td>66 км</td>
                            <td>2 д. 1 ч.</td>
                            <td>2699 сом</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Казанцева Елизавета</td>
                            <td>Volkswagen Polo</td>
                            <td>132,7 км</td>
                            <td>1 д. 3 ч.</td>
                            <td>1499,5 сом</td>
                        </tr>
                    </tbody>
                </table>
            </Container>

            <Footer/>

            {activeModal0 && <Modal display={"flex"} width={"300px"} height={"150px"} active={activeModal0} setActive={setActiveModal0}>
                {codeModal === 0 ? <div>Введите ID машины!</div> :
                    codeModal === 1 ? <div>Обслуживающий персонал на машину {IDcar1} вызван!</div> :
                        codeModal === 2 ? <div>Автомобиль под номером {IDcar2} открыт!</div> :
                            codeModal === 3 ? <div>Автомобиль под номером {IDcar2} закрыт!</div> : <></>}
            </Modal>}



            {activeModal1 && <Modal width={"1200px"} height={"550px"} active={activeModal1} setActive={setActiveModal1}>
                <div className={styles.block_Photo_Docs}>
                    <div className={styles.photo_Doc}><img src={photoDoc} alt=""/></div>
                    <div className={styles.photo_Doc}><img src={photoDriveDoc} alt=""/></div>
                </div>

                <div className={styles.groupAreaAndBtns}>
                    <div className={styles.block_area}>
                            <textarea name="" id="" cols="30" rows="10">Здравствуйте, ваш возраст не соответствует требованиям.

                            Отказано!

                            Диспетчер #98376
                            </textarea>
                    </div>

                    <div>
                        <Button onClick={()=>{setTimeout(()=>{setActiveModal1(false)},2000)}} margin={"10px 0"} bgColor={"greenyellow"}>Принять</Button>
                        <br/>
                        <Button onClick={()=>{setTimeout(()=>{setActiveModal1(false)},2000)}} margin={"10px 0"} bgColor={"red"}>Отклонить</Button>
                    </div>

                </div>
            </Modal>}

            {activeModal2 && <Modal width={"1200px"} height={"570px"} active={activeModal2} setActive={setActiveModal2}>
                <div className={styles.blockMapInPopap}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11697.162582267478!2d74.58147690000001!3d42.86670919999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1655122545779!5m2!1sru!2skg"/>
                </div>

                <div>
                    <Button margin={" 15px 0 0 0"} bgColor={"white"}>Скопировать адрес автомобиля</Button>
                    <Button margin={" 15px 0 0 3%"} bgColor={"white"}>Отправить обслуж. персонал</Button>
                </div>
            </Modal>}

            {activeModal3 && <Modal width={"1200px"} height={"105%"} active={activeModal3} setActive={setActiveModal3}>
                <Slider arr={arrPicture} />

                <div>
                    <Button bgColor={"greenyellow"} onClick={()=> {
                        setTimeout(()=>setActiveModal3(false),2000);
                    }}>Повреждений нет</Button>
                    <Button bgColor={"orange"} onClick={()=>alert(`Заявка оформлена как страховой случай`)}>Страховой случай</Button>
                </div>
            </Modal>}

            {activeModal4 && <Modal width={"1200px"} height={"600px"} active={activeModal4} setActive={setActiveModal4}>
                <div className={styles.block__chat}>

                    <strong>Пользователь: Фурсова Елизавета | ID: 3</strong>
                    <div className={styles.block__chat__body}>
                        <div className={styles.block__chat__body__message} id={styles.message1}>Здравствуйте, у меня проблема..</div>

                        {arrMessage.length === 0 ? <></> : arrMessage.map( (msg)=>(
                            <div className={styles.block__chat__body__message} id={styles.message2}>{msg}</div>
                        ) )}

                    </div>

                    <div className={styles.block__chat__response_admin}>
                        <input value={message} onChange={(event)=>setMessage(event.target.value)} className={styles.block__chat__responce_Input} type="text" placeholder="Введите сообщение"/>
                        <Button height={"45px"} bgColor={"#f0f0f0"} onClick={ ()=>{addMessage(); setMessage("")}  } className={styles.response_Btn}>Ответить</Button>
                    </div>

                </div>
            </Modal>}

        </>
    );
};

export default AdminPanel;