var movie = require ('./movieModel.js');

//check routes.js to see what other functions need to be implemented hint:"you are missing two"
module.exports ={
	getMovie : function (req, res) {
		movie.find({name : req.params.name}),function (err, movie) {
			if (err) {
        console.log(err)
			}else{
				res.status(200).json(movie);
			}
		}
	},
  insertMovie : function (req, res) {
      movie.create(req.body, function (err, dataInserted) {
        if (err) {
          res.status(404).send(err);
        }else{
          res.status(201).json(dataInserted);
        }
    })
  },

  getMovies : function (req, res) {
    movie.find({},function (err,allmovies) {
      if (err) {
        res.status(404).send(err);
      }else{
        res.status(200).json(allmovies)
      }
    })
  }

}

