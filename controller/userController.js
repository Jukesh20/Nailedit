const User = require('../models/user');

const addUser = (req,res) =>{
    const data =  User.build({ 
        firstName : req.body.firstName,
        lastName : req.body.firstName,
        phone_number : req.body.phone_number,
        password :  req.body.password,
    });
    data.save().then((result)=>{
        res.send({
            "status" : "200K",
            "message" : "Welcome! You are Part Of This Project, Go For Login",
            // "Details" : result,
        });
    }).catch((err)=>{
        res.send({
            "status" : "500",
            "message" : "Something Went Wrong In This Process",
            "err" : err
        })
    })
    
}

const login = (req,res)=>{
    const dees =   User.findOne({
        where:{
            phone_number: req.body.phone_number,
            password : req.body.password,
        }
    }).then((result)=>{
        if(result == null){
            res.send({
                "status" : false,
                "message" : "Phone or Password does not match",
            });
        }else{
            res.send({
                "status" : true,
                "message" : "Success, Go Inside in The System",
            });
        }
    }).catch((err)=>{
        res.send({
            "status" : false,
            "message" : "Something Went Wrong In This Process",
            // "err" : err
        })
    })
   
}

module.exports = {
    addUser,   
    login,
}