var Book = require('./bookModel.js')
//check routes.js to see what other functions need to be implemented. hint:"you are missing one"
module.exports ={
	//get all the books controller
	getAllBooks : function (req, res) {
		Book.find({},function (err,AllBooks) {
			if (err) {
				res.status(500).send(err);
			}else{
				res.status(200).json(AllBooks)
			}
		})
	},
	//insert books controller
	insertBook : function (req, res) {
			Book.create(req.body, function (err, insertedBook) {
				if (err) {
					res.status(500).send(err);
				}else{
					res.status(201).json(insertedBook[0]);
				}
		})
	},

	getByName : function(req, res){
		Book.find({title: req.params.name}, function (err, book) {
			if (err) {
				res.status(500).send(err);
			}else{
				res.json(book);
			}
		})
	}
}
