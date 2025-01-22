
const UserTag = ({ nombre, apellido }) => {
  // Construir la URL de la foto de perfil
  const avatarUrl = `https://unavatar.io/${nombre}`;

  return (
    <div style={styles.container}>
      <img src={avatarUrl} alt="Foto de perfil" style={styles.avatar} />
      <div style={styles.info}>
        <h3 style={styles.name}>{nombre} {apellido}</h3>
      </div>
    </div>
  );
};

// Estilos en línea
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    maxWidth: '300px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  avatar: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '15px',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    margin: 0,
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
  },
};

export default UserTag;
