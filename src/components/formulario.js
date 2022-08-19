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

    return (

        <div className="container">
            <div className="row estructura">
                <div className="col-6">
                    <form onSubmit={handleSubmit}>
                        <label>nombre de la mascota</label>
                        <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" value={citaForm.nombreMascota}></input>
                        <label>nombre del dueño</label>
                        <input type="text" name="dueño" class="u-full-width" placeholder="Nombre del dueño" value={citaForm.nombreDueño}></input>
                        <label>fecha</label>
                        <input type="date" name="fecha" class="u-full-width" value={citaForm.fecha}></input>
                        <label>hora</label>
                        <input type="time" name="hora" class="u-full-width" value={citaForm.hora}></input>
                        <label>Síntomas</label>
                        <textarea name="sintomas" class="u-full-width" value={citaForm.sintomas}></textarea>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Formulario;
