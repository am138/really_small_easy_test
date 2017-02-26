var Book = require('./bookModel')
var mongoose = require('mongoose');

//check routes.js to see what other functions need to be implemented. hint:"you are missing one"
module.exports ={
	//get all the books controller
	getAllBooks : function (req, res) {
		Book.find().exec(function (err,AllBooks) {
			if (err) {
				res.status(500).send(err);
			}else{
				res.json(AllBooks)
			}
		})
	},
	//insert books controller
	insertBooks : function (req, res) {
	for (var i = 0; i < req.body.length; i++) {
	var bo = new Book ({
			title : req.body[i].title,
        	auther:req.body[i].auther,
        	pageNumber : req.body[i].pageNumber
		});
		
		bo.save(function(err, movies){
    		if(err){
       		 	res.status(500).send(err);
			}
		});
	}
			res.status(201).send(req.body)

	
	},
	getByName:function(req,res){
		Book.find({name:req.params.name}).exec(function(req,book){
			if (err) {
				res.status(500).send(err);
			}else{
				res.json(book)
			}

		})
	}
}
