var Book = require('./bookModel.js');
//check routes.js to see what other functions need to be implemented. hint:"you are missing one"
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


		var newbook = new book ({
			auther : req.body.auther,
			type:req.body.type,
			pageNumber:req.body.pageNumber

		});

		newbook.save(function(err, newbook){
			if(err){
				res.status(500).send(err);
			} else {
				res.status(200).send(newbook);
			};
		})
	},
	getBytitle:function(req,res){
		Book.findOne({title : req.params.title}),function (err,Book) {
			if (err) {
				res.status(500).send(err);
			}else{
				res.json(Book)
			}
		}
	}
}

