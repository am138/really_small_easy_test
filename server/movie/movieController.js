var movie = require('./movieModel.js')
//check routes.js to see what other functions need to be implemented hint:"you are missing two"
module.exports ={
	getMovie : function (req, res) {
		console.log(req.params.name)
		movie.find({name : req.params.name},function (err, movie) {
			if (err) {
				res.status(500).send(err);
			}else{
				console.log(movie)
				res.json(movie);
			}
		})
	},
	getAllMovies : function(req,res){
		movie.find({},function(err,data){
			if(err){
				console.log('data miss')
			}else{
				res.json(data)
			}
		})
	},
	insertMovie : function(req, res){
		console.log("dfghjkl",req.body)
		var name = req.body.name;
		var director = req.body.director;
		var rate =  req.body.rate;
		movie.create({
			name:name,
			director :director,
			rate :rate
		}, function(err,data){
			if(err){
				console.log('errr')
			}else{
				res.status(201)
				res.json(data)
			}
		})
	}
}
