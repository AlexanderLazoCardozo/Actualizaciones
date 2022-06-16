import React from 'react'
import testimonioUP from "./images/testimonioUP.png"
import verVideo from "./images/verVideo.png"
import benefTest from "./images/benefTest.png"

const TestimonioUP = () => {
  return (
    <div>
      <br/><br/>
        <a target="_blank" href='https://www.youtube.com/watch?v=pwTlSejnDsE'>
        <img style={{width:"26vw",position:"absolute", marginLeft:"35vw", marginTop:"28vw"}} src={verVideo} />
        </a>
        <img style={{width:"90vw", marginLeft:"4.5vw"}} src={testimonioUP}/>

        
        <img style={{marginTop:"3vw",marginBottom:"3vw",marginLeft:"10vw",width:"80vw"}} src={benefTest}/>
        <br/><br/><br/><br/><br/>
    </div>
  )
}

export default TestimonioUP