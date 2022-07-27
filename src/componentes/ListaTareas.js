import React from "react";
import Tarea from "./Tarea";

const ListaTareas = ({tareas}) => {
    return (

        <ul className="Lista-tareas">
            {
            tareas.length > 0 ? tareas.map= ((tarea)=> {
                return 
                <Tarea 
                        key={tarea.id}
                        tarea={tarea}
                />
            })
            : <div className="lista-tareas__mensaje">
                ..No hay tareas agregadas..
            </div>
        }
        </ul>
    );
}

export default ListaTareas;