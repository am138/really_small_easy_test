var movie=require("./movieModel.js")
//check routes.js to see what other functions need to be implemented hint:"you are missing two"
module.exports ={
	getMovie : function (req, res) {
		movie.find({title : req.params.title},function (err, data) {
			if (err) {
				res.status(500).send(err);
			}else{
				res.status(200);
				res.json(data);
			}
		})
	},
	getAllMovies:function(req,res){
		movie.find({},function (err,ok) {
			if (err) {
				res.status(500).send(err);
			}else{
				res.status(200);
				res.json(ok);
			}
		})
	},
	insertMovie:function(req,res){
		
		movie.create(req.body,function (err, movie) {
			if (err) {
				res.status(500).send(err);
			}else{
				res.status(201);
				res.json(movie);
			}
		})
	}
}
