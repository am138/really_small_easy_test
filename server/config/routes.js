var bookController = require('../book/bookController.js');
var movieController = require('../movie/movieController.js');

module.exports = function (app, express) {

//=============================================================================
/*								movie route									 */
//=============================================================================
	//add get request for other route
	app.get('/api/movie/', movieController.getAllMovies); 
	app.post('/api/movie/', movieController.insertMovie);
	app.post('/api/movie/:title', movieController.getMovie); 
//=============================================================================
/*								book route									 */
//=============================================================================
	//add get and post request for other routes
	app.get('/api/book/', bookController.getAllBook);
	app.post('/api/book/', bookController.insertBook);
	app.get('/api/book/:name', bookController.getByName)
};

