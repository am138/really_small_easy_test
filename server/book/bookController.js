var Book = require ('./bookModel');
//check routes.js to see what other functions need to be implemented. hint:"you are missing one"
module.exports ={
	getByName : function (req, res) {
		Book.findOne({title : req.params.title}),function (err, book) {
			if (err) {
				res.status(500).send(err);
			}else{
				res.json(book);
			}
		}
	},
	getAllBooks : function (req, res) {
		Book.find().exec(function (err, allbooks) {
			if(err){
				res.status(500).send(err);
			}else{
				res.status(200).json(allbooks)
			}
		})
	},
	
	insertBook : function (req, res) {
		Book.findOne({title : req.params.title})
		.exec(function (error, book) {
			console.log(book)
			if(book){
				res.json(new Error('book already exist!'));
			}else{
				var newBook = new Book ({
					title : req.body.title,
					auther:req.body.auther,
					pageNumber : req.body.pageNumber
				});
				newBook.save(function(err, newBook){
					if(err){
						res.status(500).send(err);
					}else{
						res.status(201).json(newBook)
					};
				});
			}
		})
	} 
}