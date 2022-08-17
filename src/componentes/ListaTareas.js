import React from "react";
import Tarea from "./Tarea";

const ListaTareas = ({tareas, cambiarTareas, mostrarCompletadas}) => {
    const toggleCompletadas = (id) => {
        cambiarTareas(tareas.map((tarea) => {
            if(tarea.id === id){
        return {...tarea, completadas: !tarea.completadas}
    }
    return tarea;
    }));
}
const editarTarea= (id, nuevoTexto) =>{
        cambiarTareas(tareas.map((tarea) => {
         if (tarea.id === id) {
        return {...tarea, texto: nuevoTexto}
    }
    return tarea;
    }));
}
const borrarTarea = (id) => {
    cambiarTareas(tareas.filter((tarea) => {
        if(tarea.id !==id) {
        return tarea;
        }
        return;
     }));
}
    return ( 
            <ul className="lista-tareas">
            {
            tareas.length > 0 ? tareas.map((tarea)=> {
                if (mostrarCompletadas) {
                return  <Tarea 
                        key={tarea.id}
                        tarea={tarea}
                        toggleCompletadas = {toggleCompletadas}
                        editarTarea={editarTarea}
                        borrarTarea= {borrarTarea}
                        />
                    }else if (!tarea.Completadas){
                return  <Tarea 
                        key={tarea.id}
                        tarea={tarea}
                        toggleCompletadas = {toggleCompletadas}
                        editarTarea={editarTarea}
                        borrarTarea= {borrarTarea}
                        />
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