// función que crea el router dentro de está variable
// nos deja crear rutas de una aplicación express y nos deja emplearla en nuestra app principal
const router = require('express').Router();

// cambiamos app por router
router.get('/', (req, res) => {
  res.send(process.env.NODE_ENV)
});


// para poder emplearlo:
module.exports = router;

// nos muestra los datos
//console.log(User)