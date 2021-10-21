const Sequelize = require(`sequelize`);


const DB_NAME = 'db_viajeros';
const DB_USER ='admin';
const DB_PASS = '123456';


export const database =new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASS,

{

host: 'localhost',
dialect:'mysql',
port:3306

}


);


database.sync({force: true})
.then(function (){

    console.log('base de datos creada correctamente')

})

