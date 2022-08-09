import React from "react";
import Tarea from "./Tarea";

const ListaTareas = ({tareas,cambiarTareas, mostrarCompletadas}) => {
    const toggleCompletadas= (id) =>{
        cambiarTareas(tareas.map((tarea) => {
            if (tarea.id === id) {
        return {...tarea,completadas: ! tarea.completadas}
    }
    return tareas;
    }));
}
    const editarTarea= (id) =>{
        cambiarTareas(tareas.map((tarea) => {
            if (tarea.id === id) {
        return {...tarea,completadas: ! tarea.completadas}
    }
    return tareas;
    }));
}
const borrarTarea = (id) => {
    cambiarTareas(tareas.filter((tarea) => {
        if(tarea.id !== id) {
        return tarea;
        }
        return;
    }));
}
    return ( 
            <ul className="Lista-tareas">
            {
            tareas.length > 0 ? tareas.map=((tarea)=> {
                if (mostrarCompletadas) {
                return  <Tarea 
                        key={tarea.id}
                        tarea={tarea}
                        toggleCompletadas = {toggleCompletadas}
                        editarTarea={editarTarea}
                        borrarTarea= {borrarTarea}/>
                    }
                else if (!tarea.Completadas) {
                return  <Tarea 
                        key={tarea.id}
                        tarea={tarea}
                        toggleCompletadas = {toggleCompletadas}
                        editarTarea={editarTarea}
                        borrarTarea= {borrarTarea}/>
                    }
            return;


            })
            : 
            <div className="lista-tareas__mensaje">
                ..No hay tareas agregadas..
            </div>
        }
        </ul>
    );
}

export default ListaTareas;