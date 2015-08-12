var Product = require('../models/Product');

module.exports = {
	create: function(req, res){
		var newProduct = new Product(req.body);
		newProduct.save(function(err, result){
			if(err){ 
				return res.status(500).send(err);
			} else {
				res.send(result);
				console.log('posted: ', result);
			}
		});
	},
	read: function(req, res){
		Product.find(req.query)
		.sort('name')
		.exec(function(err, result){
			if(!err){
				res.send(result);
			}else{
				console.log(err);
				return res.status(500).send(err);
			}
		});
	},
	update: function(req, res){
		Product.findByIdAndUpdate(req.params.id, function(err, result){
			if(err){
				console.log(error);
				return res(500).send(err);
			}else{
				res.send(result);
			}
		});
	},
	delete: function(req, res){
		Product.findByIdAndRemove(req.params.id, function(err, result){
			if(err){
				console.log(error);
				return res.status(500).send(err);
			} else {
				res.sent(result);
			}
		});
	}
}
