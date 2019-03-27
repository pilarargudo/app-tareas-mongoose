// función que crea el router dentro de está variable
// nos deja crear rutas de una aplicación express y nos deja emplearla en nuestra app principal
const router = require('express').Router();
//const express = require( 'express' );

// nos traemos el modelo del esquema de tareas
const Task = require('../models/Task');

/**
 *Tasks Routers,
 */

// LIST
router.get('/', (req, res) => {
  // res.send(process.env.NODE_ENV)
  // res.send({})

  // petición sobre la colección de tasks
  // find recibe las opciones de búsqueda, como queremos todos, lo pasamos vacío
  Task.find({})
  .then( tasks => {
    res.send(tasks);
  })
  .catch( err => {
    res.status(500).send(err);
  })

})

// CREATE
router.post('/tasks', (req, res) => {
  // recibimos todo lo que nos llegue
  //console.log(req.body);
  // una vez enviamos datos desde cliente (postman, cliente, bd json):
  new Task(req.body)
  // guardamos
  .save() 
  .then( task => { 
    res.send(task); 
  })
  .catch( err => {
    res.status(400).send(err);
  })  

});

// DELETE
// recogemos parámetros de la url para marcar qué eliminar
router.delete('/task/:task_id', (req, res) => {
  // primero lo buscamos para obtener el id y notificar qué vamos a eliminar
  Task.findByIdAndDelete(req.params.task_id)
  .then( task => {
    res.send(task);
  })
  .catch( err => {
    res.status(500).send(err);
  })
})


// para poder emplearlo:
module.exports = router;

// nos muestra los datos
//console.log(User)