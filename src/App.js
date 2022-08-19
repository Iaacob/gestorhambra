import './App.css';
import React from 'react';
import Formulario from './components/formulario';
import Carta from './components/carta';


function App() {
  return (
    <div className="App">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className='col-md-6'>
            <h2>CREAR CITA</h2>
            <Formulario/>
          </div>
          <div className='col-md-6'>
           <h2>ADMINISTRA TUS CITAS</h2>
            <Carta/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
