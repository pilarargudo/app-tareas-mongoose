// definimos la configuración con la variable de entorno
require('./config');

// nos creamos nuestro servidor de express
const express = require('express');

// endpointis en el index de router por lo que necesitamos importarlo
const router = require('./routes');

// definido o por defecto
const PORT = process.env.PORT || 3000;

const app = express();

// uso de la librería de bodyparser para JSON, siempre antes del middleware de router
app.use(express.json());

// cuando alguien haga una petición le indicamos que pase por router, si este responde se le envía a cliente
app.use(router);

app.listen(PORT,() => {
  //importante las comillas abiertas para que interprete la variable
  console.log(`http://localhost:${PORT}/`)
});