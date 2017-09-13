var db = require('../dbconnection');
var Person = {

  getAllPersons:function(callback){
     console.log("inside service get all persons");
    return db.query("select * from persons",callback);
  },
  getPersonById:function(id,callback){
     console.log("inside service get by id");
    return db.query("select * from persons where personId=?",[personId],callback);
  },

  addPerson:function(p,callback){
     console.log("inside service to insert person");
     console.log(p.firstName);
    return db.query("insert into persons values (?,?,?)",[p.personId,p.firstName,p.secondName],callback)
  }

};
module.exports = Person;
