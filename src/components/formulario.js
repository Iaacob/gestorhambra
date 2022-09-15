import React, { useState } from "react";

function Formulario({agregarCita}) {
    const datos = ["nombreMascota", "nombreDueño", "fecha", "hora", "sintomas"];
    const [citaForm, setCitaForm] = useState({
        nombreMascota: "",
        nombreDueño: "",
        fecha: "",
        hora: "",
        sintomas: ""
    })    

    const [error,setError] = useState(false);

    const handleChange = (e) => {
        setCitaForm({
            ...citaForm, 
            [e.target.name]:e.target.value            
        });
    }
    
    const sumarCita = (e) => {
        e.preventDefault();

        //hacer validacion
        if(citaForm.nombreMascota==='' || citaForm.nombreDueño==='' || citaForm.fecha==='' || citaForm.hora==='' || citaForm.sintomas===''){
            setError(true)
            return;
        }

        setError(false)

        agregarCita(citaForm);
    }

    console.log(citaForm)

    return (
        
        <form onSubmit={sumarCita}>
            {error && <div className="alerta-error">Debe completar todos los campos</div> }
            <label>nombre de la mascota:</label>
            <input type="text" name="nombreMascota" className="u-full-width" placeholder="Nombre Mascota" onChange={handleChange} />
            <label>nombre del dueño:</label>
            <input type="text" name="nombreDueño" className="u-full-width" placeholder="Nombre del dueño" onChange={handleChange} />
            <label>fecha:</label>
            <input type="date" name="fecha" className="u-full-width" onChange={handleChange} />
            <label>hora:</label>
            <input type="time" name="hora" className="u-full-width" onChange={handleChange} />
            <label>Síntomas:</label>
            <textarea name="sintomas" className="u-full-width" onChange={handleChange}></textarea>                
            <button className="u-full-width button-primary" type="submit">Agregar Cita</button>
        </form>        
    )
}
export default Formulario;
