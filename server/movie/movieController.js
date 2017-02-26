var movie = require ('./movieModel');
//check routes.js to see what other functions need to be implemented hint:"you are missing two"
module.exports ={
	getMovie : function (req, res) {
		movie.find({name : req.params.name}),function (err, mov) {
			if (err) {
				res.status(500).send(err);
			}else{
				res.json(mov);
			}
		}
	},
	getAllMovies : function(req,res){
	   movie.find().exec(function (err, allMovies) {
	    if(err){
		  res.status(500).send(err);
		}else{
		  res.json(allMovies)
		}
		});
	},
	insertMovie : function(req,res){
		movie.create(req.body, function (err, dataInserted) {
				if (err) {
					res.status(500).send(err);
				}else{
					res.status(201).json(dataInserted);
				}
		})
}
}