const Contact = require('../models/contact');

const addContact = (req,res) =>{
   const data = Contact.build({ 
        name : req.body.name,
        phone : req.body.phone,
    });
    data.save().then((result)=>{
        res.send({
            "Status" : "200K",
            "Message" : "Well done! You Saved Contact",
        });
    }).catch((err)=>{
        res.send({
            "Status" : "500",
            "Message" : "Something Went Wrong In This Process",
            "Error" : err
        })
    })
    
}

const showContact = (req,res)=>{
    Contact.findAll({
        order: [
          ['createdAt', 'DESC'],
        ],
        where : {
            deleted_at : null
        }
      }).then((result)=>{
        res.send({
            "Status" : true,
            "Message" : "Well done!, This Is Your All Contacts",
            "Details" : result
        });         
    }).catch((err)=>{
        res.send({
            "Status" : false,
            "Message" : "Something Went Wrong In This Process",
            // "err" : err  
        })
    })
   
}

const updateContact = (req,res)=>{
    Contact.update({ name :  req.body.name, phone: req.body.phone }, {
        where: {
          id: req.body.id,
          deleted_at : null,
        }
    }).then((result)=>{
        Contact.findOne({
            where : {
                id : req.body.id,
                deleted_at : null,
            }
        }).then((re)=>{
            if(re){
                res.send({
                    "Status" : true,
                    "Message" : "Well done!, Contact Updated",
                    "Details" : re
                }); 
            }else{
                res.send({
                    "Status" : false,
                    "Message" : "Ooops!, we couldn't find Id",
                    "Details" : re
                });
            }
        })        
    }).catch((err)=>{
        res.send({
            "Status" : false,
            "Message" : "Something Went Wrong In This Process",
            // "err" : err  
        })
    })
}

const DeleteContact = (req,res)=>{
    Contact.update({ deleted_at :  Date() }, {
        where: {
          id: req.body.id
        }
    }).then(()=>{
        res.send({
            "Status" : true,
            "Message" : "Well done!, Contact Deleted",
        }); 
    }).catch((err)=>{
        res.send({
            "Status" : false,
            "Message" : "Something Went Wrong In This Process",
            // "err" : err  
        })
    })
}

module.exports = {
    addContact,   
    showContact,
    updateContact,
    DeleteContact,
}