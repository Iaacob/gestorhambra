import React, { useState } from "react";
import '../App.css';


function Formulario({handleSubmit}) {
    const [citaForm, setCitaForm] = useState({
        id: "",
        nombreMascota: "",
        nombreDueño: "",
        fecha: "",
        hora: "",
        sintomas: ""
    })

    const alert =()=>{
        console.log(citaForm);
    }

    return (

        <div className="container">
            <div className="row estructura">
                <div className="flex-col col-6">
                    <form onSubmit={handleSubmit}>
                        <label>nombre de la mascota:</label>
                        <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" onChange={(e) => setCitaForm({nombreMascota: e.value})}></input>
                        <label>nombre del dueño:</label>
                        <input type="text" name="dueño" class="u-full-width" placeholder="Nombre del dueño" onChange={(e) => setCitaForm({nombreDueño: e.value})}></input>
                        <label>fecha:</label>
                        <input type="date" name="fecha" class="u-full-width" onChange={(e) => setCitaForm({fecha: e.value})}></input>
                        <label>hora:</label>
                        <input type="time" name="hora" class="u-full-width" onChange={(e) => setCitaForm({hora: e.value})}></input>
                        <label>Síntomas:</label>
                        <textarea name="sintomas" class="u-full-width" onChange={(e) => setCitaForm({sintomas: e.value})}></textarea>
                    </form>
                    <button type="submit" class="u-full-width button-primary" onClick={alert}>Agregar Cita</button>
                </div>
            </div>
        </div>
    )
}
export default Formulario;
