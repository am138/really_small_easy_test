
//check routes.js to see what other functions need to be implemented hint:"you are missing two"
var Movie = require('./movieModel.js');

module.exports ={
   getAllMovies : function(req, res){
   	Movie.find({},function(err,data){
			if(err){
				res.status(500).send(err);
			}else{
				res.json(data)
			}
		})
   },
   insertMovie : function(req,res){
	 for(var i = 0; i < req.body.length; i++){
       Movie.create(req.body[i],function(err,movie){
        if(err)
      	console.log(err)
 	  })
     }
     res.status(201).send({})
    },

    getMovie : function (req, res) {
		Movie.findOne({name : req.params.name}),function (err, movie) {
			if (err) {
				res.status(500).send(err);
			}else{
				res.json(movie);
			}
		}
	}
}
