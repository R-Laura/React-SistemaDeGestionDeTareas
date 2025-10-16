import Tarea from "./Tarea";
import { useStyles } from "../components/styles/ListaTareasStyles.js";

export default function ListaTareas({tareas, onEliminar, toggleCompleta}) {
  const styles = useStyles();
  return (
    <>
      <ul style={styles.lista}>
        {tareas.map((tarea)=>(
          <li key={tarea.id}>
            <Tarea {...tarea} onEliminar={onEliminar} toggleCompleta={toggleCompleta} />
          </li>
        ))}
      </ul>
    </>
  )
}
