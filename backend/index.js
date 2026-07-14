const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config(); // Carga las variables del archivo .env

const app = express();
const port = 3000;

// Middlewares (Configuraciones)
app.use(cors()); // Permite peticiones de React
app.use(express.json()); // Permite recibir datos en formato JSON (ej. de formularios)

// Configuración de la conexión a PostgreSQL usando las variables del .env
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Ruta 1: De prueba general
app.get('/', (req, res) => {
  res.send('¡El servidor de la Óptica está funcionando!');
});


app.get('/test-db', async (req, res) => {
  try {
    // Hacemos una consulta muy simple a Postgres para ver si responde
    const respuesta = await pool.query('SELECT NOW()');
    res.json({ 
        mensaje: '¡Conexión exitosa a PostgreSQL!', 
        hora_servidor: respuesta.rows[0].now 
    });
  } catch (error) {
    console.error('Error conectando a la base de datos:', error);
    res.status(500).json({ error: 'Hubo un problema conectando a la BD' });
  }
});

// Ruta para obtener el catálogo
app.get('/api/catalogo', async (req, res) => {
  try {
   
    const query = "SELECT Titulo, Descripcion, Precio, UrlImagen, Seccion FROM catalogoimagenes ORDER BY ID_Imagen DESC";
    const respuesta = await pool.query(query);
    
    // Devolvemos los datos a React en formato JSON
    res.json(respuesta.rows);
  } catch (error) {
    console.error('Error al cargar el catálogo:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});


// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});