import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className={styles.encabezado}>
      <div className={`contenedor ${styles.contenedorEncabezado}`}>
        
        <div className={styles.logo}>
          <img src="https://i.postimg.cc/c1QY31mY/FB-IMG-1781671016736.jpg" alt="Logo Óptica 20/20" />
        </div>
        
        <nav className={styles.navegacionPrincipal}>
          <button className={styles.botonNavegacion}>Inicio</button>
          <button className={styles.botonNavegacion}>Productos</button>
          <button className={styles.botonNavegacion}>Promociones</button>
          <button className={styles.botonNavegacion}>Servicios</button>
          <button className={styles.botonNavegacion}>Nosotros</button>
          <button className={styles.botonNavegacion}>Contacto</button>
          
          <button 
            className={`${styles.botonNavegacion} ${styles.botonIniciarSesion}`}
            onClick={() => navigate('/login')}
          >
            Iniciar Sesión
          </button>
        </nav>

      </div>
    </header>
  );
}