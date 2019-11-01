var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');

var con=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"dms"
});

con.connect(function(err)
{
  if(err)throw err;
  console.log("Connected");
});



var indexRouter = require('./routes/index');
var pager2Router = require('./routes/pager2');
var addcustomerRouter = require('./routes/addcustomer');
var addvehicleRouter = require('./routes/addvehicle');
var loginRouter = require('./routes/login');
var processRouter = require('./routes/process');
var dummy=require('./routes/dummy');
var checkinventory = require('./routes/checkinventory');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));

app.use('/', loginRouter);
app.use('/pager2', pager2Router);
app.use('/addcustomer', addcustomerRouter);
app.use('/addvehicle',addvehicleRouter);
// app.use('/login', loginRouter);
app.use('/process', processRouter);
app.use('/dummy',dummy);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.post('/validate',function(request,response){

var username=req.body.uname;
console.log(username);

var pass=req.body.psw;

//query 

});

module.exports = app;
