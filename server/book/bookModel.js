var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
	title : {
		type : String,
		required : true
	},
	author : {
		type : String
	},
	pageNumber : {
		type : Number
	}
});

var book = mongoose.model('Book', bookSchema);

module.exports = book; 