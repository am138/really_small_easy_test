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
	getAllMovies : function (req , res){
		movie.find({} , function(err, data){
			console.log(data)
			if(err) {
				res.status(500).send(err)
			}else{
				res.status(200).json(data)//.set('Content-Type', '/json/');
			}
		})
	},
	insertMovie : function (req , res){
		movie.create(req.body , function(err , data){
			if(err) {
				res.status(500).send(err)
			}
		})
				res.status(201).json(req.body)
	}
}
