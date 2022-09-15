import React from "react";
import Carta from './carta';

export default function Citas(props){
    return (
        <>        
        {props.citas.map(
            (cita, index) => <Carta cita={cita} index={index} eliminarCita={props.eliminarCita}/>
        )}
        </>
    )
}