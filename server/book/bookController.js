
//check routes.js to see what other functions need to be implemented. hint:"you are missing one"
var Book =require('./bookModel.js')
module.exports ={
	//get all the books controller
	getAllBook : function (req, res) {
		Book.find().exec(function (err, AllBooks) {
			if(err){
				res.status(500).send('err');
			}else{
				res.status(200).send(AllBooks);
			}
		});
	},
	getByName : function (req,res) {
		Book.find({name:req.params.name}).exec(function(err,book) {
			if (err) {
				res.status(500).send(err);
			}else{
				res.status(200).json(book)
			}
		})	
	},
	insertBook : function (req, res) {
		for (var i = 0; i < req.body.length; i++) {
			var NewBook = new Book ({
		        title: req.body[i].title,
		        auther: req.body[i].auther,
		        pageNumber: req.body[i].pageNumber
			});
			NewBoo.save(function (err,newBook) {
				console.log("newBook")
				if (err) {
					res.status(500).res.send(err);
					console.log(err)
				}
			})

		}
		res.json(req.body);
		console.log('insert Book succefuly')
	}
}

