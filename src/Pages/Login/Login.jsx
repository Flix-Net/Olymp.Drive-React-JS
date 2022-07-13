import React from 'react';
import styles from './login.module.css';
import videoBG from '../../Assets/IMG/New_YorkBG.mp4';
import { useNavigate } from "react-router-dom";
import Modal from "../../Components/Modal/Modal";

const Login = () => {
    let [users, setUsers] = React.useState([]);
    let [login, setLogin] = React.useState('');
    let [password, setPassword] = React.useState('');
    let [visibleModal, setVisibleModal] = React.useState(false);
    let [codeModal, setCodeModal] = React.useState(0);
    const navigate = useNavigate();

    React.useEffect(()=>{
        fetch("https://62b008c2e460b79df03b73cb.mockapi.io/Users")
            .then((res)=>{
                return res.json();
            })
            .then((json)=>{
                setUsers(json);
            })
    },[])

    function Authorize()
    {
        let already = false;
        if(users.length === 0)
        {
            alert("База данных пустая!");
            return 0;
        }

        for(let user of users)
        {
            if(user.login === login)
            {
                if (String(user.password) === password)
                {
                    setCodeModal(1);
                    setVisibleModal(true);
                    already = true;
                    switch(user.role)
                    {
                        case "user":
                        {
                            navigate("/UserAccount");

                            break;
                        }
                        case "admin":
                        {
                            navigate("/AdminPanel");
                            break;
                        }
                    }

                    return 0;
                }
                else
                {
                    setCodeModal(3);
                    setVisibleModal(true);
                    return 0;
                }
            }

        }
        if(already === false)
        {
            setCodeModal(2);
            setVisibleModal(true);
            return 0;
        }
    }

    return (
        <div className="page">

            <div className={styles.interface}>
                <h1>Добро пожаловать!</h1>
                <h1>Авторизуйтесь</h1>
            </div>

            <div className={styles.container__video}>
                <div className={styles.block__video}>
                    <video src={videoBG} autoPlay muted loop></video>
                </div>
            </div>

            <div className={styles.block__form}>
                <input className={styles.inputs} value={login} type="text" name="Login" placeholder="Введите логин" autoComplete="sex" onChange={(event)=>setLogin(event.target.value)}/>
                <input className={styles.inputs} value={password} type="password" name="Password" placeholder="Введите пароль" onChange={(event)=>setPassword(event.target.value)}/>
                <input type="checkbox" name="rememberMe" id="" value="Запомнить вход"/>
                <input value="Войти" className="btn_login" id="btn_login" type="button" onClick={Authorize}/>
            </div>

            {visibleModal && <Modal display={"flex"} width={"400px"}  height={"200px"} active={visibleModal} setActive={setVisibleModal}>
                {codeModal === 2 ? <div>Пользователь не найден!</div> :
                    codeModal === 3 ? <div>Не верный пароль, повторите!</div> : <></>}
            </Modal>}

        </div>
    );
};

export default Login;