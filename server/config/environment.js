const environments = {
  //definimos por defecto el string de config y así no dejamos error en el tipeo
  production: "production",
  development: "development",
  test: "test"
}

// definimos el entorno de desarrollo por defecto si el usuario no la define
const ENV = process.env.NODE_ENV || environments.development;

const config = {
  //definimos cono objetos los entornos de trabajo
  [environments.production]: {
    // las aplicaciones en producción todas funcionan en el :80
    PORT: 80,
    MongoDB: {
      // config de la base de datos
      PORT: 27017,
      HOST: 'localhost',
      DB: 'Bootcamp'
    }
  },
  [environments.development]: {
    PORT: 3000,
    MongoDB: {
      PORT: 27017,
      HOST: 'localhost',
      DB: 'Bootcamp_dev'
    }
  },
  // para lanzar pruebas automatizadas
  [environments.test]: {
    PORT: 3000,
    MongoDB: {
      PORT: 27017,
      HOST: 'localhost',
      DB: 'Bootcamp_test'
    }
  },
}

const CONFIG = config[ENV];

// comprobamos si no existe, ya que aunque no esté definida nos mostraría true por el valor undefined
if(!CONFIG) {
  throw new Error( 'NODE_ENV=${ENV} no es un entorno válido.');
}

// console.log(CONFIG);

// con process.env vemos nuestro entorno del sistema, almacena todas las variables del sistema
//console.log(process.env);

// queremos incluir, sin borrar las variables que tenemos, las variables de base de datos
process.env = {
  // con los 3 puntos coge todas las variables del objeto y las despliega
  ...process.env,
  // y le sumamos lo nuevo definido, si algo se llama igual, lo sobrescribe
  ...CONFIG
}
// console.log(process.env.MongoDB);