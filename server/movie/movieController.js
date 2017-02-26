var Movie = require ('./movieModel');
//check routes.js to see what other functions need to be implemented hint:"you are missing two"
module.exports ={
	
	getMovie : function (req, res) {
		Movie.find({name : req.params.name}),function (err, movie) {
			if (err) {
				res.status(500).send(err);
			}else{
				res.json(movie);
			}
		}
	},
	getAllMovies : function (req, res) {
		Movie.find().exec(function (err, allmovie) {
			if(err){
				res.status(500).send('err');
			}else{
				res.status(200).json(allmovie)
			}
		})
	},
	
	insertMovie : function (req, res) {
		Movie.findOne({name : req.body.name})
		.exec(function (error, movie) {
			console.log(movie)
			if(movie){
				res.json(new Error('movie already exist!'));
			}else{
				var newMovie = new Movie ({
					name : req.body.name,
					director:req.body.director,
					rate : req.body.rate
				});
				newMovie.save(function(err, newMovie){
					if(err){
						res.status(500).send(err);
					}else{
						res.status(201).json(newMovie)
					};
				});
			}
		})
	} 
}
