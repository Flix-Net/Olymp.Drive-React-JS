import React from 'react';

import "./MainPage.css";

import Header from "../../Components/Header/Header";
import ScrollUp from "../../Components/ScrollUp";
import Container from "../../Components/Container";
import PopapInfo from "../../Components/Popap";
import PhoneIMG from "../../Assets/IMG/phone.png";
import LocIMG from "../../Assets/IMG/loc.png";
import Loc2IMG from "../../Assets/IMG/loc2.png";
import Categories from "../../Components/Categories";
import ItemCar from "../../Components/ItemCar";
import LogoIMG from "../../Assets/IMG/logo.png";
import Footer from "../../Components/Footer";
import {useNavigate} from "react-router-dom";

const Home = () => {

    let [cars, setCars] = React.useState([]);
    let [category, setCategory] = React.useState(0);
    const navigate = useNavigate();



    React.useEffect( ()=>{
        fetch(`https://62b008c2e460b79df03b73cb.mockapi.io/cars?${category > 0 ? `sortCategory=${category}` : ""} `)
            .then((res)=>{
                return res.json();
            })
            .then((json)=>{
                setCars(json);
            })
    },[category] )

    return (
        <>
            <Header/>
            <ScrollUp/>
            <div className="Block__Promo">
                <Container>

                    <div className="block">
                        <div className="block__title__button">

                            <div className={"block_btn_link"}>
                                <a href="#MapZone" className={"btn_link"} >Зона поездок</a>
                                <a href="#BlockCar" className={"btn_link"} >Автомобили</a>
                                <a href="#block_download" className={"btn_link"} >Приложение</a>
                            </div>

                            <div className="Promo__title">Свобода — когда своей машины нет. А каршеринг есть.</div>

                            <div className="Promo_button">
                                <a href="/Registr" target={"_blank"}  className="Promo__button__link" rel="noreferrer">
                                    <div className="Promo_button_text1">Зарегистрироваться</div>
                                    <div className="Promo_button_text2">Есть 21 год и 2 года стажа</div>
                                </a>
                            </div>
                        </div>

                        <div className="Phone__img">
                            <img src={PhoneIMG} alt=""/>
                        </div>
                    </div>

                </Container>
            </div>



            <div id="MapZone" className="Map">
                <Container>
                    <div className="block_map">

                        <div className="image_location"><img src={LocIMG} alt=""/></div>

                        <div className="map_title">Гигантские зоны поездок</div>

                        <div className="map_desc">Завершать аренду и оставлять машины можно только в городе, а вот ездить — по всей области и даже дальше</div>

                        <div className="map_window">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11697.162582267478!2d74.58147690000001!3d42.86670919999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1655122545779!5m2!1sru!2skg"/>
                        </div>

                    </div>
                </Container>
            </div>


            <div id="BlockCar" className="block_cars">
                <Container>

                    <img className="img_car" src={Loc2IMG} alt="" />
                    <div className="section__cars__title">Вот машины в вашем городе. В других — другие.</div>

                    <Categories value={category} onClickCategory={(i)=> setCategory(i)} />

                    <div className="section__cars__everyday">На каждый день</div>
                    <div className="section__cars__years21">От 21 года и 2 лет стажа вождения</div>

                    <div className="section__cars">
                        {cars.map( (car) => (
                            car.class === "economy" ?  <ItemCar key={car.id} {...car} /> : <></>
                        ) )}
                    </div>

                    <div className="section__cars__everyday">На праздник</div>
                    <div className="section__cars__years21">От 26 года и 6 лет стажа вождения</div>

                    <div className="section__cars">
                        {cars.map( (car) => (
                            car.class === "business" ? <ItemCar onClick={()=>navigate("/RentCar")} key={car.id} {...car} /> : <></>
                        ) )}
                    </div>

                    <div className="section__cars__everyday">Электромобили</div>
                    <div className="section__cars__years21">От 26 года и 6 лет стажа вождения</div>

                    <div className="section__cars">
                        {cars.map( (car) => (
                            car.class === "electro" ? <ItemCar key={car.id} {...car}/> : <></>
                        ) )}
                    </div>

                    <div className="section__cars__everyday">Груз и шаттл</div>
                    <div className="section__cars__years21">От 21 года и 2 лет стажа вождения</div>

                    <div className="section__cars">
                        {cars.map( (car) => (
                            car.class === "cargo" || car.class === "shuttle" ? <ItemCar key={car.id} {...car} /> : <></>
                        ) )}
                    </div>

                </Container>
            </div>


            {/*<!-- ----------------------------------Download App------------------------------------- -->*/}
            <div id="block_download" className="block_download__MainTitle">Ваш ключ от машины — наше приложение</div>

            <div className="conteiner">
                <div className="block_download">

                    <div className="block_download__block1">
                        <div className="block_download__block1__img"><img src={LogoIMG} alt=""/></div>
                        <div className="block_download__block1__titleOrDesc">
                            <div className="block_download__block1__title">Олимп.Драйв - каршеринг</div>
                            <div className="block_download__block1__desc">Carsharing — это краткосрочная аренда тысяч машин вместо одной своей.</div>
                        </div>
                    </div>

                    <div className="block_download__block2">
                        <div className="block_download__block2__requirements">
                            <div className="block_download__block2__requirements__title">Требования</div>
                            <div className="block_download__block2__requirements__desc">
                                <ul>
                                    <li>Требуемая версия Android 7.0 и выше</li>
                                    <li>Размер 285M</li>
                                    <li>Обновлено: 21 марта 2022 г</li>
                                    <li>Количество установок 1 000 000+</li>
                                </ul>
                            </div>
                        </div>
                        <div className="block_download__block2__desc">
                            <div className="block_download__block2__description__title">Описание</div>
                            <div className="block_download__block2__description__desc">
                                Краткосрочная аренда тысяч машин вместо одной своей. А с недавних пор ещё и подписка на машину от месяца до полутора лет с оплатой по частям. Можно взять в прокат авто и ездить по делам, выезжать за город или перевозить грузы.
                            </div>
                        </div>
                    </div>

                    <div className="block_download_buttons__title">Так скачайте же его</div>
                    <div className="block_download_buttons">
                        <a className="block_download_buttons_ios" href="https://apps.apple.com/ru/app/id1318875022"/>
                        <a className="block_download_buttons_and" href="https://play.google.com/store/apps/details?id=com.yandex.mobile.drive&hl=ru"/>
                    </div>

                </div>
            </div>

            {/*<!-- ----------------------------------Download App------------------------------------- -->*/}
            <Footer/>
        </>
    );
};

export default Home;