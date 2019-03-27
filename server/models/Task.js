// primero importamos mongoose
const  mongoose = require('mongoose');

    // usamos librería pick de lodash: qué objeto, qué claves queremos
    // nos abrevia el escribir y definir cada variable como el caso de arriba
const {pick} = require('lodash'); 

// creamos la constante del esquema de datos como función y le pasamos los parámetros que vamos a guardar
// creamos nueva instancia del esquema que está almacenado en mongoose
const TaskSchema = new mongoose.Schema({
  // _id viene automático por lo que no es necesario
  // definimos cada campo
  text: {
    type: String,
    required: true,
    //minlength: 100,
  },
  completed: {
    type: Boolean,
    default: false,

  },
  color: {
    type: String,
    default: null,
  }

});

// volvemos a definir esté método como función para el contexto del esquema en el que se va a ejecutar
// todo lo que que ejecutemos con `this` se referería al esquema que hemos definido arriba
// this es el propio usuario al que le apliquemos el método
// le decimos que la transformación a json solo devuelva esto: y no todos el _doc del esquema
TaskSchema.methods.toJSON = function(){

    const task = this; 
  
    // usamos librería pick de lodash: qué objeto, qué claves queremos
    return pick(task, ['_id', 'text', 'completed','color']);
}

//le pasamos 2 páramatros: el nombre que le queremos dar a la colección y sobre qué esquema se va a basar la colección
const Task = mongoose.model('task', TaskSchema);

// lo tenemos que dejar disponible para importar en otros
module.exports = Task;