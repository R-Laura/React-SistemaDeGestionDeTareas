import { useStyles } from "../components/styles/TareasStyles.js";

export default function Tarea({
  id,
  texto,
  onEliminar,
  toggleCompleta,
  completa,
}) {
  
  const styles = useStyles();
  return (
     <div style={styles.tarea}>
      <span style={styles.texto(completa)}>{texto}</span>
      <div style={styles.botones}>
        <button style={styles.boton} onClick={() => onEliminar(id)}>
          🗑️
        </button>
        <button style={styles.boton} onClick={() => toggleCompleta(id)}>
          {completa ? "✅" : "✔️"}
        </button>
      </div>
    </div>
  );
}
