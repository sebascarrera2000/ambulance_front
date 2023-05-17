import './dispatch.css';
import { Navbar } from '../Navbar';
import { Footer } from '../footer';
const About = () => {
    return (
    
        <div className='dispatch'>
            <Navbar></Navbar>
        <div className="ambulancemodule">
          <h1 className='titulos'>Ambulancias</h1>
            <div className="ambulanceinfo">
                <p className='matriculas'>🚑 RCJ-653</p>
                <p className='nombres'> Juan Sebastian | Juliana Santacruz</p>
                <p>Disponible</p>           
                <div className='circulo'></div>     
            </div>
            <div className="ambulanceinfo">
                <p className='matriculas'>🚑 RSG-635</p>
                <p className='nombres'> Marcial Giner | Candido Anton</p>
                <p>Disponible</p>           
                <div className='circulo'></div>     
            </div>
            <div className="ambulanceinfo">
                <p className='matriculas'>🚑 GDH-356</p>
                <p className='nombres'> Laila Parrilla | Mara Calvo</p>
                <p>Disponible</p>           
                <div className='circulo'></div>     
            </div>
            <div className="ambulanceinfo">
                <p className='matriculas'>🚑 FRD-525</p>
                <p className='nombres'> Celia Davila | Daniel Barros</p>
                <p>Emergencia #11</p>           
                <div className='circuloR'></div>     
            </div>
              <h1 className='titulos' >Urgencias Guradadas</h1>
              <div className='bloqueUrgencia'>
                <p>#5665565</p>
              </div>
        </div>
         <div className="form">
          <div className='infoEmergencia'>
          <p className='numero'>#4555</p>
          <p className='numero'> Operador | Juan Sebastian</p>
          <p className='numero' > 19/02/2023- 12:30</p>
          </div>
           <h1>🚨 Emergencia 🚨</h1> 
          <form action="/enviar-mensaje" method="POST">
          <label for="nombre">Nombre LLamada:</label><br />
          <input type="text" id="nombre" name="nombre" /><br />
          <label for="nombre">Nombre Paciente:</label><br />
          <input type="text" id="nombre" name="nombre" /><br />
          <label for="email">Celular:</label><br />
          <input type="text" id="email" name="email" /><br />
          <label for="mensaje">Situacion:</label><br />
          <textarea id="mensaje" name="mensaje"></textarea><br />
          <label for="mensaje">Dirrecion:</label><br />
          <textarea id="mensaje" name="mensaje"></textarea><br />
          <input type="submit" value="Guardar Urgencia" />
        </form> 
        </div>
        <Footer></Footer>
    </div>
    )
};

export { About };