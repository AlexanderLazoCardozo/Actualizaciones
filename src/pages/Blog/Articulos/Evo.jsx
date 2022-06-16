import React from 'react'
import EvoBanner from "./../images/EvoBanner.png"
import { Grid, Image, Icon } from 'semantic-ui-react'
import J1 from "./../images/J1.jpg"
import J2 from "./../images/J2.jpg"
import J3 from "./../images/J3.jpg"
import J4 from "./../images/J4.jpg"
import J5 from "./../images/J5.jpg"
import J6 from "./../images/J6.png"
import J7 from "./../images/J7.jpg"
import J8 from "./../images/J8.jpg"
import { NavLink } from 'react-router-dom'
import {Helmet} from "react-helmet"
import { TabTitle } from '../../../utils/GeneralFuntions'


const Evo = () => {
  window.scrollTo(0, 0);
  TabTitle("EVO CHAMPIONSHIP - Wasi Perú")

  return (
    <>
      <Helmet>
        <title>EVO CHAMPIONSHIP - Wasi Perú</title>
        <meta name='description' content="El primer viernes de agosto, de cada año, millones de gamers se juntan para apreciar su propio mundial que reúne a los mejores representantes de diversos países. Señores, hoy les presentaremos el EVO CHAMPIONSCHIP" />
        <meta name='keywords' content='Evo Championship, Mejores Jugadores, Pelea, Lucha, Competencia' />
      </Helmet>
    <div>

      
      <p style={{paddingTop:"120px",fontSize:"40px",textAlign:"center", fontFamily:"Poppins, sans-serif", fontWeight:"400",color:"#00267d"}}>
      <strong>EVO CHAMPIONSHIP, el mundial de los juegos de lucha</strong>
      </p>
      <img  style={{
        width:"40%",
        minWidth:"400px",
        display:"flex",
        margin:" auto",
        
        }} src={EvoBanner} />

    </div>

    <div style={{margin:"auto 10%"}}>
      <br/><br/>
    <Grid doubling columns={1}  style={{width:"80%", margin:"auto"}}  >

<Grid.Column >
<p style={{fontSize:"120%", textAlign:"justify", fontFamily:"Poppins" }}>
Muchos, me incluyo, esperamos con ansias próximo mundial de futbol de Qatar 2022. Cuento el calendario y le voy restando días a fin de tomar consciencia de que el evento está cada vez más cerca, seguramente varios de nuestros lectores comparten el sentimiento. No obstante, no es lo único que espero.<b>El primer viernes de agosto, de cada año, millones de gamers se juntan para apreciar su propio mundial que reúne a los mejores representantes de diversos países.</b> Señores,<b> hoy les presentaremos el </b> <strong>EVO CHAMPIONSCHIP</strong> .
</p>
<Image  style={{margin:"0 auto", minWidth:"256px"}} src={J1} />

</Grid.Column>

</Grid>

<br/><br/>
<Grid doubling columns={2}  style={{width:"80%", margin:"auto"}}  >

<Grid.Column >
  
  <div style={{fontFamily:"Poppins",textAlign:"justify" ,fontSize:"120%"}}>
  <div style={{fontSize:"22px"}}><strong >¿Qué es el EVO CHAMPIONSHIP?</strong></div>
  <br/>

  La analogía del inicio del escrito es perfecta, pues el planeta entero de gamers de lucha se paraliza por este acontecimiento. Razón no falta, pues los jugadores no solo asisten al evento por la gloria personal, sino por el éxito que puede significar para su país. Si en el futbol Brasil y Argentina son los grandes exponentes, aquí las potencias son Japón y Estados Unidos.<br/><br/>
  <strong>La sede donde se realiza el EVO CHAMPIONSHIP es en las Vegas, Estados Unidos. </strong>El escenario es también todo un espectáculo que se destaca por la ambientación, estudio, iluminación y más. A la altura de la magnitud que representa para los gamers en el mundo. 

  </div>
</Grid.Column>

<Grid.Column >
  <br/>
  <Image style={{margin:"auto"}} src={J2} />
  
</Grid.Column>

</Grid>

<br/>
<Grid doubling columns={2}  style={{width:"80%", margin:"auto"}}  >


<Grid.Column >
  <div style={{fontSize:"20px", fontFamily:"Poppins"}}><strong >¿Quiénes juegan el EVO CHAMPIONSHIP?</strong></div>
<br/>
  <Image style={{margin:"auto"}} src={J3} />
  
</Grid.Column>
<Grid.Column >
  
  <div style={{fontFamily:"Poppins",textAlign:"justify" ,fontSize:"120%"}}>
  <br/><br/><br/>

  En lo teórico, cualquiera de nosotros podría inscribirse en el <strong>EVO</strong>, pero esta inscripción tiene un precio elevado para nuestro bolsillo. Por tal razón es que los<strong> mejores jugadores del mundo</strong>  logran asistir, gracias al auspicio de diferentes empresas mundiales como <strong>HP, Sony, MSI</strong> y otras marcas activas en la industria de los esports. 
<br /><br/>Es así que se logra reunir a los máximos referentes de cada país, tal cual fuese el “torneo del poder en Dragon Ball”.

  </div>
</Grid.Column>

</Grid>

<Grid doubling columns={1}  style={{width:"80%", margin:"auto"}}  >

<Grid.Column >
<p style={{fontSize:"120%", textAlign:"justify",fontFamily:"Poppins" }}>
  <b style={{fontSize:"140%"}}>¿Cómo se reconoce a un jugador?

</b><br/><br/>
La cantidad de los “elegidos” de cada país puede llegar, en total, incluso a miles compitiendo en una misma categoría. ¿Cómo se les reconoce? Sencillo, los jugadores tienen tres formas de identificación durante el torneo. Su país al cual representa, su auspiciador y su ID personal que, generalmente, es su nombre o su apodo dentro del universo gaming. 
</p>
<Image  style={{margin:"0 auto", minWidth:"256px"}} src={J4} />

</Grid.Column>

</Grid>
<br/><br/>
<Grid doubling columns={2}  style={{width:"80%", margin:"auto"}}  >


<Grid.Column >
  <div style={{fontSize:"20px", fontFamily:"Poppins"}}><strong >¿Qué juegos se juegan en el EVO CHAMPIONSCHIP?</strong></div>
<br/>
  <Image style={{margin:"auto"}} src={J5} />
  
</Grid.Column>
<Grid.Column >
  
  <div style={{fontFamily:"Poppins",textAlign:"justify" ,fontSize:"120%"}}>
  <br/><br/><br/><br/>

  No solo se juega un juego dentro del EVO CHAMPIONSHIP, sino que al menos 9 títulos que pertenecen a la categoría de juegos de lucha. Entre los más destacados tenemos al ya clásico <strong>TEKEN, KOF, STREET FIGHTER, DRAGON BALL FIGTHERZ, MORTAL KOMBAT</strong> y más. 
  </div>
</Grid.Column>

</Grid>
<Grid doubling columns={1}  style={{width:"80%", margin:"auto"}}  >

<Grid.Column >
<p style={{fontSize:"120%", textAlign:"justify",fontFamily:"Poppins" }}>
  <br/>
  Cabe recalcar que, los videojuegos pueden variar anualmente, por eso es que en cada evento previo se anuncian los “elegidos” para el mundial del presente año. Por ejemplo, en este 2022 los juegos seleccionados son:
  <br/><br/>1.	Dragon Ball FighterZ (tercera aparición en EVO)<br/>
2.	Granblue Fantasy: Versus (primera aparición en EVO)<br/>
3.	Guilty Gear: Strive (primera aparición en EVO)<br/>
4.	The King of Fighters XV (primera aparición en EVO)<br/>
5.	Melty Blood: Type Lumina (primera aparición en EVO)<br/>
6.	Mortal Kombat 11 Ultimate (segunda aparición en EVO)<br/>
7.	Skullgirls 2nd Encore (primera aparición en EVO)<br/>
8.	Street Fighter V: Champion Edition (quinta aparición en EVO)<br/>
9.	Tekken 7 (sexta aparición en EVO)<br/>

</p>

</Grid.Column>

</Grid>
<br/>
<Grid doubling columns={1}  style={{width:"80%", margin:"auto"}}  >

<Grid.Column >
<p style={{fontSize:"120%", textAlign:"justify",fontFamily:"Poppins" }}>
  <b style={{fontSize:"140%"}}>¿Cómo seguir el EVO CHAMPIONSHIP?

</b><br/><br/>
El evento se transmite principalmente por sus redes sociales como Twich, Facebook, Youtube. Si bien la transmisión oficial es en inglés, podemos encontrar otras opciones extraoficiales en nuestro idioma de preferencia. ¿WASI transmitirá? Es muy probable que Wasi haga una breve cobertura durante el torneo a fin de conectarnos con toda nuestra comunidad amante de los juegos virtuales. </p>
<Image  style={{margin:"0 auto", minWidth:"256px"}} src={J6} />

</Grid.Column>

</Grid>
<br/>
<Grid doubling columns={1}  style={{width:"80%", margin:"auto"}}  >

<Grid.Column >
<p style={{fontSize:"120%", textAlign:"justify",fontFamily:"Poppins" }}>
  <b style={{fontSize:"140%"}}>¿Quiénes son los mejores jugadores del EVO CHAMPIONSHIP?

</b><br/><br/>
Tal cual pasa en el futbol, en el mundo gamer también existen estrellas que año a año parten de favoritos en la competencia. Sabemos que los países asiáticos son potencia en juegos virtuales, por eso es que no es de sorprender que tenga jugadores distintivos como lo son Goichi(Japón), Daigo(Japón), kwang do(Korea). Por su parte, Norteamérica tiene referentes como Sonicfox(USA), CrisG(USA), MkLeo(México). Aunque son ellos quienes dominan el evento, Europa, por su parte parece ser la promesa de este 2022. </p>
<Image  style={{margin:"0 auto", minWidth:"256px"}} src={J7} />

</Grid.Column>

</Grid>
<br/>
<Grid doubling columns={1}  style={{width:"80%", margin:"auto"}}  >

<Grid.Column >
<p style={{fontSize:"120%", textAlign:"justify",fontFamily:"Poppins" }}>
  <b style={{fontSize:"140%"}}>¿Perú tiene representantes?

</b><br/><br/>
Si, varios jugadores peruanos han intentado llevarse la gloria en el EVO CHAMPIONSHIP, pero sin éxito alguno hasta el momento. ¿Quién llegó más lejos? El máximo logro de un compatriota a la actualidad es ser el 4to puesto en el mundo. 
</p>

</Grid.Column>

</Grid>

<Grid doubling columns={2}  style={{width:"80%", margin:"auto"}}  >

<Grid.Column >
  
  <div style={{fontFamily:"Poppins",textAlign:"justify" ,fontSize:"120%"}}>
  <br/>
  No obstante, en este tipo de eventos, el público sudamericano se unifica a fin de alentar a cualquiera de sus representantes de la región. Al momento el único ganador de esta parte del mundo fue el chileno Kaneblueriver, quien logró la máxima distinción en el año 2005 en la categoría Marvel vs Capcom.
  </div>
</Grid.Column>

<Grid.Column >
  <br/>
  <Image style={{margin:"auto"}} src={J8} />
  
</Grid.Column>

</Grid>
<br/>
<Grid doubling columns={1}  style={{width:"80%", margin:"auto"}}  >

<Grid.Column >
<p style={{fontSize:"120%", textAlign:"justify",fontFamily:"Poppins" }}>
  <b style={{fontSize:"140%"}}>Wasi con los E-sports
</b><br/><br/>
Gracias a nuestros lectores, hoy trajimos este tema a la mesa, pero no será el único referido al mundo gaming. Existen diferentes competencias que queremos visualizar, por ejemplo el The international(Dota), E-Wordl Cup(FIFA), LOL Words, Fornite Wordl cup y muchos otros videojuegos que serán tocados en Wasi.</p>

</Grid.Column>

</Grid>

<Grid doubling columns={1}  style={{width:"80%", margin:"auto"}}  >

<Grid.Column >
<p style={{fontSize:"120%", textAlign:"justify",fontFamily:"Poppins" }}>
  <b style={{fontSize:"140%"}}>¿Qué juegan nuestros lectores wasiano?
</b><br/><br/>
En Wasi, estamos interesados en qué juegos juegan nuestros lectores, quizá se habrá la posibilidad de un torneo, no lo sé. <strong>Te hacemos la invitación de comentar tu videojuego favorito con el hashtag #Mijuegofavorito. </strong>Quien escribe disfruta mucho de los juegos de competencia, por lo que<strong> #Mijuegofavorito</strong> es Dragon Ball Figther Z.</p>

</Grid.Column>

</Grid>
    




  
    </div>

    

    <div style={{marginTop:"60px",textAlign:"center", fontSize:"60px"}}>
    <NavLink to="/Blog">
    <Icon style={{color:"#66277d"}}  name='arrow alternate circle left'/>
    <b style={{color:"#66277d"}}>Volver</b>
    </NavLink><br/><br/><br/><br/>
    </div>

    
    
    </>
  )
}

export default Evo