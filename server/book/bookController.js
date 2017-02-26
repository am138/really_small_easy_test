var Book = require ('./bookModel.js')

//check routes.js to see what other functions need to be implemented. hint:"you are missing one"
module.exports ={
	// get all the books controller
	getAllBooks : function (req, res) {
		console.log(req.body)
		Book.find( function (err, AllBooks) {
			if (err) {
				res.status(500).send(err);
			}else{
				res.json(AllBooks)
			}
		})
	},

	getBook : function (req, res) {
		Book.find({title : req.params.title}), function (err, book) {
			if (err) {
				res.status(500).send(err);
			}else{
				res.json(book);
			}
		}
	},

	// insert books controller
	insertBook : function (req, res) {
		Book.create(req.body, function (err, newBook) {
			// console.log(newBook)
			var obj = {newBook};
			if (err) {
				res.status(500).send(err);
			}else{
				res.status(201).json(obj);
			}
		})
	}
}
