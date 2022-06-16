import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/navigation";

import "./stylesUp.css";

import { Navigation,Autoplay } from "swiper";

import fondoSlider from "./images/fondoSlider.png"
import fondoSliderUP from "./images/fondoSliderUP.png"

import fondoSliderMovil from "./images/fondoSliderMovil.png"

import slide1 from "./images/slide1.png"
import slide2 from "./images/slide2.png"
import slide3 from "./images/slide3.png"

import slide1Movil from "./images/slide1Movil.png"
import slide2Movil from "./images/slide2Movil.png"
import slide3Movil from "./images/slide3Movil.png"

import fondoSliderVacio from "./images/fondoSliderVacio.png"
import modeloSlider from "./images/modeloSlider.png"
import fondoVacioMOVIL from "./images/fondoVacioMOVIL.png"

import dec1 from "./images/dec1.png"
import dec2 from "./images/dec2.png"

import styled from "styled-components";
import { NavLink } from "react-router-dom";



const Pc = styled.div`

@media screen and (max-width: 1100px) {
    display:none;
}`;  
const Movil = styled.div`
@media screen and (min-width: 1100px) {
    display:none;
}
@media screen and (max-width: 1100px) {
    display:block;
}`;  

export default function SliderUP() {
  return (
    <>
    <div style={{marginTop:"10vw", marginBottom:"-3vw"}}>
    <Pc>
    <img style={{position:"absolute",width:"28.5vw", marginTop:"-17.5vw"}}  src={dec1}/>

    <div style={{zIndex:"1",marginTop:"5vw",marginLeft:"35vw",position:"absolute", width:"60vw"}}>
    <Swiper autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}  modules={[Navigation,Autoplay]} className="mySwiper">
        <SwiperSlide>
        <NavLink to="/2021/12/27/wifimesh/"> 

          <img src={slide1}/>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
        <NavLink to="/Blog"> 

          <img src={slide2}/>
          </NavLink>
          </SwiperSlide>
        <SwiperSlide>
        <NavLink to="/Blog"> 

          <img src={slide3}/>
          </NavLink>

        </SwiperSlide>
    </Swiper>
    </div>
    <img style={{zIndex:"2",width:"31vw",position:"absolute", marginTop:"4.1vw", marginLeft:"10vw"}} src={modeloSlider}/>
    
    <img style={{position:"absolute",width:"25.5vw", marginTop:"42vw", marginLeft:"74vw"}}  src={dec2}/>

    <img style={{width:"100%"}} src={fondoSliderVacio}/>
    
    </Pc>
    </div>

    <div style={{marginTop:"10vw", marginBottom:"7vw"}}>
    <Movil>
    <img style={{position:"absolute",width:"24vw", marginTop:"-14.4vw"}}  src={dec1}/>

      <div style={{paddingTop:"10%",marginLeft:"16vw",position:"absolute", width:"75vw"}}>
        <Swiper autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}   modules={[Navigation,Autoplay]} className="mySwiper">
          <SwiperSlide>
          <NavLink to="/2021/12/27/wifimesh/"> 

            <img src={slide1Movil}/>
          </NavLink> 
          </SwiperSlide>
          <SwiperSlide>
            <NavLink to="/Blog">

            <img src={slide2Movil}/>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
          <NavLink to="/Blog">

            <img src={slide3Movil}/>
            </NavLink>
          </SwiperSlide>
        </Swiper>
      </div>

      <img style={{zIndex:"2",width:"45vw",position:"absolute", marginTop:"61vw", marginLeft:"8vw"}} src={modeloSlider}/>
      
      <img style={{position:"absolute",width:"25.5vw", marginTop:"117.5vw", marginLeft:"84.5vw"}}  src={dec2}/>

      <img style={{width:"110vw"}} src={fondoVacioMOVIL}/>

    </Movil>
    </div>
    </>
  );
}