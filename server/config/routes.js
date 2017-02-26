var bookController = require('../book/bookController.js');
var movieController = require('../movie/movieController.js');
module.exports = function (app, express) {

//=============================================================================
/*								movie route									 */
//=============================================================================
	//add get request for other route
	app.get('/api/movie/', movieController.getAllMovies);
	app.post('/api/movie/', movieController.insertMovie);
	app.post('/api/movie/:name', movieController.getMovie);

	
//=============================================================================
/*								book route									 */
//=============================================================================
	//add get and post request for other routes
	app.post('/api/book/:title', bookController.getByTitle)
	app.post('/api/book/', bookController.insertBooks)
	app.get('/api/book/', bookController.getAllBooks)

};

