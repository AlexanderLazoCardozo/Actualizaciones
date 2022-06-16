import React, {useState} from 'react'
import './pdfstyle.css';
import ReactToPdf from 'react-to-pdf';
import wasiLogo from "./wasiLogo.png"
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

const PdfPostVenta = () => {
    
	const [mostrar, setMostrar] = useState(true);

    
    const [open, setOpen] = React.useState(false)

    const ref = React.createRef();

    const showContent= (event) =>{
        const element = document.getElementById("content");
        if (event.target.checked) {
            element.style.display='block';
        }
        else {
            element.style.display='none';
        }
    }

    const options = {
        orientation: 'portrait',
        unit: 'in',
        format: [13,10]
    };
    return (
    <div>
        <hr/><br/><br/>
        
        <div  ref={ref} className='contenedor'>
            <div style={{display:"flex"}}>
                <div style={{width:"70%"}}>
                    <img style={{width:"100px",margin:"15px 35px"}} src={wasiLogo}/>
                </div>
                <div style={{marginTop:"15px",height:"40px",padding:"10px",width:"200px",backgroundColor:"rgb(163, 163, 163)"}}>
                    Fecha Solicitud 31/05/2022
                </div>
            </div>
            <div className='cabecera'><b>DATOS CLIENTE</b></div>
            <div className='datosC'>

                <div className='filas'>
                    <div style={{width:"69%"}}>
                        <label>Nombres:&nbsp; </label>
                        <input id='checkbox1' style={{width:"80%"}} placeholder='Raúl Roberto Fernandez Caro' />
                    </div>

                    <label>Código Cliente:&nbsp;&nbsp; </label>
                    <input style={{width:"100px"}} placeholder='CLI0806'/>
                </div>



                <div className='filas'>
                    <div  style={{width:"57%"}}>
                    Tipo Doc: 
                    
                    <label className='tipoDoc'>
                    <input type="checkbox"></input>
                    &nbsp;<b>DNI</b>
                    </label>
                    
                    <label className='tipoDoc'>
                    <input type="checkbox"></input>
                    &nbsp;<b>CE</b>
                    </label>

                    <label className='tipoDoc'>
                    <input type="checkbox"></input>
                    &nbsp;<b>RUC</b>   
                    </label>
                    
                    </div>


                    <div>
                    <label>
                    N° Documento: &nbsp;
                    </label>

                    <input placeholder='06588424'/>
                    </div>
                </div>

                <div className='filas'>
                    <label style={{width:"100%"}}>
                        Dirección: &nbsp;
                        <input style={{width:"89%"}} placeholder='Urb. Santa Anita los flamencos 707.'/>
                    </label>
                </div>
                
            </div>

    <br/><br/>
        
        
            

        <div className='cabecera'><b>SERVICIOS POSTVENTA</b></div>
        <div className='datosR'>
                <div className='filasF'>
                    <div className='col'>
                        <label>
                            <input type="checkbox"/>
                            &nbsp;Upgrade
                        </label>
                    </div>
                    <div className='col'>
                        <label>
                            <input type="checkbox"/>
                            &nbsp;Traslado Interno
                        </label>
                    </div>
                    <div className='col'>
                        <label>
                            <input type="checkbox"/>
                            &nbsp;Cambio Titular
                        </label>
                    </div>
                    <div className='col'>
                        <label>
                            <input type="checkbox"/>
                            &nbsp;Compra Mesh
                        </label>
                    </div>
                </div>

                <div className='filasF'>
                    <div className='col'>
                        <label>
                            <input  type="button"/>
                            &nbsp;Downgrade
                        </label>
                    </div>
                    <div className='col'>
                        <label>
                            <input type="checkbox"/>
                            &nbsp;Traslado Externo
                        </label>
                    </div>


                    <div className='col'>
                        <label>
                            <input onChange={showContent}  type="checkbox"/>
                            &nbsp;Suspensión Temporal
                        </label>
                    </div>


                    <div className='col hidden'>
                        <label>
                            <input type="checkbox"/>
                            &nbsp;Otros
                        </label>
                    </div>
                </div>
            </div>

            <br/><br/>

            <div style={{display:"none"}} id="content">
            <div className='cabecera'>
                <b>RAZON SOLICITUD</b>
            </div>
            <div className='datosR'>
                <div className='filasF'>
                    <div className='col'>
                        <label>
                            <input type="checkbox"/>
                            &nbsp;Mudanza
                        </label>
                    </div>
                    <div className='col'>
                        <label>
                            <input type="checkbox"/>
                            &nbsp;Acondicionamiento
                        </label>
                    </div>
                    <div className='col'>
                        <label>
                            <input type="checkbox"/>
                            &nbsp;Viaje
                        </label>
                    </div>
                </div>

                <div className='filasF'>
                    <div className='col'>
                        <label>
                            <input  type="checkbox"/>
                            &nbsp;Económico
                        </label>
                    </div>
                    <div className='col'>
                        <label>
                            <input type="checkbox"/>
                            &nbsp;Ampliación
                        </label>
                    </div>
                    <div className='col'>
                        <label>
                            <input type="checkbox"/>
                            &nbsp;Otros
                        </label>
                    </div>
                </div>
            </div>
            </div>
            <br/><br/>


            <div className='cabeceraExt'><b>DETALLE SOLICITUD</b></div>
            <div className='detallesS'>
                <div>
                    A través del presente formato, hago expresa mi solicitud de servicio post venta a la empresa 
                    WASY TECHNOLOGY SAC, enterado de los tiempos de atención.
                </div>
            </div>

            <br/><br/>

        <div className='cabeceraExt'><b>OBSERVACIONES SOLICITUD</b></div>
            <div className='observacionesS'>
                <div>
                    El cliente solicita <b>UPGRADE</b>, el cual hace presenta que esta conforme 
                    con el servicio brindado. Se realizara el cambio de plan de 100Mbps. (S/.159.99 soles) a 
                    80 Mbps (S/. 85.00 soles). Se procederá con el cambio el día 01/06/2022.   
                </div>
            </div>
            <br/><br/>

            <div className='declaracion'>
                <b >
                    Declaro que la información señalada el presente documento es verdera;
                    así también manifiesto mi conformidad de los costos que mi solicitud conlleve.
                </b>
            </div>  
            
            <b className='firmaF'>Angela Jackleine Vega Pablo <br/>
                DNI: 76322446
            </b>

            
        </div>

        <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Siguiente</Button>}
        >
        <Modal.Header><div style={{fontFamily:"Poppins", fontSize:"25px", fontWeight:"500"}}>DESCARGAR, FIRMAR Y ENVIAR</div></Modal.Header>
        <Modal.Content image>
            <Modal.Description>
            <div style={{backgroundColor:"#3f2c74", color:"white", padding:"20px", borderRadius:"15px", textAlign:"center", fontSize:"30px", fontFamily:"Poppins", width:"500px", margin:"auto"}}>
                Documento completado 
            </div>
            <div style={{ textAlign:"center",fontFamily:"Poppins", margin:"20px", fontSize:"17px"}}>
            1) Proceda a descargar y firmar el documento.
            <ReactToPdf targetRef={ref} filename="ATC.pdf" options={options} x={1} y={.5} >
				{({toPdf}) => (
					<><br/>
                    <button className='descargar' onClick={toPdf}>Descargar PDF</button>
                    </>
                )}
		    </ReactToPdf>   
            </div>
            <div style={{textAlign:"center",fontFamily:"Poppins", margin:"20px", fontSize:"17px"}}>
            2) Luego de firmarlo envielo al numero de ATC Wasi.   <br/>
            <a href="https://web.whatsapp.com/" target="_blank">
            <Icon size='huge' className='icono' name='whatsapp'></Icon> 
            </a>
            </div>
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <Button
            content="Finalizar"
            labelPosition='right'
            icon='checkmark'
            onClick={() => setOpen(false)}
            positive
            />
        </Modal.Actions>
        </Modal>

        
    </div>
  )
}

export default PdfPostVenta