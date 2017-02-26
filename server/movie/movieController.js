var movie =require('./movieModel.js');
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
	getAllMovies : function (req, res) {
		movie.find().exec(function (err, AllMovies) {
			if(err){
				res.status(500).send('err');
			}else{
				res.status(200).send(AllMovies);
			}
		});
	},
	insertMovie : function (req, res) {
			for (var i = 0; i < req.body.length; i++) {
				var NewMovie = new movie ({
			        name: req.body[i].name,
			        director: req.body[i].director,
			        rate: req.body[i].rate
				});
				NewMovie.save(function (err,NewMovie) {
					console.log("NewMovie")
					if (err) {
						res.status(500).res.send(err);
						console.log(err)
					}
				})

			}
			res.json(req.body);
			console.log('insert Movie succefuly')
	}
}
