var Product = require('../models/Product.js');

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
		console.log(req.body)
		Product.update(req.query, req.body, function(err, result){
			if(err){
				console.log(error);
				return res(500).send(err);
			}else{
				res.send(result);
			}
		});
	},
	delete: function(req, res){
		Product.remove(req.query, function(err, result){
			if(err){
				console.log(error);
				return res.status(500).send(err);
			} else {
				res.sent(result);
			}
		});
	}
}
