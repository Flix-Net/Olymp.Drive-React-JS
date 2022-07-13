import React from 'react';
import styles from "./RentCar.module.css";
import Container from "../../Components/Container";
import {Link} from "react-router-dom";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
import image from "../../Assets/IMG/audi.png";

const RentCar = () => {

    let [finalPrice, setFinalPrice] = React.useState('0.00');
    let [startData, setStartData] = React.useState('');
    let [endData, setEndData] = React.useState('');
    let [mileage, setMileage] = React.useState('');

    function calcRent()
    {
            debugger
        console.log(`Начало ${startData}`);//
        console.log(`Конец ${endData}`);   //
        let first = new Date(startData);   ///////  Расчёт даты
        let second = new Date(endData);    //
        let days = Math.abs(first - second);   //
        days /= (1000 * 60 * 60 * 24);         //
        let result = days * 1300;
        result += (mileage / 1000) * 1500;

        if(isNaN(result))
        { return 0; }

        setFinalPrice(result);
    }

    return (
        <div className="block_rent_auto">
            <Header/>
            <Container>

                <Link to="/#BlockCar" className={styles.back_toRent_car}>Назад</Link>

                <div className={styles.title_rent_car}>
                    <h1>Audi A6</h1>
                </div>

                <div className={styles.image_rent_auto}>
                    <img src={image} alt=""/>
                </div>

                <div className={styles.block_desc_form}>

                    <div className={styles.block_desc_auto}>

                        <div className={styles.block_desc_form__Desc}>
                            <div className={styles.block_desc_form_about_auto}>Про машину</div>
                            <ul className={styles.ul_about_auto}>
                                <li>Коробка</li>
                                <li>Год выпуска</li>
                                <li>Привод</li>
                                <li>Мощность</li>
                                <li>Бак</li>
                                <li>Тип топлива</li>
                            </ul>
                        </div>

                        <div className={styles.block_desc_form__Parameters}>
                            <ul className={styles.ul_parameters}>
                                <li>автомат</li>
                                <li>2021</li>
                                <li>передний</li>
                                <li>190 л.с.</li>
                                <li>73л</li>
                                <li>бензиновый</li>
                            </ul>
                        </div>

                    </div>

                    <div className={styles.block_rent_form}>


                        <div className={styles.block_forms__rent_car}>
                            <input value={startData} onChange={(event)=>setStartData(event.target.value)} type="date" name="StartData" className={styles.DataRent}/>
                            <input value={endData} onChange={(event)=>setEndData(event.target.value)} type="date" name="EndData" className={styles.DataRent}/>
                            <input value={mileage} onChange={(event)=>setMileage(event.target.value)} type="number" name="mileage" id="" className={styles.mileage} placeholder="Пробег"/>
                            <input type="text" name="insurance" id="" className={styles.insurance} placeholder="Страховка"/>
                        </div>

                        <div className={styles.title_price}>
                            <div className={styles.title_price_before}>Итого</div>
                            <div className={styles.title_price_itog}>{finalPrice}</div>
                        </div>

                        <button className={styles.btn_calc_rent} onClick={calcRent}> Расчитать</button>

                    </div>

                </div>

            </Container>
            <Footer/>
        </div>
    );
};

export default RentCar;