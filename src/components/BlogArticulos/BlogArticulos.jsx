import React from 'react'
import { Card, Grid} from 'semantic-ui-react'
import PeliculasSS from "./images/PeliculasSS.jpeg"

import Mesh from "./images/Mesh.jpg"
import sanV from "./images/sanV.jpg"
import ffthVS from "./images/ffthVS.jpg"
import ComidasSS from "./images/ComidasSS.jpeg"
import HistoriasMujer from "./images/HistoriasMujer.png"
import Evo from "./images/Evo.png"
import champions from "./images/champions.jpg"
import peruVsNZ from "./images/peruVsNZ.jpg"
import qatarbanner from "./images/qatarbanner.jpg"


import "./stylesB.css"

const BlogArticulos = () => {
  return (
    <>
    
        <Card  style={{display:"flex",alignItems:"center",boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.2)",border:"1px solid white",width:"80%", margin:"100px auto"}}>
        <Card href='Blog/Qatar-2022-pais-de-los-turbantes'
  link style={{border:"1px solid #76227e",margin:"30px 2% 0px 2%",width:"95%",minHeight:"320px"}}>
          <Grid doubling columns={2}   >

            <Grid.Row  >

            <Grid.Column >
              <div >
              <img style={{
                width:"70%", 
                borderRadius:"10px",
                display:"flex", 
                margin:"20px auto -50px auto"}}
                src={qatarbanner} />
              </div>
            </Grid.Column>  
             
            <Grid.Column> 
            <div style={{color:"#00267d", marginTop:"50px", marginRight:"3%", marginBottom:"10%", marginLeft:"3%"}}>
              <p  style={{fontSize:"30px"}}>
              <b id='cabeceras'> 
              <strong>Qatar 2022: conoce sobre al país de los turbantes que es gobernada por una dinastía de 150 años</strong> 
              </b>
              </p>
              <div style={{fontSize:"20px", color:"black"}}>
              <strong>Conozcamos juntos el país que, si triunfamos el lunes, podría cantar nuestro himno peruano en diciembre bajo el sol abrazador del cielo árabe.</strong></div>
            </div>
            </Grid.Column>

            </Grid.Row>
            </Grid>
          </Card>

        <Card href='Blog/Peru-y-Nueva-Zelanda-se-vuelven-a-ver-las-caras'
  link style={{border:"1px solid #76227e",margin:"30px 2% 0px 2%",width:"95%",minHeight:"320px"}}>
          <Grid doubling columns={2}   >

            <Grid.Row  >

            <Grid.Column >
              <div >
              <img style={{
                width:"70%", 
                borderRadius:"10px",
                display:"flex", 
                margin:"20px auto -50px auto"}}
                src={peruVsNZ} />
              </div>
            </Grid.Column>  
             
            <Grid.Column> 
            <div style={{color:"#00267d", marginTop:"50px", marginRight:"3%", marginBottom:"10%", marginLeft:"3%"}}>
              <p  style={{fontSize:"30px"}}>
              <b id='cabeceras'> 
              <strong>El encuentro entre viejos conocidos, Perú y Nueva Zelanda se vuelven a ver las caras</strong> 
              </b>
              </p>
              <div style={{fontSize:"20px", color:"black"}}>
              <b>“Rómpelo, Cueva, rómpelo” aún resuena en nuestra memoria de aquel 15 de noviembre de 2017, donde la selección volvía a una cita mundialista luego de 36 años. </b>Nueva Zelanda y Perú se miden en Barcelona este domingo con miras al repechaje de <strong>Qatar 2022</strong>. </div>
            </div>
            </Grid.Column>

            </Grid.Row>
            </Grid>
          </Card> 
        
        
        <Card href='Blog/Uefa-Champions-League'
  link style={{border:"1px solid #76227e",margin:"30px 2% 0px 2%",width:"95%",minHeight:"320px"}}>
          <Grid doubling columns={2}   >

            <Grid.Row  >

            <Grid.Column >
              <div >
              <img style={{
                width:"70%", 
                borderRadius:"10px",
                display:"flex", 
                margin:"20px auto -50px auto"}}
                src={champions} />
              </div>
            </Grid.Column>  
             
            <Grid.Column> 
            <div style={{color:"#00267d", marginTop:"50px", marginRight:"3%", marginBottom:"10%", marginLeft:"3%"}}>
              <p  style={{fontSize:"30px"}}>
              <b id='cabeceras'> 
              <strong>Liverpool vs Real Madrid:</strong> Todo lo que debemos saber antes de la final de la Uefa Champions League
              </b>
              </p>
              <div style={{fontSize:"20px", color:"black"}}>
              No somos españoles, ni ingleses, pero por al menos 90 minutos, logramos convertirnos en uno de ellos para alentar en la final de la <strong>Uefa Champions League.</strong></div>
            </div>
            </Grid.Column>

            </Grid.Row>
            </Grid>
          </Card> 
        
        <Card href='Blog/Evo-Championship-el-mundial-de-los-juegos-de-lucha'
  link style={{border:"1px solid #76227e",margin:"30px 2% 0px 2%",width:"95%",minHeight:"320px"}}>
          <Grid doubling columns={2}   >

            <Grid.Row  >

            <Grid.Column >
              <div >
              <img style={{
                width:"70%", 
                borderRadius:"10px",
                display:"flex", 
                margin:"20px auto -50px auto"}}
                src={Evo} />
              </div>
            </Grid.Column>  
             
            <Grid.Column> 
            <div style={{color:"#00267d", marginTop:"50px", marginRight:"3%", marginBottom:"10%", marginLeft:"3%"}}>
              <p  style={{fontSize:"30px"}}>
              <b id='cabeceras'> 
              EVO CHAMPIONSHIP, el mundial de los juegos de lucha
              </b>
              </p>
              <div style={{fontSize:"20px", color:"black"}}>
              El primer viernes de agosto, de cada año, millones de gamers se juntan para apreciar su propio mundial que reúne a los mejores representantes de diversos países. Señores, hoy les presentaremos el <strong>EVO CHAMPIONSCHIP.</strong></div>
            </div>
            </Grid.Column>

            </Grid.Row>
            </Grid>
          </Card>  
        <Card href='/2022/04/15/las-mejores-peliculas-para-esta-semana-santa/'
  link style={{border:"1px solid #76227e",margin:"50px 2%",width:"95%",minHeight:"320px"}}>
          <Grid doubling columns={2}   >

            <Grid.Row  >

            <Grid.Column >
              <div >
              <img style={{
                width:"70%", 
                borderRadius:"10px",
                display:"flex", 
                margin:"20px auto -50px auto"}}
                src={PeliculasSS} />
              </div>
            </Grid.Column>  
             
            <Grid.Column> 
            <div style={{color:"#00267d", marginTop:"50px", marginRight:"3%", marginBottom:"10%", marginLeft:"3%"}}>
              <p id='cabeceras' style={{fontSize:"30px"}}>
              <b> 
              Las mejores peliculas para esta Semana Santa
              </b>
              </p>
              <div style={{fontSize:"20px", color:"black"}}>
              Ya en semana santa, aprovechando el feriado, muchos optamos por viajar con la familia, pero otros, más fieles a las tradiciones familiares, pasamos viendo una película a fin de afianzar más y recordar nuestra fe. No obstante, ¿Qué podemos ver?
              </div>
            </div>
            </Grid.Column>

            </Grid.Row>
            </Grid>
          </Card>


          <Card href='/2021/12/27/wifimesh/'
  link style={{border:"1px solid #76227e",margin:"0px 2% 40px 2%",width:"95%",minHeight:"320px"}}>
          <Grid doubling columns={2}   >

            <Grid.Row  >

            <Grid.Column >
              <div >
              <img style={{
                width:"70%", 
                borderRadius:"10px",
                display:"flex", 
                margin:"20px auto -50px auto"}}
                src={Mesh} />
              </div>
            </Grid.Column>  
             
            <Grid.Column> 
            <div style={{color:"#00267d", marginTop:"50px", marginRight:"3%", marginBottom:"10%", marginLeft:"3%"}}>
              <p id='cabeceras' style={{fontSize:"30px"}}>
              <b> 
              Las redes Wifi-Mesh, una solución de conexión en grandes espacios
              </b>
              </p>
              <div style={{fontSize:"20px", color:"black"}}>
              ¿Quién no ha pasado momentos molestos debido al alcance promedio de una red wifi? Creo que todos. Precisamente para este problema es que, hoy hablaremos sobre los dispositivos Mesh.
              </div>
            </div>
            </Grid.Column>

            </Grid.Row>
            </Grid>
          </Card>

          <Card href='/2022/02/14/wasi-san-valentin/'
  link style={{border:"1px solid #76227e",margin:"0px 2% 40px 2%",width:"95%",minHeight:"320px"}}>
          <Grid doubling columns={2}   >

            <Grid.Row  >

            <Grid.Column >
              <div >
              <img style={{
                width:"70%", 
                borderRadius:"10px",
                display:"flex", 
                margin:"20px auto -50px auto"}}
                src={sanV} />
              </div>
            </Grid.Column>  
             
            <Grid.Column> 
            <div style={{color:"#00267d", marginTop:"50px", marginRight:"3%", marginBottom:"10%", marginLeft:"3%"}}>
              <p id='cabeceras' style={{fontSize:"30px"}}>
              <b> 
              Las 5 películas que Wasi te recomienda en este San Valentín              </b>
              </p>
              <div style={{fontSize:"20px", color:"black"}}>
              El día del amor está cada vez más cerca, en consecuencia, buscamos inspirarnos un poco. Por eso, Wasi te brindará una
lista de las mejores películas románticas que no deben faltar en nuestra sala de casa.</div>
            </div>
            </Grid.Column>

            

            </Grid.Row>
            </Grid>
          </Card>


          <Card href='/2021/07/12/ffth-vs-hfc-cual-es-el-mejor/'
  link style={{border:"1px solid #76227e",margin:"0px 2% 40px 2%",width:"95%",minHeight:"320px"}}>
          <Grid doubling columns={2}   >

            <Grid.Row  >

            <Grid.Column >
              <div >
              <img style={{
                width:"70%", 
                borderRadius:"10px",
                display:"flex", 
                margin:"20px auto -50px auto"}}
                src={ffthVS} />
              </div>
            </Grid.Column>  
             
            <Grid.Column> 
            <div style={{color:"#00267d", marginTop:"50px", marginRight:"3%", marginBottom:"10%", marginLeft:"3%"}}>
              <p id='cabeceras' style={{fontSize:"30px"}}>
              <b> 
              FFTH VS HFC ¿Cuál es mejor?          </b>
              </p>
              <div style={{fontSize:"20px", color:"black"}}>
              Si comparamos la instalación que tenemos en nuestro edificio yla que nos realizan en nuestro hogar, las diferencias también son
evidentes. Através de un reportaje fotográfico de los dos tipos de instalaciones en detalle. En el interior de nuestro edificio, dentro
del armario o cuarto de telecomunicaciones, encontramos los diferentes elementos que dan servicio a cada vivienda.</div>
            </div>
            </Grid.Column>

            

            </Grid.Row>
            </Grid>
          </Card>

          <Card href='/Blog/5-peliculas-imperdibles-para-este-dia-internacional-de-la-mujer'
  link style={{border:"1px solid #76227e",margin:"0px 2% 40px 2%",width:"95%",minHeight:"320px"}}>
          <Grid doubling columns={2}   >

            <Grid.Row  >

            <Grid.Column >
              <div >
              <img style={{
                width:"70%", 
                borderRadius:"10px",
                display:"flex", 
                margin:"20px auto -50px auto"}}
                src={HistoriasMujer} />
              </div>
            </Grid.Column>  
             
            <Grid.Column> 
            <div style={{color:"#00267d", marginTop:"50px", marginRight:"3%", marginBottom:"10%", marginLeft:"3%"}}>
              <p id='cabeceras' style={{fontSize:"30px"}}>
              <b> 
              5 películas imperdibles para este día internacional de la mujer      </b>
              </p>
              <div style={{fontSize:"20px", color:"black"}}>
              El mundo no sería el mismo sin ellas, Albert Boadella diría: “Nazco en un mundo sin
mujeres y me muero”. En agradecimiento, o en deuda quizá, es que el cine ha rendido tributo con algunas películas con un mensaje que
reivindica la figura femenina.</div>
            </div>
            </Grid.Column>

            

            </Grid.Row>
            </Grid>
          </Card>
          
          <Card href='/2022/04/09/platos-semana-santa/'
  link style={{border:"1px solid #76227e",margin:"0px 2% 40px 2%",width:"95%",minHeight:"320px"}}>
          <Grid doubling columns={2}   >

            <Grid.Row  >

            <Grid.Column >
              <div >
              <img style={{
                width:"70%", 
                borderRadius:"10px",
                display:"flex", 
                margin:"20px auto -50px auto"}}
                src={ComidasSS} />
              </div>
            </Grid.Column>  
             
            <Grid.Column> 
            <div style={{color:"#00267d", marginTop:"50px", marginRight:"3%", marginBottom:"10%", marginLeft:"3%"}}>
              <p id='cabeceras' style={{fontSize:"30px"}}>
              <b> 
              ¿Comida santa? Los mejores platos para disfrutar en esta semana santa </b>
              </p>
              <div style={{fontSize:"20px", color:"black"}}>
              Entramos ya en semana santa, aunque tiene un sabor diferente el de este año, de a pocos volvemos a esa añorada normalidad, por eso es que el dia de hoy te recomendaremos exquisitos platos para que logres prepararte para esta semana santa junto a Wasi.</div>
            </div>
            </Grid.Column>

            

            </Grid.Row>
            </Grid>
          </Card>
          
        </Card>


        <hr/>
    </>
  )
}

export default BlogArticulos