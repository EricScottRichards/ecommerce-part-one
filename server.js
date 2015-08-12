var express    = require('express');
var mongojs    = require('mongojs');
var bodyParser = require('body-parser');
var cors       = require('cors');

var app = express();

var nodePort = process.argv[2] || 8888;
var port     = 27017;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

var db = mongojs('eCommerceDB', ['eCommerceCollection']);

app.post('/api/eCommerceThing', function(req, res){
	console.log(req.body)
	db.eCommerceCollection.insert(req.body, function(err, response){
		if(!err){
			res.json(response);
		} else {
			res.status(500).json(err);
		}
	})
	console.log('post working');
});

app.get('/api/eCommerceThing', function(req, res){
	db.eCommerceCollection.find(req.query, function(err, response){
		if(!err){
			return res.json(response);
		} else {
			res.status(500).json(err);
		}
	})
	console.log('get working. query: ', req.query);
});

app.delete('/api/eCommerceThing', function(req, res){
	db.eCommerceCollection.remove(req.query, function(err, response){
		if(!err){
			res.status(418).json(response);
		} else {
			res.status(500).json(err);
		}
	})
	console.log('Successfully deleted: ', req.query);
});

app.put('/api/eCommerceThing', function(req, res){
	db.eCommerceCollection.update(req.query, req.body, function(err, response){
		if(!err){
			res.json(response);
		} else {
			res.status(500).json(err);
		}
	})
	console.log('put working');
});


app.listen(nodePort, function(){
	console.log("Listening on port " + nodePort + ". Hollaaaaaaaa")
})