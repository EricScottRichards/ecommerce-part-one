var mongoose = require('mongoose');

var productSchema = new mongoose.Schema ({
	name        : {type: String, required: true, index: true, unique: true},
	description : {type: String, required: true, minlength: 20},
	price       : {type: Number, required: true, min: 0}
});

module.exports = mongoose.model('Product', productSchema);