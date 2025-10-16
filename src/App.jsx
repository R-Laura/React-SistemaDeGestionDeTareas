import { useState } from "react";
import AgregarTarea from "./components/AgregarTarea.jsx";
import ListaTareas from "./components/ListaTareas.jsx";

function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (texto) => {
    const nuevaTarea = {
      id:Date.now(),
      texto:texto,
    }
    setTareas([...tareas,nuevaTarea])
  }

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id))
  }

   const toggleCompleta = (id) => {
    setTareas(tareas.map(t => t.id === id ? { ...t, completa: t.completa ? false : true } : t))
  }

  return (
    <div style={containerStyle}>
      <h1>Sistema de Gestión de Tareas 📝</h1>
      <AgregarTarea handleAgregarTarea={agregarTarea} />
      <ListaTareas tareas={tareas} onEliminar={eliminarTarea} toggleCompleta={toggleCompleta}/>
    </ div>
  );
}

export default App;

const containerStyle = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingTop: '40px',
  fontFamily: 'sans-serif',
  backgroundColor: '#f5f5f5',
};
