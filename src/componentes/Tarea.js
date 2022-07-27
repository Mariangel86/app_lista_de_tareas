import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckSquare,faTimes,faEdit} from '@fortawesome/free-solid-svg-icons';

const Tarea = ({tarea}) => {

    const [editandoTarea, cambiarEditandoTarea]= useState (false);
    const [nuevaTarea, CambiarNuevaTarea] = useState (tarea.texto);
    const handleSubmit= (e)=> {
        e.preventDefault ();
        cambiarEditandoTarea (false);
    }

    return (
        <li className="Lista-tareas__tareas">
            <FontAwesomeIcon
             icon = {faCheckSquare} 
             className= "lista-tareas__icono lista-tareas__icono-check"
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
           classname= "lista-tareas__icono lista-tareas__icono-accion"
           onClick={cambiarEditandoTarea}
           />
           <FontAwesomeIcon 
            icon = {faTimes}
            classname= "lista-tareas__icono lista-tareas__icono-accion" />
           
           </div>
            </li>

    );
}

export default Tarea;