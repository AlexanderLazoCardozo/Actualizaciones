import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import DudasFacturacion from "./images/DudasFacturacion.jpg"
import DudasLentitud from "./images/DudasLentitud.png"
import DudasPing from "./images/DudasPing.jpg"
import DudasRecibo from "./images/DudasRecibo.jpg"
import DudasRouter from "./images/DudasRouter.jpg"
import DudasContraseña from "./images/DudasContraseña.jpg"
import DudasConexion from "./images/DudasConexion.jpg"
import ParteInferior from "./images/ParteInferior.png"

import slider1UP from "./images/slider1UP.png"
import slider2UP from "./images/slider2UP.png"
import slider3UP from "./images/slider3UP.png"
import slider4UP from "./images/slider4UP.png"
import slider5UP from "./images/slider5UP.png"
import slider6UP from "./images/slider6UP.png"
import slider7UP from "./images/slider7UP.png"

import masinfo from "./images/masinfo.png"

import lentM from "./images/lentM.png"
import m1 from "./images/m1.png"
import m2 from "./images/m2.png"
import m3 from "./images/m3.png"
import m4 from "./images/m4.png"
import m5 from "./images/m5.png"
import m6 from "./images/m6.png"


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./pregStyles.css";

import { Modal, Button, Card, Image, Icon } from "semantic-ui-react";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import ModalAcordeon1 from "./Acordeon/ModalAcordeon1";
import ModalAcordeon2 from "./Acordeon/ModalAcordeon2";
import ModalAcordeon3 from "./Acordeon/ModalAcordeon3";
import ModalAcordeon4 from "./Acordeon/ModalAcordeon4";
import ModalAcordeon5 from "./Acordeon/ModalAcordeon5";
import ModalAcordeon6 from "./Acordeon/ModalAcordeon6";
import ModalAcordeon7 from "./Acordeon/ModalAcordeon7";

