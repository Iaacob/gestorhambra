import './App.css';
import {React, useState} from 'react';
import Formulario from './components/formulario.js';
import Citas from './components/citas.js';


function App() {
  const [citas, setCitas] = useState([])
  const agregarCita = (cita) => {
    let newCitas = [];
    Citas.map(
      (c) => {newCitas.push(c)}
    )
    newCitas.push (cita)
    setCitas(newCitas)
  }

  const eliminarCita = (index) => {
    let newCitas = [];
    Citas.map(
      (c) => {newCitas.push(c)}
    )
    newCitas.slice(index,1)
    setCitas(newCitas)
  }

  return (
    <div className="App">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className='col-md-6'>
            <h2>CREAR CITA</h2>
            <Formulario agregarCita={agregarCita}/>
          </div>
          <div className='col-md-6'>
           <h2>ADMINISTRA TUS CITAS</h2>
            <Citas citas={citas} eliminarCita={eliminarCita}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
