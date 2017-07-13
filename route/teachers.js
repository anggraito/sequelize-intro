var express = require('express');
var routing = express.Router();

var dbModel = require('../models');

routing.get('/', function(req, res){
  dbModel.Teacher.findAll()
  .then (function (rows) {
    res.render('teacher', {data_teacher: rows});
  })
});


module.exports = routing;
