var movie = require('./movieModel.js')
//check routes.js to see what other functions need to be implemented hint:"you are missing two"
module.exports ={
	getMovie : function (req, res) {
		movie.find({name : req.params.name}),function (err, movie) {
			if (err) {
				res.status(500).send(err);
			}else{
				res.json(movie);
			}
		}
	},
	insertMovie : function (req, res) {
		console.log(req.body)

			var dataInserted = new movie({
				name : req.body.name,
				director : req.body.director,
				rate : req.body.rate
			})
			movie.create(dataInserted, function (err, dataInserted) {
				if (err) {
					// console.log(err, "HELLO")
					res.status(500).send(err);
				}else{
					res.status(201).json(dataInserted);
				}
			})
	},
	getAllMovies : function (req, res) {
		movie.find().exec(function(err,movie){
			if(err){
				throw err
			}else{
				res.json(movie)
			}
		})
	}

}
