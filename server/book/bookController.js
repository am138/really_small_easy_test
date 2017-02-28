
//check routes.js to see what other functions need to be implemented. hint:"you are missing one"
var Book = require('../book/bookModel.js');


module.exports ={
	//get all the books controller
	getAllBooks : function (req, res) {
		Book.find({},function (err,AllBooks) {
			if (err) {
				res.status(500).send(err);
			}else{
				res.json(AllBooks)
			}
		})
	},
	//insert books controller
	insertBooks : function (req, res) {
		console.log('-------------------------------',req.body)
		// edpend on what the user post in the body i should use this data and insert it in the db 
			Book.create(req.body, function (err, dataInserted) {
				if (err) {
					res.status(500).send(err);
				}else{
					res.status(300).json(dataInserted);
				}
		})


	},
	getByName : function(req,res){
		var username = req.params.name;
		console.log('-------useeeer',username)
		Book.findOne({ username: username }, function (err, Book) {
  			if (err) throw err;
		    res.json(Book)

  			console.log('found//////////')

  		})

	}
}
