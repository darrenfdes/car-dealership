var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"dms"
});

/* GET home page. */
router.get('/', function(req, res, next) {
  con.query("select *  from vehicle",function(err,result,field){
      res.render('checkinventory',{result:result});  	
  }); 
});

module.exports = router;