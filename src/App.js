import React, {useState} from 'react';
import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTareas';

const App = () => {
  const [tareas, cambiarTareas]= useState (
    [
      {
        id: 1,
        texto: "hacer ejercicio",
        completadas: false
        },
        {
        id: 2,
        texto: "estudiar",
        completadas: false
      }
    ]
  );
  return (
    <div className= "contenedor">
      <Header/>
      <FormularioTareas tareas= {tareas} cambiarTareas={cambiarTareas}/>
      <ListaTareas tareas= {tareas}/>
    </div>
  );
}

export default App;
