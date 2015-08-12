var express    = require('express');
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
var cors       = require('cors');
var bcrypt     = require('bcrypt');

var ProductCtrl = require('./controllers/ProductCtrl');

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

app.post('/api/eCommerceThing', ProductCtrl.create);
app.get('/api/eCommerceThing', ProductCtrl.read);
app.put('/api/eCommerceThing/:id', ProductCtrl.update);
app.delete('/api/eCommerceThing/:id', ProductCtrl.delete);
