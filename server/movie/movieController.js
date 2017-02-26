var movie = require('./movieModel')
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


	getAllMovies: function (req,res) {
		movie.find().exec(function(err, movies){
			if(err) {
				res.status(500).send(err);
			}else{
				res.json(movies)
			}
			})
		},

		insertMovie: function (req,res) {
			var small = new movie({ name: req.body.name });
			small.save(function (err) {
				if (err) {
					res.status(500).send(err);
				}else{
					res.status(201).json(small)
				}
			})
		}

	}  	
