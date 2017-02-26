var Book=require("./bookModel.js")
//check routes.js to see what other functions need to be implemented. hint:"you are missing one"
module.exports ={
	//get all the books controller
	getAllBooks : function (req, res) {
		Book.find({},function (err,AllBooks) {
			if (err) {
				res.status(500).send(err);
			}else{
				res.status(200);
				res.json(AllBooks)
			}
		})
	},
	//insert books controller
	insertBooks : function (req,res) {
			Book.create(req.body[0], function (err, dataInserted) {
				if (err) {
					res.status(500).send(err);
				}else{
					res.status(201);
					res.json(dataInserted);
				}
		})
	},
	getByName:function(req,res){

Book.find({title : req.params.name},function (err, data) {
			if (err) {
				res.status(500).send(err);
			}else{
				res.status(200);
				res.json(data);
			}
		})
}
}