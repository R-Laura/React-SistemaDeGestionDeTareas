import { useState } from "react";
import { useStyles } from "../components/styles/AgregarTareaStyles.js";

export default function AgregarTarea({handleAgregarTarea}) {
  const styles = useStyles();
  const [texto, setTexto] = useState('');
  const handleClick = () => {
    handleAgregarTarea(texto)
    setTexto('')
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button onClick={handleClick} style={styles.button}>Agregar tarea</button>
    </div>
  );
}
