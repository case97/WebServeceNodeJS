var mysql=require('mysql');
var connection = mysql.createPool(
  {
    host:'localhost',
    user:'root',
    password: '1234',
    database:'test'
  }
);
module.exports=connection;
