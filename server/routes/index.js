// función que crea el router dentro de está variable
// nos deja crear rutas de una aplicación express y nos deja emplearla en nuestra app principal
const router = require('express').Router();
//const express = require( 'express' );

// nos traemos el modelo del esquema de tareas
const Task = require('../models/Task');

// cambiamos app por router
router.get('/', (req, res) => {
  //res.send(process.env.NODE_ENV)
  res.send({})

})

/**
 *Tasks Routers,
 */

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



// para poder emplearlo:
module.exports = router;

// nos muestra los datos
//console.log(User)