var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema ({
	user    : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	product : [
		{
			name        : {type: String, required: true, index: true, unique: true},
			description : {type: String, required: true, minlength: 20},
			price       : {type: Number, required: true, min: 0}	
		}
	]
})

module.exports = mongoose.model('Order', orderSchema);