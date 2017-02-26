var Movie = require('./movieModel')
var mongoose = require('mongoose');

//check routes.js to see what other functions need to be implemented hint:"you are missing two"
module.exports ={
	getAllMovies : function (req, res) {
		Movie.find().exec(function (err, movies) {
			if (err) {
				res.status(500).send(err);
			}else{
				res.status(200).send(movies);
			}
		})
	},
	insertMovie : function(req,res){
		for (var i = 0; i < req.body.length; i++) {
	var Mov = new Movie ({
			name : req.body[i].name,
        	director:req.body[i].director,
        	rate : req.body[i].rate
		});
		
		Mov.save(function(err, movies){
    		if(err){
       		 	res.status(500).send(err);
    	}

		});
	}
	res.status(201).json(req.body)
}
}

