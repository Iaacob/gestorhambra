import React from 'react'

export default function Cita({cita, eliminarCita, index}){
  return(
    <div className='cita'>
        <p>Mascota: <span>{cita.nombreMascota}</span></p>
        <p>Dueño: <span>{cita.nombreDueño}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Sintomas: <span>{cita.sintomas}</span></p>
      <button
        className = 'button eliminar u-full-width'
        onClick = { () => {eliminarCita(index)} }
      >Eliminar &times;</button>
    </div>
    )
};