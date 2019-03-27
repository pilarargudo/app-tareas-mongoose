// importamos librería para poder conectarnos
const mongoose = require('mongoose')

// definimos la conexión y ponemos la url de nuestra base de datos
// se crea la DB y la colección automáticamente
// useNewUrlParser: true por aviso de parseo
// como hemos definido los entornos en environment.js, quedaría
const {PORT, DB, HOST} = process.env.MongoDB;
mongoose.connect(`mongodb://${HOST}:${PORT}/${DB}`, {useNewUrlParser: true});

// exportamos para su uso
module.exports = mongoose;
