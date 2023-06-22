const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./app/routes');

async function startServer() {
  // Conexión a la base de datos en Render
  
  const dbUrl = 'https://api.render.com/deploy/srv-ciabg3d9aq007tfuphj0?key=PyypVQZLRV8';
  await mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'Error al conectar a la base de datos:'));
  db.once('open', () => {
    console.log('Conexión exitosa a la base de datos');
  });

  const app = express();

  // Middleware
  app.use(express.json());
  app.use(cors());

  // Rutas
  app.use('/api', routes);

  // Iniciar el servidor
  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
  });
}

startServer();
