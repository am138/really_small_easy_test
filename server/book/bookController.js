
//check routes.js to see what other functions need to be implemented. hint:"you are missing one"
var Book=require('./bookModel.js');
module.exports ={
	//get all the books controller
	getAllBooks : function (req, res) {
		Book.find({name:req.body.name},function (err,AllBooks) {
			if (err) {
				res.status(500).send(err);
			}else{
				res.json(AllBooks)
			}
		})
	},
	//insert books controller
	insertBooks : function (req, res) {
			Book.create(req.body, function (err, dataInserted) {
				if (err) {
					res.status(500).send(err);
				}else{
					res.status(300).json(dataInserted);
				}
		})
	},
	getByName:function(req,res){
		var title = req.params.title;
		console.log(req.params.title);
		Book.find({title:title},function (err, book) {
			if(err){
				res.status(500).send('err');
			}else{
				res.status(200).send(book);
			}
		})
	}


}
