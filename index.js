const express = require('express');
const ejs = require('ejs');
require('./config');

const sequelize = require('./config');
const bodyParser = require('body-parser');
const Route = require('./route');
const User = require('./models/user');
const Contact = require('./models/contact');
const app = express();
const baseUrl = "http://localhost:8001"

// Other model options go here
sequelize.sync({ alter: true }).then((result)=>{
    console.log("Migration proccessed")
}).catch((err)=>{
    console.log("Something Problem Went Wrong In Migration Process");
})
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use( express.static( "public" ) );


app.get('/', function(req, res) {
    res.render('index');
});
app.use('/admin',Route);

app.listen(8001);
console.log(`Link:-  ${baseUrl}`)

