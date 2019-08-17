import React from 'react';

const Cita = ({cita}) =>  ( 
    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">{cita.mascota}</h3>
            <p className="card-text"><span>Dueño Mascota: </span> {cita.propietario}</p>
            <p className="card-text"><span>Fecha: </span> {cita.fecha}</p>
            <p className="card-text"><span>Hora: </span> {cita.hora}</p>
            <p className="card-text"><span>Síntomas: </span> </p>
            <p className="card-text">{cita.síntomas}</p>
        </div>

    </div>
 );

 
export default Cita;