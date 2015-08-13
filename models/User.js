var mongoose = require('mongoose');
var cartSchema = require('../cart_schema');

var userSchema = new mongoose.Schema({
	username: {type: String, index: true, require: true, maxlength: 20, unique: true},
	email: {type: String, index: true, require: true, maxlength: 20, unique: true},
	cart: [cartSchema]
})