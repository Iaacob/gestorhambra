import React from 'react'

const Carta=(props)=> {



  return (
    <>
        <h2>ADMINISTRA TUS CITAS</h2>
          <div className="card carta">
              <div className="card-body">
              <h6>Citas</h6>
              <p className="card-text">Mascota: <span>asdfs</span> </p>
              <p className="card-text">Dueño: <span>nombre</span> </p>
              <p className="card-text">Fecha: <span>nombre</span> </p>
              <p className="card-text">Hora: <span>nombre</span> </p>
              <p className="card-text">Síntomas: <span>nombre</span> </p>
              </div>
              <div className='row justify-content-center'>
              <button type="button" class="btn btn-light info boton-eliminar">Eliminar X</button>
              </div>
        </div>
    </>
  )
}

export default Carta;