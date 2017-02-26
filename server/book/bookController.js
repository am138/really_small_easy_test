var Book = require('./bookModel')
//check routes.js to see what other functions need to be implemented. hint:"you are missing one"
module.exports ={
	//get all the books controller
	getAllBooks : function (req, res) {
		Book.find().exec(function (err,AllBooks) {
			if (err) {
				res.status(500).send(err);
			}else{
				res.status(200).json(AllBooks)
			}
		})
	},
	//insert books controller
	insertBooks : function (req, res) {
		console.log(req.body,"+++++++++++++++++++++++")
		//So loop through array, and create with key title instances and save 
		//for(var i = 0, i<req.body.length; i++){
			// Book.create(req.body[i], function (err, dataInserted) {
			// 	if (err) {
			// 		console.log(err)
			// 		res.status(500).send(err);
			//.save
			// 		res.status(201).json(dataInserted);
			// 	}
		
			Book.create(req.body[0], function (err, dataInserted) {
				if (err) {
					console.log(err)
					res.status(500).send(err);
				}else{
					res.status(201).json(dataInserted);
				}
		
		})
	},
	getByName : function (req, res) {
		Book.find({name:req.params.name}, function (err, book) {
			if (err) {
				res.status(500).send(err);
			}else{
				res.status(201).json(book)
			}
		})
	}
}
