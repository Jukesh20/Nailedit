const express = require('express');
const userController = require('../controller/userController');
const contactController = require('../controller/contactController');

const Router = express.Router();

Router.get('/real', (req, res) => {
    res.send('Welcome Admin!')
})

Router.post('/add-user',userController.addUser)
Router.post('/login',userController.login)
Router.post('/add-contact',contactController.addContact)
Router.post('/show-contact',contactController.showContact)
Router.post('/update-contact',contactController.updateContact)
Router.post('/delete-contact',contactController.DeleteContact);

module.exports = Router;
