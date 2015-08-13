var Order = require('../models/Order');

module.exports = {
	create: function(req, res){
		var newOrder = new Order(req.body);
		newOrder.save(function(err, result){
			if (err) return res.status(500).send(err);
			res.send(result);
		})
	},
	read: function(req, res){
		Order.find(req.query)
		.exec(function(err, result){
			if (err) return res.status(500).send(err);
			res.send(result);
		})
	},
	update: function(req, res){
		Order.findAndUpdateById(req.query, req.body, function(err, result){
			if (err) return res.status(500).send(err);
			res.send(result);			
		})
	},
	delete: function(req, res){
		Order.findAndRemoveById(req.query, function(req, res){
			if (err) return res.status(500).send(err);
			res.send(result);		
		})
	}
}