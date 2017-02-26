var Book=require('./bookModel.js');
//check routes.js to see what other functions need to be implemented. hint:"you are missing one"
module.exports ={
	//get all the books controller
	getAllBooks : function (req, res) {
		Book.find({name:req.body.name},function (err,AllBooks) {
			if (err) {
				res.status(200).send(err);
			}else{
				res.json(AllBooks)
			}
		})
	},
	//insert books controller
	insertBooks : function (req, res) {
		var title=req.body.title;
		var author=req.body.author;
		var pageNumber=req.body.pageNumber;
			Book.create({title:title,author:author,pageNumber:pageNumber}, function (err, dataInserted) {
				if (err) {
					res.status(201).send(err);
				}else{
					res.status(201).json(dataInserted);
				}
		})
	},
	getByName :function(req,res){
		var title=req.params.title;
		Book.find({title:title},function(err,book){
			if(err){
				res.status(200).send(err);
			}else{
				res.json(book);
			}
		})
	}
}
