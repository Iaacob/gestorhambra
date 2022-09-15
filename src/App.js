import React, {useState} from 'react';
import Formulario from './components/formulario.js';
import Citas from './components/citas.js';


function App() {
  const [citas, setCitas] = useState([])
  const agregarCita = (cita) => {
    let newCitas = [];
    citas.map(
      (c) => {newCitas.push(c)}
    )
    newCitas.push (cita)
    setCitas(newCitas)
  }

  const eliminarCita = (index) => {
    let newCitas = [];
    citas.map(
      (c) => {newCitas.push(c)}
    )
    newCitas.splice(index,index+1)
    setCitas(newCitas)
  }

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>CREAR CITA</h2>
            <Formulario agregarCita={agregarCita}/>
          </div>
          <div className="one-half column">
           <h2>ADMINISTRA TUS CITAS</h2>
            <Citas citas={citas} eliminarCita={eliminarCita}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
