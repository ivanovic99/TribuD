const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./app/routes');

async function startServer() {
  const app = express();

  // Middleware
  app.use(express.json());
  app.use(cors());

  // Rutas
  app.use('/api', routes);

  // Conexión a la base de datos en Render
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) {
    console.error('La variable de entorno DATABASE_URL no está configurada.');
    return;
  }

  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    return;
  }

  // Iniciar el servidor
  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
  });
}

startServer();
