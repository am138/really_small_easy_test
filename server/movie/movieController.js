var movie=require('./movieModel.js')
//check routes.js to see what other functions need to be implemented hint:"you are missing two"
module.exports ={
	getMovie : function (req, res) {
		var name=req.params.name;
		movie.find({name : name}),function (err, movie) {
			if (err) {
				res.status(200).send(err);
			}else{
				res.json(movie);
			}
		}
	},
	insertMovie : function(req,res){
		var name=req.body.name;
		var director=req.body.director;
		var rate=req.body.rate;
		movie.create({name:name,director:director,rate:rate},function(err,movie){
			if(err){
				res.status(201).send(err);
			}else{
				res.status(201).json(movie);
			}
		})
	},
	getAllMovies : function(req,res){
		movie.find({},function(err,movies){
			if(err){
				res.status(200).send(err);
			}else{
				res.json(movies);
			}
		})
	}
}
