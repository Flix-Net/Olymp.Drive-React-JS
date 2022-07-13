import React from 'react';
import styles from "../Registr/register.module.css";
import videoBG from "../../Assets/IMG/forest.mp4";
import imageCar from "../../Assets/IMG/mercedes.png";

const Registr = () => {

    return (
        <>
            <div className="page">
                <div className={styles.container__video}>
                    <div className={styles.block__video}>
                        <video src={videoBG} autoPlay muted loop/>
                    </div>
                </div>


                <div className={styles.interface}>
                    <h1>Добро пожаловать!</h1>
                    <h1>Зарегистрируйтесь</h1>
                    <h2>Загрузи наше приложение</h2>
                    <h2>Стань владельцем тысячи авто</h2>
                    <img src={imageCar} alt=""/>
                </div>

                <div className={styles.block_register}>
                    <input className={styles.inputs} type="text" name="FName" placeholder="Имя" autoComplete="sex"/>
                    <input className={styles.inputs} type="text" name="LName" placeholder="Фамилия" autoComplete="sex"/>
                    <input className={styles.inputs} type="text" name="Login" placeholder="Введите логин"  autoComplete="sex"/>
                    <input className={styles.inputs} type="password" name="Password" placeholder="Введите пароль" />
                    <input className={styles.inputs} type="password" name="Password" placeholder="Повторите пароль"/>
                    <input className={styles.inputs} type="number" name="Phone" placeholder="Введите телефон" autoComplete="off"/>
                    <span className={styles.block_register_span}>У меня нет телефона</span>
                    <input onClick={()=>alert("Вы успешно зарегистрировались")} type="submit" value="Зарегистрироваться"/>
                </div>
            </div>
        </>
    );
};

export default Registr;