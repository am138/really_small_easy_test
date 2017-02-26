var movie = require('./movieModel.js')
//check routes.js to see what other functions need to be implemented hint:"you are missing two"
module.exports ={
	getMovie : function (req, res) {
		movie.find({name : req.params.name}, function (err, movie) {
			if (err) {
				res.status(500).send(err);
			}else{
				res.json(movie);
			}
		});
	},
  getAllMovies : function(req, res) {
    movie.find({}, function(err, movies){
      if (err) {
        res.status(500).send(err);
      }else{
        res.status(200).json(movies);
      }
    })
  },

  insertMovie : function(req, res){
    movie.create(req.body, function(err, movie){
      if (err) {
        res.status(500).send(err);
      }else{
        res.status(201).json(movie);
      }
    })
  }
}