export default function PreguntasFrecuentes() {

  const [open1, setOpen1] = React.useState(false)
  const [open2, setOpen2] = React.useState(false)
  const [open3, setOpen3] = React.useState(false)
  const [open4, setOpen4] = React.useState(false)
  const [open5, setOpen5] = React.useState(false)
  const [open6, setOpen6] = React.useState(false)
  const [open7, setOpen7] = React.useState(false)



  return (
    <>
    <div style={{textAlign:"center", margin:"70px 0px"}}>
    <div style={{fontSize:"60px",color:"#372C70"}} >
       <b id="frecu" >PREGUNTAS FRECUENTES </b>
    </div>
    <br /><br />  

    <div id="soluciones">
     <b>Las soluciones a las dudas habituales de nuestros clientes.</b> 
    </div>

    </div> 
    <Swiper
      slidesPerView={1}
      slidesPerGroup={1}
      
      breakpoints={{
        1000: {
          slidesPerView: 2,
          spaceBetween: -150,
        },
        1600: {
          slidesPerView: 3,
          spaceBetween: -150,
        }
      }}
        loopFillGroupWithBlank={true}
        
        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper"
        style={{height:"550px"}}

        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
      }}
      >
            


      <SwiperSlide  >

        <div style={{
          borderRadius:"15px",
          margin:"2px auto auto auto",
          width:"400px"

          }}>
          <img style={{width:"100%"}} src={slider3UP} />

          <div id="preguntasF" >
            Problemas de Lentitud
          </div>

          <div id="preguntasF2" style={{margin:"5px 59px"}}>
            Inconvenientes con el servicio
          </div>

          
          <Modal
            basic
            style={{
              backgroundColor:"white", 
              borderRadius:"50px", 
              color:"black",
              padding:"45px 50px 65px"
            }}
            dimmer="default"
            onClose={() => setOpen1(false)}
            onOpen={() => setOpen1(true)}
            open={open1}
            trigger={<img id="botonInfo" src={masinfo} />}

          >
            <Modal.Content  image>
              <Modal.Description>
              <div id="preguntasF" style={{textAlign:"left"}}>
                Problemas de Lentitud
              </div>

              <div id="preguntasF2" style={{margin:"0px"}}>
                Inconvenientes con el servicio
              </div>
              <br/>
                <ModalAcordeon1 />
              </Modal.Description>
              <Image style={{display:"flex", alignItems:"center"}} size="medium" src={lentM} wrapped />

            </Modal.Content>
          </Modal>
        </div> 

        </SwiperSlide>


        <SwiperSlide  >

        <div style={{
          borderRadius:"15px",
          margin:"2px auto auto auto",
          width:"400px"

          }}>
            <img style={{width:"100%"}} src={slider2UP} />

            <div id="preguntasF" >
              Cambio de contraseña Wifi
            </div>

            <div id="preguntasF2" style={{margin:"5px 29px"}}>
              Modificaciones personalizadas
            </div>

            
            <Modal
            basic
            style={{
              backgroundColor:"white", 
              borderRadius:"50px", 
              color:"black",
              padding:"45px 50px 65px"
            }}
            dimmer="default"
            onClose={() => setOpen2(false)}
            onOpen={() => setOpen2(true)}
            open={open2}
            trigger={<img id="botonInfo" src={masinfo} />}

          >
            <Modal.Content  image>
              <Modal.Description>
              <div id="preguntasF" style={{textAlign:"left"}}>
              Cambio de contraseña Wifi
              </div>

              <div id="preguntasF2" style={{margin:"0px"}}>
              Modificaciones personalizadas
              </div>
              <br/>
                <ModalAcordeon2 />
              </Modal.Description>
              <Image style={{display:"flex", alignItems:"center"}} size="medium" src={m1} wrapped />

            </Modal.Content>
          </Modal>
          </div> 
          
          </SwiperSlide>

        <SwiperSlide  >

          <div style={{
          borderRadius:"15px",
          margin:"2px auto auto auto",
          width:"400px"

          }}>
            <img style={{width:"100%"}} src={slider1UP} />

            <div id="preguntasF" >
              Dudas con la facturación
            </div>

            <div id="preguntasF2" style={{margin:"5px 42px"}}>
              Problemas al realizar sus pagos
            </div>

            
            <Modal
            basic
            style={{
              backgroundColor:"white", 
              borderRadius:"50px", 
              color:"black",
              padding:"45px 50px 65px"
            }}
            dimmer="default"
            onClose={() => setOpen3(false)}
            onOpen={() => setOpen3(true)}
            open={open3}
            trigger={<img id="botonInfo" src={masinfo} />}

          >
            <Modal.Content  image>
              <Modal.Description>
              <div id="preguntasF" style={{textAlign:"left"}}>
              Dudas con la facturación
              </div>

              <div id="preguntasF2" style={{margin:"0px"}}>
              Problemas al realizar sus pagos
              </div>
              <br/>
                <ModalAcordeon3 />
              </Modal.Description>
              <Image style={{display:"flex", alignItems:"center"}} size="medium" src={m2} wrapped />

            </Modal.Content>
          </Modal>
          </div> 
          
          </SwiperSlide>
          
          <SwiperSlide  >

          <div style={{
          borderRadius:"15px",
          margin:"2px auto auto auto",
          width:"400px"

          }}>
            <img style={{width:"100%"}} src={slider4UP} />

            <div id="preguntasF" >
            Problemas de Conexión
            </div>

            <div id="preguntasF2" style={{margin:"5px 48px"}}>
              Modificaciones personalizades
            </div>

            
            <Modal
            basic
            style={{
              backgroundColor:"white", 
              borderRadius:"50px", 
              color:"black",
              padding:"45px 50px 65px"
            }}
            dimmer="default"
            onClose={() => setOpen4(false)}
            onOpen={() => setOpen4(true)}
            open={open4}
            trigger={<img id="botonInfo" src={masinfo} />}

          >
            <Modal.Content  image>
              <Modal.Description>
              <div id="preguntasF" style={{textAlign:"left"}}>
              Problemas de Conexión
              </div>

              <div id="preguntasF2" style={{marginLeft:"0px"}}>
              Modificaciones personalizades
              </div>
              <br/>
                <ModalAcordeon4 />
              </Modal.Description>
              <Image style={{display:"flex", alignItems:"center"}} size="medium" src={m3} wrapped />

            </Modal.Content>
          </Modal>
          </div> 
          
          </SwiperSlide>

        
          <SwiperSlide  >

            <div style={{
            borderRadius:"15px",
            margin:"2px auto auto auto",
            width:"400px"

            }}>
              <img style={{width:"100%"}} src={slider5UP} />

              <div id="preguntasF" >
              Problemas de Ping y Latencia
              </div>

              <div id="preguntasF2" style={{margin:"5px 15px"}}>
                Inconvenientes de Ping
              </div>

              
              <Modal
              basic
              style={{
                backgroundColor:"white", 
                borderRadius:"50px", 
                color:"black",
                padding:"45px 50px 65px"
              }}
              dimmer="default"
              onClose={() => setOpen5(false)}
              onOpen={() => setOpen5(true)}
              open={open5}
              trigger={<img id="botonInfo" src={masinfo} />}

            >
              <Modal.Content  image>
                <Modal.Description>
                <div id="preguntasF" style={{textAlign:"left"}}>
                Problemas de Ping y Latencia
                </div>

                <div id="preguntasF2" style={{marginLeft:"0px"}}>
                Inconvenientes de Ping
                </div>
                <br/>
                  <ModalAcordeon5 />
                </Modal.Description>
                <Image style={{display:"flex", alignItems:"center"}} size="medium" src={m4} wrapped />

              </Modal.Content>
            </Modal>
            </div> 

            </SwiperSlide> 
            <SwiperSlide  >

            <div style={{
            borderRadius:"15px",
            margin:"2px auto auto auto",
            width:"400px"

            }}>
              <img style={{width:"100%"}} src={slider6UP} />

              <div id="preguntasF" >
              Restablecer Router
              </div>

              <div id="preguntasF2" style={{margin:"5px 79px"}}>
                Modificaciones con el router
              </div>

              
              <Modal
              basic
              style={{
                backgroundColor:"white", 
                borderRadius:"50px", 
                color:"black",
                padding:"45px 50px 65px"
              }}
              dimmer="default"
              onClose={() => setOpen6(false)}
              onOpen={() => setOpen6(true)}
              open={open6}
              trigger={<img id="botonInfo" src={masinfo} />}

            >
              <Modal.Content  image>
                <Modal.Description>
                <div id="preguntasF" style={{textAlign:"left"}}>
                Restablecer Router
                </div>

                <div id="preguntasF2" style={{marginLeft:"0px"}}>
                Modificaciones con el router
                </div>
                <br/>
                  <ModalAcordeon6 />
                </Modal.Description>
                <Image style={{display:"flex", alignItems:"center"}} size="medium" src={m5} wrapped />

              </Modal.Content>
            </Modal>
            </div> 

            </SwiperSlide>    
            <SwiperSlide  >

            <div style={{
            borderRadius:"15px",
            margin:"2px auto auto auto",
            width:"400px"

            }}>
              <img style={{width:"100%"}} src={slider7UP} />

              <div id="preguntasF" >
              ¿Cómo pago mi recibo?
              </div>

              <div id="preguntasF2" style={{margin:"5px 79px"}}>
                Problemas al realizar sus pagos
              </div>

              
              <Modal
              basic
              style={{
                backgroundColor:"white", 
                borderRadius:"50px", 
                color:"black",
                padding:"45px 50px 65px"
              }}
              dimmer="default"
              onClose={() => setOpen7(false)}
              onOpen={() => setOpen7(true)}
              open={open7}
              trigger={<img id="botonInfo" src={masinfo} />}

            >
              <Modal.Content  image>
                <Modal.Description>
                <div id="preguntasF" style={{textAlign:"left"}}>
                ¿Cómo pago mi recibo?
                </div>

                <div id="preguntasF2" style={{marginLeft:"0px"}}>
                Problemas al realizar sus pagos
                </div>
                <br/>
                  <ModalAcordeon7 />
                </Modal.Description>
                <Image style={{display:"flex", alignItems:"center"}} size="medium" src={m6} wrapped />

              </Modal.Content>
            </Modal>
            </div> 

            </SwiperSlide>        
      </Swiper>
      <br/><br/><br/>
    </>
  );
}
