import './App.css';
import React from 'react';
import Formulario from './components/formulario';
import Boton from './components/button';
import Carta from './components/carta';


function App() {
  return (
    <div className="App">
      <h1>ADMINISTRADOR DE PACIENTESssssss</h1>
      <div className="container">
        <div className="row">
          <div className='one-half column'>
            <h2>Crear mi Cita</h2>
            <Formulario/>
            <Boton/>

          </div>
          <div className='one-half column'>
            <Carta/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
