import React, { useState } from "react";
import '../App.css';


function Formulario() {
    const datos = ["nombreMascota", "nombreDueño", "fecha", "hora", "sintomas"];
    const [citaForm, setCitaForm] = useState({
        nombreMascota: "",
        nombreDueño: "",
        fecha: "",
        hora: "",
        sintomas: ""
    })

    const agregarDato = (dato, valor) => {
        let nuevaCita = {};
        datos.map(
            (d)=>{
                nuevaCita[d]=citaForm[d]
            }

        )
        nuevaCita[dato]=valor
        setCitaForm(nuevaCita);
    }

    const handleChange = (e) => {
        agregarDato(e.target.name, e.target.value);
    }
    
    const sumarCita =()=>{
        console.log(citaForm);
    }

    return (

        <div className="container">
            <div className="row estructura">
                <div className="flex-col col-6">
                    <div class="form">
                        <label>nombre de la mascota:</label>
                        <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" onChange={handleChange}></input>
                        <label>nombre del dueño:</label>
                        <input type="text" name="dueño" class="u-full-width" placeholder="Nombre del dueño" onChange={handleChange}></input>
                        <label>fecha:</label>
                        <input type="date" name="fecha" class="u-full-width" onChange={handleChange}></input>
                        <label>hora:</label>
                        <input type="time" name="hora" class="u-full-width" onChange={handleChange}></input>
                        <label>Síntomas:</label>
                        <textarea name="sintomas" class="u-full-width" onChange={handleChange}></textarea>
                    </div>
                    <button class="u-full-width button-primary" onClick={sumarCita}>Agregar Cita</button>
                </div>
            </div>
        </div>
    )
}
export default Formulario;
