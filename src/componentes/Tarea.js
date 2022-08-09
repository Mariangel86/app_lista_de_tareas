import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckSquare,faTimes,faEdit, faSquare} from '@fortawesome/free-solid-svg-icons';

const Tarea = ({tarea, toggleCompletadas, editarTarea,borrarTarea}) => {

    const [editandoTarea, cambiarEditandoTarea]= useState (false);
    const [nuevaTarea, CambiarNuevaTarea] = useState (tarea.texto);
    const handleSubmit= (e)=> {
        e.preventDefault ();
        editarTarea(tarea.id, nuevaTarea);
        cambiarEditandoTarea (false);
    }

    return (
        <li className="Lista-tareas__tareas">
            <FontAwesomeIcon
             icon = {tarea.completadas ? faCheckSquare : faSquare} 
             className= "lista-tareas__icono lista-tareas__icono-check"
             onClick={()=>{toggleCompletadas= (tarea.id)}}
             />
           <div 
            className="Lista-tareas__texto"> 
               {editandoTarea ?
               <form action= "" className="formulario-editar-tarea" onSubmit={handleSubmit}>
                   <input 
                   type = "text"
                   className="formulario-editar-tarea__input"
                   value={nuevaTarea}
                   onChange={(e)=> CambiarNuevaTarea (e.target.value)}
                   />
                   <button 
                   type="submit" 
                   className="formulario-editar-tarea__btn">
                   Actualizar </button>
               </form>
               : tarea.texto
               }
           </div>
           
           <div className="lista-tareas__contenedor-botones">
               <FontAwesomeIcon 
           icon = {faEdit} 
           className= "lista-tareas__icono lista-tareas__icono-accion"
           onClick={cambiarEditandoTarea}
           />
           <FontAwesomeIcon 
            icon = {faTimes}
            className= "lista-tareas__icono lista-tareas__icono-accion" 
            onClick={()=> borrarTarea (tarea.id)}/>
           
           </div>
            </li>

    );
}

export default Tarea;