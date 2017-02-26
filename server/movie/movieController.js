var movie = require('../movie/movieModel.js');

//check routes.js to see what other functions need to be implemented hint:"you are missing two"
module.exports ={
	getMovie : function (req, res) {
		movie.find({title : req.params.title}),function (err, movie) {
			if (err) {
				res.status(500).send(err);
			}else{
				res.json(movie);
			}
		}
	},
	getAllMovies : function (req,res){
		movie.find({},function (err,Allmovies) {
			if (err) {
				res.status(500).send(err);
			}else{
				res.json(Allmovies)
			}
		})

	},
	insertMovie : function(req,res){
		movie.create(data, function (err, dataInserted) {
				if (err) {
					res.status(500).send(err);
				}else{
					res.status(300).json(dataInserted);
				}
		})

	}
}
