import React from "react";
import Carta from './carta';
import '../App.css';

export default function Citas(props){
    return (
        <>
        <h2>Citas</h2>
        {props.citas.map(
            (cita, index) => <Carta cita={cita} index={index} eliminarCita={props.eliminarCita}/>
        )}
        </>
    )
}