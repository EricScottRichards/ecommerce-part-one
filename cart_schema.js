var mongoose = require('mongoose');

var cartSchema = new mongoose.Schema({
	product: {type: mongoose.Types.Object.Id, index: true, required: true},
	quantity: {type: Number, min: 1, required: true}
})

module.exports = cartSchema;