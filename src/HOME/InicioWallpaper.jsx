import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation,Autoplay } from "swiper";

import banner1 from "./images/banner1.webp"
import botonSoli from "./images/botonSoli.png"
import diseñoInfMovil from "./images/diseñoInfMovil.png"
import diseñoInfUP from "./images/diseñoInfUP.png"
import banner1Movil from "./images/banner1Movil.webp"


import BANNERS1 from "./images/BANNERS1.webp"
import BANNERS2 from "./images/BANNERS2.webp"
import BANNERS3 from "./images/BANNERS3.webp"
import BannerDayPC from "./images/BannerDayPC.webp"

import BANNERS1MOVIL from "./images/BANNERS1MOVIL.webp"
import BANNERS2MOVIL from "./images/BANNERS2MOVIL.webp"
import BANNERS3MOVIL from "./images/BANNERS3MOVIL.webp"
import BannerDayMovil from "./images/BannerDayMovil.webp"


import BotonWallp1 from "./images/BotonWallp1.svg"
import BotonWallp2 from "./images/BotonWallp2.svg"
import BotonWallp3 from "./images/BotonWallp3.svg"

import styled from "styled-components";
import { NavLink } from "react-router-dom";



const Pc = styled.div`

@media screen and (max-width: 800px) {
    display:none;
}`;  
const Movil = styled.div`
@media screen and (min-width: 800px) {
    display:none;
}
@media screen and (max-width: 800px) {
    display:block;
}`;  

export default function InicioWallpaper() {
 
       
  return (
    <>
    <Pc>
      <Swiper style={{padding:"0px"}}
        autoHeight={true} 
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        id="mySwiper"
       
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
      >
        
        <SwiperSlide  >
          <NavLink style={{  
              width:"14%",
              }} to="/Solicitar" >
             <img  style={{
               position:"absolute",
               width:"32%",
               marginLeft:"7.5vw",
               marginTop:"25vw"
               }}  src={botonSoli} />

            </NavLink>
            <img  style={{width:"100%", marginTop:"70px"}}  src={banner1} />
            <div style={{textAlign:"right"}}>
            
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <NavLink style={{
                
                width:"14%",
            }} to="/Planes" >
             <img  style={{
               position:"absolute",
               width:"32%",
               marginLeft:"60vw",
               marginTop:"35vw"
               }}  src={BotonWallp2} />

            </NavLink>
            <img style={{width:"100%", marginTop:"70px"}} src={BANNERS2} />
            <div style={{textAlign:"right"}}>
            
          </div>
        </SwiperSlide>
        
      </Swiper>
      <img style={{width:"100%", marginTop:"-10px"}} src={diseñoInfUP} />
      </Pc>
      

      <Movil>
    
      <Swiper style={{padding:"0px", width:"110%"}}
        autoHeight={true} 
        pagination={{
          type: "progressbar",
        }}
        modules={[Autoplay,Pagination, Navigation]}
        id="mySwiper"
        autoplay={{
            delay: 3500,
            disableOnInteraction: false,
        }}
        loop={true}

      >
        <SwiperSlide  >

          <NavLink to="/Solicitar" >
            <img  style={{width:"100%", marginTop:"70px"}}  src={banner1Movil} />
          </NavLink>
        </SwiperSlide>
        
        <SwiperSlide >
        <NavLink to="/Planes" >
            <img  style={{width:"100%", marginTop:"70px"}} src={BANNERS2MOVIL} />
        </NavLink>
        </SwiperSlide>
        
      </Swiper>
      <img style={{width:"110.3vw", marginTop:"-7px", marginLeft:"-2px"}} src={diseñoInfMovil} />

      </Movil>
    </>
  );
}
