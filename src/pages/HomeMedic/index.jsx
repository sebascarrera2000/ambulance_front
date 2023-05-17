import './homemedic.css';
import { Navbar } from '../Navbar';
import { Footer } from '../footer';

const HomeMedic = () => {
    return (
    
        <div className='dispatch'>
            <Navbar></Navbar>
        <div className="ambulancemodule">
          <h1 className='titulos'>Ambulancias Guardadas</h1>
            <div className="ambulanceinfo">
                <p className='matriculas'>🚑 RCJ-653</p>
                <p className='nombres'> Juan Sebastian | Juliana Santacruz</p>
                <p>Disponible</p>           
                <div className='circulo'></div>     
            </div>
        </div>
         <div className="form">
          <div className='infoEmergencia'>
          <p className='numero'>Modulo Ambulancias</p>
          </div>
           <h1>➕ Agregar Ambulancias ➕</h1> 
          <form action="/agregarambulancia" method="POST">
          <label for="nombre">Placa Ambulancia:</label><br />
          <input type="text" id="placa" name="placa"/><br />
          <label for="nombre">Tipo Ambulancia:</label><br />
          <select>
            <option  selected>Escoge un tipo</option>
            <option value="1">Ambulancia TNA individual</option>
            <option value="2">Ambulancia TNA colectivo</option>
            <option value="3">Ambulancia asistencial SVB</option>
            <option value="4">Ambulancia asistencial SVA</option>
            <option value="5">Ambulancia basica Covid 19</option>
            <option value="6">Ambulancia Medicalizada Covid 19</option>
         </select><br/>
          <input type="submit" value="Guardar 🚑 " />
        </form> 
        </div>
        <Footer></Footer>
    </div>
    )
};

export { HomeMedic };