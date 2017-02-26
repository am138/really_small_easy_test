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
			for(var i=0 ;i<req.body.length;i++ ){
			var newmovie = new movie ({
				name : req.body[i].name,
				director:req.body[i].director,
				rate:req.body[i].rate
				
			});

			newmovie.save(function(err, newmovie){
				if(err){
					res.status(500).send(err);
				} 
			})
		}
		res.status(200).send(newmovie);
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
