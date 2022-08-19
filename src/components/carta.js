import React from 'react'
import '../App.css';

const Carta = (props) => {

  return (
    <>
      <div className="cita">
        <div className="card-body">
          <h3>Citas</h3>
          <p className="card-text">Mascota: <span>nombreMascota</span> </p>
          <p className="card-text">Dueño: <span>nombreDueño</span> </p>
          <p className="card-text">Fecha: <span>fecha</span> </p>
          <p className="card-text">Hora: <span>hora</span> </p>
          <p className="card-text">Síntomas: <span>sintomas</span> </p>
        </div>
        <div className='row justify-content-center'>
          <button type="button" class="btn btn-light info boton-eliminar">Eliminar cita</button>
        </div>
      </div>
    </>
  )
}

export default Carta;