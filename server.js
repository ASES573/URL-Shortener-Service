'use strict';

var express = require("express");

var expressLayouts = require("express-ejs-layouts");

var bodyParser = require("body-parser");

var app = express();

app.set('port', process.env.PORT || 3000);

app.set('view engine', 'ejs');

app.use(expressLayouts);

app.use(bodyParser.urlencoded({extended : true}));

var router = require("./app/routes");

app.use("/",router);

app.use(express.static(__dirname + '/public'));

app.listen(port,function(){
	console.log("server running at 5000"); 
});
