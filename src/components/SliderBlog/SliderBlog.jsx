import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./pregStyles.css";

import { Button, Card, Icon, Label} from "semantic-ui-react";

import { Pagination, Navigation, Autoplay } from "swiper";
import PeliculasSS from "./images/PeliculasSS.jpeg"
import RegalosTec from "./images/RegalosTec.jpg"
import Mesh from "./images/Mesh.jpg"
import sanV from "./images/sanV.jpg"
import ffthVS from "./images/ffthVS.jpg"
import ComidasSS from "./images/ComidasSS.jpeg"
import HistoriasMujer from "./images/HistoriasMujer.png"
import Evo from "./images/Evo.png"
import champions from "./images/champions.jpg"
import peruVsNZ from "./images/peruVsNZ.jpg"
import qatarbanner from "./images/qatarbanner.jpg"


import { NavLink } from "react-router-dom";

export default function SliderBlog() {



  return (
    <>
    <div style={{textAlign:"center", margin:"30px 0px"}}>
    <Button  style={{color:"white",borderRadius:"30px", fontSize:"35px", backgroundColor:"#76227e"}} > <b id="ultimo"> ¡LO ÚLTIMO! </b> </Button>
    <br /><br />  
    <div style={{fontSize:"20px",color:"#372C70"}}>
     <b id="disfruta">Disfruta leyendo nuestro Wasi Blog</b> 
    </div>
    </div> 
    <Swiper
      slidesPerView={1}
      slidesPerGroup={1}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        1000: {
          slidesPerView: 2,
          spaceBetween: -150,
        },
        1300: {
          slidesPerView: 3,
          spaceBetween: -150,
        },
        1700: {
          slidesPerView: 4,
          spaceBetween: -150,
        }
      }}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 15000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="sliderBLog"
      >

      <SwiperSlide style={{height:"360px"}} >
            <Card id="card2" style={{
            borderRadius:"15px",
            marginTop:"10px",
            margin:"10px auto auto auto"}}>
            <div style={{ marginLeft:"59%",marginTop:"10px", position:"absolute", width:"149px"}}>
            <Label  color="teal" tag>
              Junio 11, 2022
            </Label>
            </div>
            <img id="preg2" src={qatarbanner} />
            
            <b id="titulares"><strong>Qatar 2022: Conoce sobre al país de los turbantes</strong></b>
            <NavLink to="/Blog/Qatar-2022-pais-de-los-turbantes">
            <Button circular style={{color:"white",borderRadius:"20px",width:"100px", margin:"10px auto auto auto",backgroundColor:"#76227e", display:"flex"}} animated="fade">
                <Button.Content visible style={{marginLeft:"28px"}}>Leer</Button.Content>
                <Button.Content hidden>
                  <Icon name='book' />
                </Button.Content>
            </Button>
            </NavLink>
            </Card>
        </SwiperSlide>

          <SwiperSlide style={{height:"360px"}} >
            <Card id="card2" style={{
            borderRadius:"15px",
            marginTop:"10px",
            margin:"10px auto auto auto"}}>
            <div style={{ marginLeft:"59%",marginTop:"10px", position:"absolute", width:"149px"}}>
            <Label  color="teal" tag>
              Junio 04, 2022
            </Label>
            </div>
            <img id="preg2" src={peruVsNZ} />
            
            <b id="titulares"><strong>Perú y Nueva Zelanda se vuelven a ver las caras</strong></b>
            <NavLink to="/Blog/Peru-y-Nueva-Zelanda-se-vuelven-a-ver-las-caras">
            <Button circular style={{color:"white",borderRadius:"20px",width:"100px", margin:"10px auto auto auto",backgroundColor:"#76227e", display:"flex"}} animated="fade">
                <Button.Content visible style={{marginLeft:"28px"}}>Leer</Button.Content>
                <Button.Content hidden>
                  <Icon name='book' />
                </Button.Content>
            </Button>
            </NavLink>
            </Card>
        </SwiperSlide>

        <SwiperSlide style={{height:"360px"}} >
            <Card id="card2" style={{
            borderRadius:"15px",
            marginTop:"10px",
            margin:"10px auto auto auto"}}>
            <div style={{ marginLeft:"59%",marginTop:"10px", position:"absolute", width:"149px"}}>
            <Label  color="teal" tag>
              Mayo 27, 2022
            </Label>
            </div>
            <img id="preg2" src={champions} />
            
            <b id="titulares"><strong>Liverpool vs Real Madrid: Uefa Champions League</strong></b>
            <NavLink to="/Blog/Uefa-Champions-League">
            <Button circular style={{color:"white",borderRadius:"20px",width:"100px", margin:"10px auto auto auto",backgroundColor:"#76227e", display:"flex"}} animated="fade">
                <Button.Content visible style={{marginLeft:"28px"}}>Leer</Button.Content>
                <Button.Content hidden>
                  <Icon name='book' />
                </Button.Content>
            </Button>
            </NavLink>
            </Card>
        </SwiperSlide>

        <SwiperSlide style={{height:"360px"}} >
            <Card id="card2" style={{
            borderRadius:"15px",
            marginTop:"10px",
            margin:"10px auto auto auto"}}>
            <div style={{ marginLeft:"59%",marginTop:"10px", position:"absolute", width:"149px"}}>
            <Label  color="teal" tag>
              Mayo 20, 2022
            </Label>
            </div>
            <img id="preg2" src={Evo} />
            
            <b id="titulares">EVO CHAMPIONSHIP, el mundial de los juegos de lucha</b>
            <NavLink to="/Blog/Evo-Championship-el-mundial-de-los-juegos-de-lucha">
            <Button circular style={{color:"white",borderRadius:"20px",width:"100px", margin:"-8px auto auto auto",backgroundColor:"#76227e", display:"flex"}} animated="fade">
                <Button.Content visible style={{marginLeft:"28px"}}>Leer</Button.Content>
                <Button.Content hidden>
                  <Icon name='book' />
                </Button.Content>
            </Button>
            </NavLink>
            </Card>
        </SwiperSlide>

        <SwiperSlide style={{height:"360px"}} >
            <Card id="card2" style={{
            borderRadius:"15px",
            marginTop:"10px",
            margin:"10px auto auto auto"}}>
            <div style={{ marginLeft:"59%",marginTop:"10px", position:"absolute", width:"149px"}}>
            <Label  color="teal" tag>
              Abril 30, 2022
            </Label>
            </div>
            <img id="preg2" src={RegalosTec} />
            
            <b id="titulares">Los mejores regalos tecnológicos para mamá</b>
            <NavLink to="/Blog/Mejores-Regalos-tecnologicos-para-mama">
            <Button circular style={{color:"white",borderRadius:"20px",width:"100px", margin:"3px auto auto auto",backgroundColor:"#76227e", display:"flex"}} animated="fade">
                <Button.Content visible style={{marginLeft:"28px"}}>Leer</Button.Content>
                <Button.Content hidden>
                  <Icon name='book' />
                </Button.Content>
            </Button>
            </NavLink>
              
            </Card>
        </SwiperSlide>
        <SwiperSlide style={{height:"360px"}} >
            <Card id="card2" style={{
            borderRadius:"15px",
            marginTop:"10px",
            margin:"10px auto auto auto"}}>
            <div style={{ marginLeft:"59%",marginTop:"10px", position:"absolute", width:"149px"}}>
            <Label color='teal'   tag>
              Abril 15, 2022
            </Label>
            </div>
            <img id="preg2" src={PeliculasSS} />
            
            <b id="titulares">Las Mejores Peliculas para esta Semana Santa</b>
            <NavLink to="/2022/04/15/las-mejores-peliculas-para-esta-semana-santa/">
            <Button circular style={{color:"white",borderRadius:"20px",width:"100px", margin:"3px auto auto auto",backgroundColor:"#76227e", display:"flex"}} animated="fade">
                <Button.Content visible style={{marginLeft:"28px"}}>Leer</Button.Content>
                <Button.Content hidden>
                  <Icon name='book' />
                </Button.Content>
            </Button>
            </NavLink>
            
              
            </Card>
        </SwiperSlide>
        <SwiperSlide style={{height:"360px"}} >
            <Card id="card2" style={{
            borderRadius:"15px",
            marginTop:"10px",
            margin:"10px auto auto auto"}}>
            <div style={{ marginLeft:"49%",marginTop:"10px", position:"absolute", width:"160px"}}>
            <Label color='teal' tag>
              Diciembre 27, 2022
            </Label>
            </div>
            <img id="preg2" src={Mesh} />
            
            <b id="titulares">Las redes Wifi-Mesh, una solución de conexión en grandes espacios</b>
            <NavLink to="/2021/12/27/wifimesh/">
            <Button circular style={{color:"white",borderRadius:"20px",width:"100px", margin:"-2px auto auto auto",backgroundColor:"#76227e", display:"flex"}} animated="fade">
                <Button.Content visible style={{marginLeft:"28px"}}>Leer</Button.Content>
                <Button.Content hidden>
                  <Icon name='book' />
                </Button.Content>
            </Button>
            </NavLink>
            
              
            </Card>
        </SwiperSlide>
        <SwiperSlide style={{height:"360px"}} >
            <Card id="card2" style={{
            borderRadius:"15px",
            marginTop:"10px",
            margin:"10px auto auto auto"}}>
            <div style={{ marginLeft:"54%",marginTop:"10px", position:"absolute", width:"149px"}}>
            <Label color='teal' tag>
              Febrero 14, 2022
            </Label>
            </div>
            <img id="preg2" src={sanV} />
            
            <b id="titulares">Las 5 películas que Wasi te recomienda en este San Valentín</b>
            <NavLink to="/2022/02/14/wasi-san-valentin/">
            <Button circular style={{color:"white",borderRadius:"20px",width:"100px", margin:"-2px auto auto auto",backgroundColor:"#76227e", display:"flex"}} animated="fade">
                <Button.Content visible style={{marginLeft:"28px"}}>Leer</Button.Content>
                <Button.Content hidden>
                  <Icon name='book' />
                </Button.Content>
            </Button>
            </NavLink>
            
              
            </Card>
        </SwiperSlide>

        <SwiperSlide style={{height:"360px"}} >
            <Card id="card2" style={{
            borderRadius:"15px",
            marginTop:"10px",
            margin:"10px auto auto auto"}}>
            <div style={{ marginLeft:"59%",marginTop:"10px", position:"absolute", width:"149px"}}>
            <Label color='teal' tag>
              Julio 12, 2021
            </Label>
            </div>
            <img id="preg2" src={ffthVS} />
            <br/>
            <b id="titulares" style={{margin:"auto"}}>FFTH VS HFC ¿Cuál es mejor?</b>
            <NavLink to="/2021/07/12/ffth-vs-hfc-cual-es-el-mejor/">
            <Button circular style={{color:"white",borderRadius:"20px",width:"100px", margin:"18px auto 11px auto",backgroundColor:"#76227e", display:"flex"}} animated="fade">
                <Button.Content visible style={{marginLeft:"28px"}}>Leer</Button.Content>
                <Button.Content hidden>
                  <Icon name='book' />
                </Button.Content>
            </Button>
            </NavLink>
            
              
            </Card>
        </SwiperSlide>
        
        <SwiperSlide style={{height:"360px"}} >
            <Card id="card2" style={{
            borderRadius:"15px",
            marginTop:"10px",
            margin:"10px auto auto auto"}}>
            <div style={{ marginLeft:"59%",marginTop:"10px", position:"absolute", width:"149px"}}>
            <Label color='teal' tag>
              Marzo 8, 2022
            </Label>
            </div>
            <img id="preg2" src={HistoriasMujer} />
            
            <b id="titulares">5 películas imperdibles para este día internacional de la mujer</b>
            <NavLink to="/Blog/5-peliculas-imperdibles-para-este-dia-internacional-de-la-mujer">
            <Button circular style={{color:"white",borderRadius:"20px",width:"100px", margin:"-2px auto auto auto",backgroundColor:"#76227e", display:"flex"}} animated="fade">
                <Button.Content visible style={{marginLeft:"28px"}}>Leer</Button.Content>
                <Button.Content hidden>
                  <Icon name='book' />
                </Button.Content>
            </Button>
            </NavLink>
            
              
            </Card>
        </SwiperSlide>

        <SwiperSlide style={{height:"360px"}} >
            <Card id="card2" style={{
            borderRadius:"15px",
            marginTop:"10px",
            margin:"10px auto auto auto"}}>
            <div style={{ marginLeft:"61%",marginTop:"10px", position:"absolute", width:"149px"}}>
            <Label style={{backgroundColor:"#7cbfd4"}} color='teal' tag>
              Abril 9, 2022
            </Label>
            </div>
            <img id="preg2" src={ComidasSS} />
            
            <b id="titulares">¿Comida santa? Los mejores platos para disfrutar en esta semana santa</b>
            <NavLink to="/2022/04/09/platos-semana-santa/">
            <Button circular style={{color:"white",borderRadius:"20px",width:"100px", margin:"-2px auto auto auto",backgroundColor:"#76227e", display:"flex"}} animated="fade">
                <Button.Content visible style={{marginLeft:"28px"}}>Leer</Button.Content>
                <Button.Content hidden>
                  <Icon name='book' />
                </Button.Content>
            </Button>
            </NavLink>
            
              
            </Card>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
