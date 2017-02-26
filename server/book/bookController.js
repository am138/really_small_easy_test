var Book = require ('./bookModel');
//check routes.js to see what other functions need to be implemented. hint:"you are missing one"
module.exports ={
	//get all the books controller
	getAllBooks : function (req, res) {
		  Book.find().exec(function (err, allBook) {
	        if(err){
		      res.status(500).send(err);
		    }else{
		         res.json(allBook)
		    }
		});
	},
	//insert books controller
	insertBooks : function (req, res) {
			Book.create(req.body, function (err, dataInserted) {
				console.log(dataInserted)
				if (err) {
					res.status(500).send(err);
				}else{
					var obj={}
					res.status(201).json({});
				}
		})
	},
	getBook : function (req, res) {
		Book.find({title : req.params.title}),function (err, book) {
			if (err) {
				res.status(500).send(err);
			}else{
				res.json(book);
			}
		}
	}
}
