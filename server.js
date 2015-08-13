var express    = require('express');
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
var cors       = require('cors');
var bcrypt     = require('bcrypt');

var ProductCtrl = require('./controllers/ProductCtrl');
var OrderCtrl   = require('./controllers/OrderCtrl');

var app = express();

var nodePort = process.argv[2] || 8889;
var port     = 27017;
var mongoUri = 'localhost:27017/eCommerceDB';

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

///////////////////////////
//  Connect to Mongoose  //
///////////////////////////
mongoose.connect(mongoUri, function(err){
	if(err){
		console.log(err)
		return;
	}
	console.log("Connecting to Mongo a la: " + mongoUri);
	app.listen(nodePort, function(){
		console.log("Listening on port: " + nodePort)
	})
})

app.post('/api/product'   , ProductCtrl.create);
app.get('/api/product'    , ProductCtrl.read);
app.put('/api/product'    , ProductCtrl.update);
app.delete('/api/product' , ProductCtrl.delete);

app.post('/api/order', ProductCtrl.create);
app.get('/api/order', ProductCtrl.read);
app.put('/api/order', ProductCtrl.update);
app.delete('/api/order', ProductCtrl.delete);
