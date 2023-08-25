const Sequelize = require('sequelize');
const sequelize = new Sequelize("nailedit","root","root",{
    host : "localhost",
    logging :false,
    dialect : "mysql",
})

sequelize.authenticate().then((res)=>{
    console.log("Database is connected")
}).catch((err)=>{
    console.log("Datbase Is connected");
})

module.exports = sequelize;                                                                             