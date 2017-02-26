
//check routes.js to see what other functions need to be implemented hint:"you are missing two"
var Movie=require('./movieModel.js');
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
	insertMovie:function(req,res){
		Movie.create(req.body, function (err, dataInserted) {
				if (err) {
					res.status(500).send(err);
				}else{
					res.json(dataInserted);
				}
		})

	},
	getAllMovies:function (req, res) {
		Movie.find().exec(function (err, allmovies) {
      if(err){
        res.status(500).send('err');
      }else{
        res.status(200).send(allmovies);
      }
    });
}
}
