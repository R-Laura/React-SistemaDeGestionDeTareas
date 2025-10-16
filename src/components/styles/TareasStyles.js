export const useStyles = () => ({
  tarea: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    backgroundColor: '#f4f4f4',
  },
  texto: (completa) => ({
    textDecoration: completa ? 'line-through' : 'none',
    color: completa ? '#888' : '#000',
    flex: 1,
    marginRight: '10px',
  }),
  botones: {
    display: 'flex',
    gap: '8px',
  },
  boton: {
    backgroundColor: '#e0e0e0',
    border: 'none',
    padding: '6px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
  }
});
