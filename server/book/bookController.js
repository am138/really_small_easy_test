
//check routes.js to see what other functions need to be implemented. hint:"you are missing one"
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
			Book.create(data, function (err, dataInserted) {
				if (err) {
					res.status(500).send(err);
				}else{
					res.status(300).json(dataInserted);
				}
		})
	}
}
