
//check routes.js to see what other functions need to be implemented. hint:"you are missing one"
var Book = require('./bookModel.js');

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
	insertBooks : function(req,res){
	 for(var i = 0; i < req.body.length; i++){
       Book.create(req.body[i],function(err,book){
        if(err)
      	console.log(err)
 	  })
     }
     res.status(201).send({})
    },
	getByName : function (req, res) {
		Book.findOne({title : req.params.title},function(err,book){
          if(err){
          	console.log(err)
          }else{
          	res.json(book)
          }
		})
	}
}
