var movie = require('./movieModel.js');  
//check routes.js to see what other functions need to be implemented hint:"you are missing two"
module.exports ={
	getMovie : function (req, res) {
		movie.find({name : req.params.name}),function (err, movie) {
			if (err) {
				res.status(500).send(err);
			}else{
				res.json(movie);
			}
		},
		insertMovie : function (req, res) {
			
			var newmovie = new movie ({
				name : req.body.name,
				director:req.body.director,
				rate:req.body.rate
				
			});

			newmovie.save(function(err, newmovie){
				if(err){
					res.status(500).send(err);
				} else {
					res.status(200).send(newmovie);
				};
			})
		},
		getAllMovies : function (req, res) {
			movie.find({}, function(err, movie) {
				if (err) throw err;
				else{
					res.status(200).send(movie);
				}
				
				
			})
			
		},

	}
}
