var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
// var morgan = require('morgan')

var tasks = require('./routes/tasks');
var joiValidator = require('./services/joiValidator');


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

connection = mysql.createConnection({
  host        : 'localhost',
  user        : 'root',
  password    : 'password',
  database    : 'todoapp'
})

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected");
})

app.get("/getTasks", joiValidator.getTaskValidator, tasks.getTask);
app.post("/addTasks", joiValidator.addTaskValidator, tasks.addTask);
app.put("/updateTasks", joiValidator.updateTaskValidator, tasks.updateTask);
app.delete("/deleteTasks", joiValidator.deleteTaskValidator, tasks.deleteTask);



app.locals.title = "MY APPS";

app.listen(3000);