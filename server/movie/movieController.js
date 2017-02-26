var movie = require('./movieModel.js')
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
	getAllMovies: function(req,res){
		movie.find(function(err,data){
			if (err){
				throw err;
			}else{
				return res.json(data);
			}
		})
	},
	insertMovie: function(req,res){
		var obj = req.body
		console.log(obj)
		movie.create(obj,function(err,data){
			if (err){
				throw err;
			}else{
				res.status(201).json(data);
			}
		})
	}
}
