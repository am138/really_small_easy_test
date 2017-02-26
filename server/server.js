var express = require('express');
var mongoose = require('mongoose');


//require two files here
var mw = require('../server/config/middleware.js');
var ro = require('../server/config/routes.js');
var app = express();

mw(app,express);

ro(app,express);

//=============================================================================
/*									Database								 */
//=============================================================================
	var mongoURI ='mongodb://localhost/test';
	mongoose.connect(mongoURI);
	db = mongoose.connection;

	db.once('open',function () {
		console.log('...mongoDB is open');
	});


//=============================================================================
/*									Server   								 */
//=============================================================================
	var port = 3000;
	app.listen(port , function () {
		console.log('...Server now listening on port ' + port);
	});


module.exports = app;