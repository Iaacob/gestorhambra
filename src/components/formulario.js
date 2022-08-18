import React from "react";
import Carta from "./carta";
import '../App.css';

function Formulario() {
    return (
        <div className="container">
            <div className="row estructura">
                <div className="col-6">
                    <form onSubmit={handleSubmit}>
                        <label>nombre de la mascota</label>
                        <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" value=""></input>
                        <label>nombre del dueño</label>
                        <input type="text" name="dueño" class="u-full-width" placeholder="Nombre del dueño" value=""></input>
                        <label>fecha</label>
                        <input type="date" name="fecha" class="u-full-width" value=""></input>
                        <label>hora</label>
                        <input type="time" name="hora" class="u-full-width" value=""></input>
                        <label>Síntomas</label>
                        <textarea name="sintomas" class="u-full-width"></textarea>
                    </form>
                </div>
                <div className="col-6">
                    <Carta />
                </div>
            </div>
        </div>
    )
}
export default Formulario;
