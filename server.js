//=============================================================
// Dependencies
// ============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


//=============================================================
// Sets up the Express App
//=============================================================

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


//=============================================================
//Routing
//=============================================================

require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);


// =============================================================
// Starts the server to begin listening 
// =============================================================

app.listen(process.env.PORT || 3000, function(){
	console.log('App listening on PORT ' + process.env.PORT);
});