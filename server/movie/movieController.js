var Movie = require ('./movieModel.js')
//check routes.js to see what other functions need to be implemented hint:"you are missing two"
module.exports ={

	getMovie : function (req, res) {
		var name = req.params.name
		Movie.find({name : name }), function (err, movie) {
				console.log(err)
			if (err) {
				res.status(500).send(err);
			}else{
				res.json(movie);
			}
		}
	},

	getAllMovies: function (req, res) {
		Movie.find(function (err,AllMovies) {
			if (err) {
				res.status(500).send(err);
			}else{
				res.json(AllMovies)
			}
		})
	},

	insertMovie: function (req, res) {
		Movie.create(req.body, function (err, dataInserted) {
			if (err) {
				res.status(500).send(err);
			}else{
				res.status(201).json(dataInserted);
			}
		})
	}
}
