var bookController = require('../book/bookController.js');
var movieController = require('../movie/movieController.js');

module.exports = function (app, express) {

//=============================================================================
/*								movie route									 */
//=============================================================================
	//add get request for other route
	app.get('/api/movie/', movieController.getAllMovies);
	app.post('/api/movie/', movieController.insertMovie);

	app.get('/api/movie/:name', movieController.getMovie);

	
//=============================================================================
/*								book route									 */
//=============================================================================
	//add get and post request for other routes
	app.get('/api/book/:name', bookController.getByName);

	app.get('/api/book/', bookController.getAllBooks);
	app.post('/api/book/', bookController.insertBooks);
 };

