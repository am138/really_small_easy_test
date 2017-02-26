var Book = require('./bookModel.js')

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
		console.log(req.body)
		for (var i = 0; i < req.body.length; i++) {
			var dataInserted = new Book({
				title : req.body[i].title,
				auther : req.body[i].auther,
				pageNumber : req.body[i].pageNumber
			})
			Book.create(dataInserted, function (err, dataInserted) {
				if (err) {
					// console.log(err, "HELLO")
					res.status(500).send(err);
				}
			})
		}
		res.status(201).json(dataInserted);
	},
	getByTitle : function (req, res) {
		Book.findOne({title:req.body.title}).exec(function(err,book){
			if(err){
				throw err
			}else{
				res.json(book)
			}
		})
	}
}
