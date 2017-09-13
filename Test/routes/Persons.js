var express = require('express');
var router = express.Router();
var Person = require('../models/Person');

router.get('/:id?',function(req,res,next){
  if(req.params.id){
    Person.getPersonById(req.params.id,function(err,rows){
      if(err){
        res.json(err);
      }
      else {
        res.json(rows)
      }
    });
  }

  else {
    Person.getAllPersons(function(err,rows){
      if(err){
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }
});

router.post('/',function(req,res,next){
  Person.addPerson(req.body,function(err,count){
    if(err){
      res.json(err);
    }
    else{
      res.json(req.body);
    }
  });
});
module.exports=router;
