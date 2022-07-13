import React from 'react';
import styled from "styled-components";
import Carousel from 'react-bootstrap/Carousel'



const Slider = ({arr}) => {
    return (
            <Carousel variant={"dark"} >
                {arr.map((image)=>(
                        <Carousel.Item >
                            <img  src={image} alt="second slide"/>
                        </Carousel.Item>
                ))}
            </Carousel>
    );
};

export default Slider;